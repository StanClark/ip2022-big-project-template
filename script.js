const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// Item Lists
const itemLists = document.querySelectorAll('.drag-item-list');
const backlogList = document.getElementById('backlog-list');
const progressList = document.getElementById('progress-list');
const completeList = document.getElementById('complete-list');
const onHoldList = document.getElementById('on-hold-list');

// Items
let updatedOnLoad = false;

// Initialize Arrays
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];

// Drag Functionality
let draggedItem
let currentColumn

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns() {
  if (localStorage.getItem('backlogItems')) {
    backlogListArray = JSON.parse(localStorage.backlogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    backlogListArray = ['Release the course', 'Sit back and relax'];
    progressListArray = ['Work on projects', 'Listen to music'];
    completeListArray = ['Being cool', 'Getting stuff done'];
    onHoldListArray = ['Being uncool'];
  }
}

// Set localStorage Arrays
function updateSavedColumns() {
  localStorage.setItem('backlogItems', JSON.stringify(backlogListArray));
  localStorage.setItem('progressItems', JSON.stringify(progressListArray));
  localStorage.setItem('completeItems', JSON.stringify(completeListArray));
  localStorage.setItem('onHoldItems', JSON.stringify(onHoldListArray));
}

// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
  console.log('columnEl:', columnEl);
  console.log('column:', column);
  console.log('item:', item);
  console.log('index:', index);
  // List Item
  const listEl = document.createElement('li');

  listEl.textContent = item;
  columnEl.appendChild(listEl)

  listEl.classList.add('drag-item');
  listEl.draggable = true;
  listEl.setAttribute('ondragstart','drag(event)');
  

}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  // Check localStorage once
  if(!updatedOnLoad){
    getSavedColumns();
  }

  backlogList.textContent ="";
  backlogListArray.forEach((backlogItem, index) => {
    createItemEl(backlogList, 0, backlogItem, index);
  })

  progressList.textContent ="";
  progressListArray.forEach((progressItem, index) => {
    createItemEl(progressList, 1, progressItem, index);
  })

  completeList.textContent ="";
  completeListArray.forEach((completeItem, index) => {
    createItemEl(completeList, 2, completeItem, index);
  })

  onHoldList.textContent ="";
  onHoldListArray.forEach((onHoldItem, index) => {
    createItemEl(onHoldList, 3, onHoldItem, index);
  })
  
  
  
  // Backlog Column

  // Progress Column

  // Complete Column

  // On Hold Column

  // Run getSavedColumns only once, Update Local Storage


}

function drag(e){
  draggedItem = e.target;
}
