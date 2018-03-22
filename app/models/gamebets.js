'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const GameBets = db.define('h5_t_gamebets', {
    gameId: { type: Sequelize.INTEGER, primaryKey: true },//游戏编号
    bankers: { type: Sequelize.STRING(3000), 'allowNull': false,defaultValue:'[]' },//庄家列表
    muls:{ type: Sequelize.STRING(3000),defaultValue:'[]' }//下注项倍率
});
module.exports = GameBets;