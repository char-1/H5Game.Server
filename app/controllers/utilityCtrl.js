'use strict';
let utilityCtrl = module.exports;
utilityCtrl.pushMessage = function (app, user, route, msg) {
    let tmp = [];
    tmp.push({ uid: user.playerId, sid: user.gameServerId });
    app.get('channelService').pushMessageByUids(route, msg, tmp);
}