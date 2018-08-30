const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js');
const MunroView = require('./views/munro_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const munroListViewContianer = document.querySelector('#munros');
  const munroListView = new MunroListView(munroListViewContianer);
  munroListView.bindEvents();



const munros = new Munros();
munros.getData();




});
