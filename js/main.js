let $todoInput; //miejsce wpisywania treści przez użytkownika
let $alertInfo; //info o braku zadań
let $addBtn; //przycisk dodawania nowych elementów
let $ulList; //lista zadań
let $newTask; //nowe LI, nowe zadanie

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

const addNewTask = () => {  if ($todoInput.value !== '') {
    $newTask = document.createElement('li');
    $newTask.textContent = $todoInput.value;
    $ulList.appendChild($newTask);
    $todoInput.value = '';
    $alertInfo.innerText = '';
    } else {
        $alertInfo.innerText = "Enter your task first!";
    };
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



document.addEventListener('DOMContentLoaded', main);