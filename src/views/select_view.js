const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement){
  this.element = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-all-regions-data-ready', (evt) => {
    // console.log(event.detail);
    this.populate(evt.detail)
  });
//
  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
};
//
SelectView.prototype.populate = function (munros) {
  munros.forEach((munro, index) => {
    const munroOption = this.createOption(munro.name, index);
    this.element.appendChild(munroOption);
  });
};

SelectView.prototype.createOption = function (name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
};



module.exports = SelectView;
