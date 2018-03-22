//游戏配置相关
'use strict';
const Promise = require('bluebird');
const Games = require('../models/games');
let gamesCtrl = module.exports;

//获取游戏配置
gamesCtrl.getGamesAsync = Promise.coroutine(function* (gameId) {
    if (!gameId) return { code: C.FAILD, msg: C.INVALID_PARAMETER };
    return yield Games.findById(gameId);
});
//设置游戏配置
gamesCtrl.setGamesAsync = Promise.coroutine(function* (gameObject) {
    let game = yield Games.create(gameObject);
    return game.get({ 'plain': true });
});