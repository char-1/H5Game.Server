'use strict';
const Promise = require("bluebird");
const http = require('http');
const Product = require('../app/models/product')
const Player = require('../app/models/player')
const uuid = require('node-uuid');
const url = require('url');
const qs = require('querystring');
let handler = {};
module.exports = function (app) {
    handler.app = app;
    var server = http.createServer(handler.handle);
    var port = app.getCurServer().httpPort;
    server.listen(port);
    handler.uptime = Date.now();
};
handler.handle = function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (!route[pathname]) {
        res.writeHead(404, {
            'Content-Type': 'text/plain;charset=utf-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
            "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
        });
        res.write('WARNING: Not Found!');
        res.end();
    }
    else {
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
            "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
        });
        if (req.method.toLowerCase() == 'get') {
            let query = url.parse(req.url, true).query;
            return route[pathname](query, req.method, res);
        }
        else if (req.method.toLowerCase() == 'post') {
            let postData = '';
            req.on('data', function (data) {
                postData += data;
            });
            req.on('end', function () {
                let query = {};
                if (/^\s*{.*:.*}\s*$/.test(postData)) {
                    query = JSON.parse(postData);
                }
                else {
                    query = qs.parse(postData);
                }
                return route[pathname](query, req.method, res);
            });
        }
    }
};
let writeOut = function (query, res) {
    if (typeof query != 'object') {
        return res.end(String(query));
    }
    return res.end(JSON.stringify(query));
};
let pagingCondition = function (query) {
    let size = Number(query.size) || 20;
    var result = { limit: size };
    let page = Math.round(Number(query.page) || 1);
    page = page > 0 ? page : 1;
    result.skip = (page - 1) * size;
    return result;
};
//锁定、玩家上下分
const setPlayer = Promise.coroutine(function* (query, method, res) {

});
//添加商品
const addProduct = Promise.coroutine(function* (query, method, res) {
    if (!query.productName || !query.identCode) return writeOut('fail', res);
    let product = Product.build({
        'productId': uuid.v1(),
        'productName': query.productName,
        'costMoney': query.costMoney,
        'identCode': query.identCode
    });
    yield product.save();
    return writeOut('success', res);
});
//获取商品
const getProduct = Promise.coroutine(function* (query, method, res) {
    let rule = pagingCondition(query), products = [], count = 0;
    yield Product.findAndCountAll({
        limit: rule.limit,
        offset: rule.skip
    }).then(function (result) {
        if (result) {
            products = result.rows;
            count = result.count;
        }
    });
    return writeOut({ count: count, list: products }, res);
});

//API路由
let route = {
    '/product/set': addProduct,
    '/product/get': getProduct,
    '/player/set': setPlayer
};