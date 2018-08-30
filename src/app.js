const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js');
const MunroView = require('./views/munro_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const munroListViewContianer = document.querySelector('#munros');
  const munroListView = new MunroListView(munroListViewContianer);
  munroListView.bindEvents();

  const selectElement = document.querySelector('#regions');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents()


const munros = new Munros();
munros.bindEvents();
munros.getData();




});
