'use strict';
const C = require('../shard/constant');
const uuid = require('node-uuid');
const md5 = require('md5');
const Promise = require("bluebird");
const Player = require('../models/player');
const _ = require('lodash');
let playerCtrl = module.exports;
//玩家登录(手机号、验证码)
playerCtrl.loginAsync = Promise.coroutine(function* (telphone, verifyCode) {
    if (!telphone) return { code: C.FAILD, msg: C.LOGIN_ACCOUNT_NULL };
    if (!telphone) return { code: C.FAILD, msg: C.LOGIN_VERIFY_CODE_NULL };
    let player = yield Player.findOne({
        'where': {
            'telPhone': telphone
        }
    });
    if (!player) return { code: C.FAILD, msg: C.PLAYER_NOT_FOUND };
    else return { code: C.OK, data: player };
});
//玩家注册
playerCtrl.registerAsync = Promise.coroutine(function* (playerType, lastLoginIp, connectorId) {
    let accountId = _.random(1000000, 9000000);
    let player = yield Player.create({
        'playerId': uuid.v1(),
        'accountId': accountId,
        'nickName': (playerType == 0 ? '游客' : '会员') + accountId,
        'playerType': playerType,
        'lastLoginIp': lastLoginIp,
        'connectorId': connectorId
    });
    return player.get({ 'plain': true });
});
//获取玩家信息(主键编号)
playerCtrl.getPlayerByIdAsync = Promise.coroutine(function* (playerId) {
    if (!playerId) return { code: C.FAILD, msg: C.INVALID_PARAMETER };
    return yield Player.findById(playerId);
});
//修改玩家信息
playerCtrl.updatePlayerAsync = Promise.coroutine(function* (fileds, conditions) {
    if (_.isEmpty(fileds) || _.isEmpty(conditions)) return { code: C.FAILD, msg: C.INVALID_PARAMETER };
    let player = yield Player.update(
        fileds,
        {
            'where': conditions
        }
    );
    if (player[0] > 0) return { code: C.OK };
    else return { code: C.FAILD };
});