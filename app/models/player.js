'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Player = db.define('h5_t_players', {
    playerId: { type: Sequelize.STRING, primaryKey: true },
    accountId: { type: Sequelize.INTEGER, allowNull: false },
    telPhone: { type: Sequelize.STRING, 'unique': true },
    nickName: Sequelize.STRING,
    headAvatar: { type: Sequelize.STRING, defaultValue: 'avtar_01' },//头像
    gameId: { type: Sequelize.INTEGER, defaultValue: 0 },
    gameServerId: Sequelize.STRING,
    connectorId: Sequelize.STRING,
    playerType: { type: Sequelize.INTEGER, defaultValue: 0 },//玩家类型
    gold: { type: Sequelize.DECIMAL(12, 2), defaultValue: 0 },
    diamond: { type: Sequelize.DECIMAL(12, 2), defaultValue: 0 },
    isEnabled: { type: Sequelize.BOOLEAN, defaultValue: true },//是否启用
    vipRank: { type: Sequelize.INTEGER, defaultValue: 0 },//VIP等级
    lastLoginAt: Sequelize.DATE,
    lastLoginIp: { type: Sequelize.STRING, defaultValue: '127.0.0.1' },
    lastLoginToken: { type: Sequelize.STRING }
});
module.exports = Player;