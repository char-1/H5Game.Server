'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Product = db.define('h5_t_products', {
    productId: { type: Sequelize.STRING, primaryKey: true },//商品编号
    productName: { type: Sequelize.STRING, 'unique': true },//商品名称
    costMoney: { type: Sequelize.DECIMAL(12, 2), defaultValue: 0 },//需花费金额
    isEnabled: { type: Sequelize.BOOLEAN, defaultValue: true },//是否启用
    identCode: Sequelize.STRING//识别码
});
module.exports = Product;