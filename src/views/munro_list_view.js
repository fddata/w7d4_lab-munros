const PubSub = require('../helpers/pub_sub.js');


const MunroListView = function (container) {
  this.container = container;
};

MunroListView.prototype.bindEvents = function (){
  PubSub.subscribe('Munros:munro-data-ready', (event) => {
    this.munros = event.detail;
    console.log(this.munros);
    // this.render();
  });
};


module.exports = MunroListView;
