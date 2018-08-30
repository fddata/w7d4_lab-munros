const MunroView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function (){
  const munrosContainer = document.createElement('div');
  munrosContainer.classList.add('munro-item');

  const name = this.createMunroHeading();
  munrosContainer.appendChild(name);

  const list = this.createMunroList();
  munrosContainer.appendChild(list);

  this.munrosContainer.appendChild(munrosContainer);

};




MunroView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  if(!this.munro.name){
    name.textContent = "Spooky Mystery Munro";
  } else{
    name.textContent = this.munro.name;
  }
  return name;
};


MunroView.prototype.createMunroList = function () {
  const munroList = document.createElement('ul');
  munroList.classList.add('munro-list');
  this.populateList(munroList);
  return munroList;
};


MunroView.prototype.populateList = function (list) {
const munroListItemMeaning = document.createElement('li');
munroListItemMeaning.textContent = `Meaning: "${this.munro.meaning}"`;

const munroListItemHeight = document.createElement('li');
munroListItemHeight.textContent = `Height: ${this.munro.height}m`;

list.appendChild(munroListItemMeaning);
list.appendChild(munroListItemHeight);
};



module.exports = MunroView;
