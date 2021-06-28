const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// Item Lists
const itemLists = document.querySelectorAll('.item-list');
const whatList = document.getElementById('what-list');
const whoList = document.getElementById('who-list');
const whereList = document.getElementById('where-list');
const whenList = document.getElementById('when-list');
const whyList = document.getElementById('why-list');
const howList = document.getElementById('how-list');

// Items
let updatedOnLoad = false;

// Initialize Arrays
let whatListArray = [];
let whoListArray = [];
let whereListArray = [];
let whenListArray = [];
let whyListArray = [];
let howListArray = [];
let listArrays = [];

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns() {
  if (localStorage.getItem('whatItems')) {
    whatListArray = JSON.parse(localStorage.whatItems);
    whoListArray = JSON.parse(localStorage.whoItems);
    whereListArray = JSON.parse(localStorage.whereItems);
    whenListArray = JSON.parse(localStorage.whenItems);
    whyListArray = JSON.parse(localStorage.whyItems);
    howListArray = JSON.parse(localStorage.howItems);
  } else {
    whatListArray   = ['Responsive Website'];
    whoListArray    = ['By: Jodecir Neto'];
    whereListArray  = ['HTML - CSS - JS'];
    whenListArray   = ['Start: 25/06/2021'];
    whyListArray    = ['Improve my JS'];
    howListArray    = ['Udemy - Origamid - DIO'];
  }
}

// Set localStorage Arrays
function updateSavedColumns() {
  listArrays = [whatListArray, whoListArray, whereListArray, whenListArray, whyListArray, howListArray];
  const arrayNames = ['what', 'who', 'where', 'when', 'why', 'how',];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
  });
}

// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
  console.log('columnEl:', columnEl);
  console.log('column:', column);
  console.log('item:', item);
  console.log('index:', index);
  // List Item
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = item;
  // Append
  columnEl.appendChild(listEl);
}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  // Check localStorage once
  if (!updatedOnLoad) {
    getSavedColumns();
  }
  
  whatList.textContent = '';
  whatListArray.forEach((whatItem, index) => {
    createItemEl(whatList, 0, whatItem, index) 
  });
  whoList.textContent = '';
  whoListArray.forEach((whoItem, index) => {
    createItemEl(whoList, 1, whoItem, index) 
  }); 
  whereList.textContent = '';
  whereListArray.forEach((whereItem, index) => {
    createItemEl(whereList, 2, whereItem, index) 
  }); 
  whenList.textContent = '';
  whenListArray.forEach((whenItem, index) => {
    createItemEl(whenList, 3, whenItem, index) 
  }); 
  whyList.textContent = '';
  whyListArray.forEach((whyItem, index) => {
    createItemEl(whyList, 4, whyItem, index) 
  }); 
  howList.textContent = '';
  howListArray.forEach((howItem, index) => {
    createItemEl(howList, 5, howItem, index) 
  });

  // Don't run more than once, Update Local Storage
  updatedOnLoad = true;
  updateSavedColumns();
}
// Add to Column List, Reset Textbox
function addToColumn(column) {
  const itemText = addItems[column].textContent;
  const selectedArray = listArrays[column];
  selectedArray.push(itemText);
  addItems[column].textContent = '';
  updateDOM(column);
}

// Show Add Item Input Box
function showInputBox(column) {
  addBtns[column].style.visibility = 'hidden';
  saveItemBtns[column].style.display = 'flex';
  addItemContainers[column].style.display = 'flex';
}

// Hide Item Input Box
function hideInputBox(column) {
  addBtns[column].style.visibility = 'visible';
  saveItemBtns[column].style.display = 'none';
  addItemContainers[column].style.display = 'none';
  addToColumn(column);
}

//On Load
updateDOM();