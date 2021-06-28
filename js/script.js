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
let updateOnLoad = false;

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
  if ("!updateOnload") {
    getSavedColumns();
  }
  
  whatList.textContent = '';
  whatListArray.forEach((whatItem, index) => {
    createItemEl(whatList, 0, whatItem, index) 
  });
  whoList.textContent = '';
  whoListArray.forEach((whoItem, index) => {
    createItemEl(whoList, 0, whoItem, index) 
  }); 
  whereList.textContent = '';
  whereListArray.forEach((whereItem, index) => {
    createItemEl(whereList, 0, whereItem, index) 
  }); 
  whenList.textContent = '';
  whenListArray.forEach((whenItem, index) => {
    createItemEl(whenList, 0, whenItem, index) 
  }); 
  whyList.textContent = '';
  whyListArray.forEach((whyItem, index) => {
    createItemEl(whyList, 0, whyItem, index) 
  }); 
  howList.textContent = '';
  howListArray.forEach((howItem, index) => {
    createItemEl(howList, 0, howItem, index) 
  }); 

  // Run getSavedColumns only once, Update Local Storage

}

//On Load
updateDOM();