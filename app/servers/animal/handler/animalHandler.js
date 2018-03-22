const Promise = require('bluebird');
const animalCtrl = require('../../../controllers/animalCtrl');
const C = require('../../../shard/constant');
const _ = require('lodash');
const Handler = function (app) {
    this.app = app;
};
module.exports = function (app) {
    return new Handler(app);
};
const proto = Handler.prototype;
// 加入游戏
proto.joinGame = Promise.coroutine(function* (msg, session, next) {
    if (!session.uid) return next(null, { code: C.ERROR, msg: C.PLAYER_NOT_LOGIN });
    return animalCtrl.joinGameAsync(session.uid).nodeify(next);
});
// 离开游戏
proto.leaveGame = Promise.coroutine(function* (msg, session, next) {
    if (!session.uid) return next(null, { code: C.ERROR, msg: C.PLAYER_NOT_LOGIN });
    return animalCtrl.leaveGameAsync(session.uid).nodeify(next);
});
// 下注金币
proto.betGold = Promise.coroutine(function* (msg, session, next) {
    if (!session.uid) return next(null, { code: C.ERROR, msg: C.PLAYER_NOT_LOGIN });
    if (!_.isArray(msg.bets)) return next(null, { code: C.FAILD, msg: C.INVALID_PARAMETER });
    return animalCtrl.betGoldAsync(session.uid, msg.bets).nodeify(next);
});
// 请求上庄
proto.upToBanker = Promise.coroutine(function* (msg, session, next) {
    if (!session.uid) return next(null, { code: C.ERROR, msg: C.PLAYER_NOT_LOGIN });
    return animalCtrl.upToBankerAsync(session.uid).nodeify(next);
});
// 请求下庄
proto.downBanker = Promise.coroutine(function* (msg, session, next) {
    if (!session.uid) return next(null, { code: C.ERROR, msg: C.PLAYER_NOT_LOGIN });
    return animalCtrl.downBankerAsync(session.uid).nodeify(next);
});
// 获取庄列表
proto.getBankers = Promise.coroutine(function* (msg, session, next) {
    if (!session.uid) return next(null, { code: C.ERROR, msg: C.PLAYER_NOT_LOGIN });
    return animalCtrl.getBankersAsync(session.uid).nodeify(next);
});
