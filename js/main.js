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
let $idNumber = 0;
let $allTasks;

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
    $allTasks = $ulList.getElementsByTagName('li');
};

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
};

const addNewTask = () => {  if ($todoInput.value !== '') {
    $idNumber++;
    $newTask = document.createElement('li');
    $newTask.textContent = $todoInput.value;
    $newTask.setAttribute('id', `todo-${$idNumber}`);
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
        editTask(event);
    } else if (
        event.target.closest('button').className === 'delete'
    ) {
        deleteTask(event);
    };
};

const editTask = (event) => {
    const oldTodo = event.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popup.style.display = 'flex';
};

const changeTodo = () => {
    if ($popupInput.value !== ''){
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = '';
        $popupInfo.innerText = '';
    } else {
        $popupInfo.innerText = 'You must enter some content!'
    };
};

const closePopup = () => {
        $popup.style.display = '';
        $popupInfo.innerText = '';
};

const deleteTask = (event) => {
    const deleteTodo = event.target.closest('li');
    deleteTodo.remove();
    if ($allTasks.length === 0) {
        $alertInfo.innerText = 'No tasks on the list.'
    }
};

document.addEventListener('DOMContentLoaded', main);