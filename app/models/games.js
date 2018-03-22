'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Game = db.define('h5_t_games', {
    gameId: { type: Sequelize.INTEGER, primaryKey: true },
    isEnabled: { type: Sequelize.BOOLEAN, defaultValue: true },//是否开启
    orderSort: { type: Sequelize.INTEGER, defaultValue: 0 },//显示顺序
    gameType: { type: Sequelize.INTEGER, defaultValue: 0 },//游戏类型(新游戏、热推游戏...)
    configs: { type: Sequelize.STRING(5000), 'allowNull': false }//详细配置(json字符串)
});
module.exports = Game;