const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunroListView = function (container) {
  this.container = container;
};

MunroListView.prototype.bindEvents = function (){
  PubSub.subscribe('Munros:selected-region-ready', (event) => {
    this.regions = event.detail;
    console.log(this.regions);
    this.render();
  });
};

MunroListView.prototype.render = function () {
  this.regions.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};



module.exports = MunroListView;
