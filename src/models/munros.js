const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.munros = [];
};


Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    this.munros = data;
    // console.log(this.munros);
    PubSub.publish('Munros:munro-data-ready', this.munros);
  });
};



//
// Munros.prototype.handleDataReady = function(mountains){
//   const mountainName = this.getMunroNames(mountains);
//   this.
// }


module.exports = Munros;
