let $todoInput; //miejsce wpisywania treści przez użytkownika
let $alertInfo; //info o braku zadań
let $addBtn; //przycisk dodawania nowych elementów
let $ulList; //lista zadań
let $newTask; //nowe LI, nowe zadanie

let $popup; //pobrany popup
let $popupInfo; //alert w popupie po dodaniu pustego tekstu
let $editedTodo; //edytowany task
let $popupInput; //test wpisywany w knie popup
let $addPopupBtn; //przycisk "confirm" w popupie
let $closeTodoBtn; //zamknij popup

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};


const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
};

const addNewTask = () => {  if ($todoInput.value !== '') {
    $newTask = document.createElement('li');
    $newTask.textContent = $todoInput.value;
    $ulList.appendChild($newTask);
    $todoInput.value = '';
    $alertInfo.innerText = '';
    createToolsArea();
    } else {
        $alertInfo.innerText = "Enter your task first!";
    };
};

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText='EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fa fa-times">';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);

};

const checkClick = (event) => {
    if (event.target.closest('button').classList.contains('complete')) {
        event.target.closest('li').classList.toggle('completed');
        event.target.closest('button').classList.toggle('completed');
    } else if (
        event.target.closest('button').className === 'edit'
    ) {
        editTask();
    } else if (
        event.target.closest('button').className === 'delete'
    ) {
        console.log('delete');
    };
};

const editTask = () => {
    $popup.style.display = 'flex';
};

const closePopup = () => {
        $popup.style.display = '';
};

document.addEventListener('DOMContentLoaded', main);