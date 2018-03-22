'use strict';
let pomelo = require('pomelo');
const logger = require('pomelo-logger');
let app = pomelo.createApp();
app.set('name', 'h5_game_server');
//pomelo 基础配置
app.configure('production|development', 'connector', function () {
    app.set('connectorConfig',
        {
            connector: pomelo.connectors.hybridconnector,
            heartbeat: 80,
            useDict: true,
            useProtobuf: true
        });
});
//HTTP 接口服务
if (app.getServerType() === 'http') {
    let entryJs = app.getCurServer().entryJs;
    if (entryJs) {
        require(`./http/${entryJs}`)(app);
    }
}
// 日志输出等级
app.configure('production|development', function () {
    logger.setGlobalLogLevel(logger.levels.WARN);
});

//加载游戏
app.configure('production|development','animal', function () {
    app.load(require('./app/components/animalInit'), app);//加载老虎机
});

process.on('uncaughtException', function (err) {
    console.error(' Caught exception: ' + err.stack);
});
app.start();

