'use strict';
const _ = require('lodash');
const md5 = require('md5');
const uuid = require('node-uuid');
const C = require('../../../shard/constant')
const playerCtrl = require('../../../controllers/playerCtrl')
const Promise = require("bluebird");
const Handler = function (app) {
    this.app = app;
    this.sid = app.get('serverId');
};
module.exports = function (app) {
    return new Handler(app);
};
const proto = Handler.prototype;
//进入游戏
proto.entry = Promise.coroutine(function* (msg, session, next) {
    if (session.uid) return next(null, { code: C.FAILD, msg: C.PLAYER_HAS_LOGED });
    let player = null;
    let ip = this.app.get('sessionService').getClientAddressBySessionId(session.id).ip;
    if (msg.playerId)
        player = yield playerCtrl.getPlayerByIdAsync(msg.playerId);
    if (!player) {
        if (msg.autoCreate) {//是否开启游客模式
            player = yield playerCtrl.registerAsync(0, ip, session.frontendId);
        }
        else
            return next(null, { code: C.FAILD, msg: C.MISSING_PARAMETER });
    }
    else {
        if (player.lastLoginToken != '' && msg.token != player.lastLoginToken)
            return next(null, { code: C.FAILD, msg: C.PLAYER_NOT_LOGIN });
    }
    if (!player.isEnabled) return next(null, { code: C.FAILD, msg: C.PLAYER_HAS_LOCKED });
    let self = this, channel = this.app.get('channelService').getChannel("hallChannel", true), connectorId = session.frontendId;
    return Promise.resolve(this)
        .then((cb) => {
            session.bind(player.playerId, cb);
        })
        .then((cb) => {
            channel.add(player.playerId, self.sid);
        })
        .then((cb) => {
            session.set('uid', player.playerId);
            session.set('ip', ip);
            session.set('sid', self.sid);
            session.on('closed', self.userLeave.bind(null, self.app));
            session.pushAll(cb);
        })
        .then((cb) => {
            return next(null, {
                code: C.OK,
                user: player
            });
        });
});
//退出游戏
proto.userLeave = Promise.coroutine(function* (app, session) {
    if (!session || !session.uid) return next(null, { code: C.FAILD, msg: C.PLAYER_NOT_LOGIN });
    const playerId = session.uid;
    let player = playerCtrl.getPlayerByIdAsync(playerId);
    if (player) {
        let channel = app.get('channelService').getChannel("hallChannel", true);
        channel.leave(playerId, player.serverId);
        // 游戏退出
        if (player.gameId) {
            let gameRemote = this.getRemoteById(player.gameId);
            // gameRemote.leaveGame(player.serverId,playerId);
        }
        // 服务器退出
        app.get('sessionService').kick(playerId, () => {
            playerCtrl.updatePlayerAsync({ 'gameServerId': '', 'gameId': 0, 'connectorId': '' }, { 'playerId': { '$eq': playerId } });//置空玩家游戏记录
        });
    }
    // return next(null, { code: C.OK });
});

// 游戏RPC接口
proto.getRemoteByGameId = function (gameId) {
    // switch (gameId) {
    //     case 20011:
    //         return this.app.rpc.animal.animalRemote;
    //     case 10021:
    //         return this.app.rpc.golden.goldenRemote;
    //     case 10031:
    //         return this.app.rpc.niuniu.niuniuRemote;
    //     case 30011:
    //         return this.app.rpc.texaspoker.texaspokerRemote;
    // }
};