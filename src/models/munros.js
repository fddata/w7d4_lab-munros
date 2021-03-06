const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.munros = [];
};


Munros.prototype.bindEvents = function () {
PubSub.subscribe('SelectView:change', (event) => {
  const selectedIndex = event.detail;
  // console.log(this.regions);
  selectedRegion = this.regions[selectedIndex]
PubSub.publish('Munros:selected-region-ready', selectedRegion)


});
};
//
// Munros.prototype.publishRegionDetail = function (regionIndex) {
// const selectedRegion = this.region[regionIndex];
//
// // console.log(selectedRegion);
// };



Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    // this.munros = data;
    this.handleDataReady(data);
    console.log(this.regions);
    PubSub.publish('Munros:munro-all-regions-data-ready', this.regions);
  });
};




Munros.prototype.handleDataReady = function(munros){
  const regionName = this.getRegionNames(munros);
  this.modelRegions(munros, regionName);
}

Munros.prototype.getRegionNames = function (munros) {
return munros.map(munro => munro.region).filter((region, index, regions) => regions.indexOf(region) === index );
};


Munros.prototype.modelRegions = function (munros, regionNames) {
this.regions = regionNames.map((regionName) => {
  return {
    name: regionName,
    munros: this.munrosByRegion(munros, regionName)
  };
});
};


Munros.prototype.munrosByRegion = function (munros, region) {
return munros.filter(munro => munro.region === region);
};

module.exports = Munros;
