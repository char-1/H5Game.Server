const Product = require('../models/product');
const C = require('../shard/constant');
const Promise = require("bluebird");
let productCtrl = module.exports;

//获取充值商品列表
productCtrl.getProductList = Promise.coroutine(function* (typeId) {
    let products = yield Product.findAll({
        'where': {
            typeId: typeId
        }
    });
    if (!products) return { code: C.OK, data: [] };
    else return { code: C.OK, data: products };
});
//