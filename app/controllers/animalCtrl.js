'use strict';
const Promise = require('bluebird');
const playerCtrl = require('./playerCtrl');
const gamesCtrl = require('./gemesCtrl');
const EUS = require('../shard/enums');
let animalPlayersPool = new Map();//游戏玩家信息
//游戏基础配置
let animalBaseConfigs = {
    down_bet_arr: [1, 5, 10, 20, 50, 100],
    down_bet_limit: {
        max: 10000,
        min: 1,
        vip: 0
    },
    rate: 0.05,
    bankerNumber: 10,
    upBankerMin: 10000,
    lottery_manic: {
        "1": 1,
        "2": 1,
        "3": 199,
        "4": 100,
        "5": 100,
        "6": 100,
        "7": 199,
        "8": 100,
        "9": 100,
        "10": 100
    }
};
var animalCtrl = module.exports;
//初始化老虎机
animalCtrl.init = Promise.coroutine(function* (app) {
    let animalConfig = yield gamesCtrl.getGamesAsync(EUS.GAME_CODE.ANIMAL);
    if (!animalConfig) {
        animalConfig = yield gamesCtrl.setGamesAsync({
            'gameId': EUS.GAME_CODE.ANIMAL,
            'configs': JSON.stringify(animalBaseConfigs)
        });
    }
    console.warn(animalConfig.gameId);
});
//玩家加入游戏
animalCtrl.joinGameAsync = Promise.coroutine(function* (playerId) {
    let player = yield playerCtrl.getPlayerByIdAsync(playerId);
    if (!animalPlayersPool.get(playerId) && !player)
        animalPlayers.set(player.playerId, player);
    //加入频道
    let servers = this.app.getServersByType('animal');
    if (player) {

    }
});
//离开游戏
animalCtrl.leaveGameAsync = Promise.coroutine(function* (playerId) {
    if (!animalPlayersPool.get(playerId))
        animalPlayers.delete(playerId);
    //离开频道

    //清空游戏信息
    yield playerCtrl.updatePlayerAsync({ 'gameServerId': '', 'gameId': 0 }, { 'playerId': { '$eq': playerId } });//置空玩家游戏记录
});
//下注金币
animalCtrl.betGoldAstnc = Promise.coroutine(function* (playerId, bets) {

});
//上庄
animalCtrl.upToBankerAsync = Promise.coroutine(function* (playerId) {

});
//下庄
animalCtrl.downBankerAsync = Promise.coroutine(function* (playerId) {

});
//获取排庄列表
animalCtrl.getBankersAsync = Promise.coroutine(function* (playerId) {

});
//游戏结束
animalCtrl.endGameAsync = Promise.coroutine(function* () {
    //重新开始游戏

    //切换庄家
});