const MunroView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function (){
  const munrosContainer = document.createElement('div');
  munrosContainer.classList.add('munro-item');

  const name = this.createMunroHeading();
  munrosContainer.appendChild(name);

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


module.exports = MunroView;
