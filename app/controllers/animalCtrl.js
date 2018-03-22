const Promise = require('bluebird');
const playerCtrl = require('./playerCtrl');
let animalPlayersPool = new Map();//游戏玩家信息
var animalCtrl = module.exports;
//初始化老虎机
animalCtrl.init = Promise.coroutine(function* (app) {
    console.warn('animalCtrl init');
});
//玩家加入游戏
animalCtrl.joinGameAsync = Promise.coroutine(function* (playerId) {
    let player = yield playerCtrl.getPlayerByIdAsync(playerId);
    if (animalPlayersPool.get(playerId) == undefined && !player)
        animalPlayers.set(player.playerId, player);
    //加入频道
    let servers = this.app.getServersByType('animal');
    if (player) {

    }
});
//离开游戏
animalCtrl.leaveGameAsync = Promise.coroutine(function* (playerId) {
    if (animalPlayersPool.get(playerId) == undefined)
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