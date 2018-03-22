const animalCtrl=require('../controllers/animalCtrl');
module.exports = function(app, opts) {
    return new animalInit(app, opts);
};
let animalInit = function(app, opts) {
    this.app = app;
}
animalInit.prototype.start = function(cb) {
    process.nextTick(cb);
}
animalInit.prototype.afterStart = function (cb) {
    animalCtrl.init(this.app);
    process.nextTick(cb);
}
animalInit.prototype.stop = function(force, cb) {
    process.nextTick(cb);
}