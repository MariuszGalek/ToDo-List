let $todoInput; //miejsce wpisywania treści przez użytkownika
let $alertInfo; //info o braku zadań
let $addBtn; //przycisk dodawania nowych elementów
let $ulList; //lista zadań
let $newTask; //nowe LI, nowe zadanie

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};


const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');

};

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
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

document.addEventListener('DOMContentLoaded', main);