let task = document.querySelector('#inputField');
let taskVal;
let todotask;
let mainWrapper;
let todo_list = document.querySelector('#todo-list');

const doIt = () => {
    todotask = task.value;
    let inputfield = document.createElement('input');
    inputfield.setAttribute('type', 'checkbox');
    inputfield.setAttribute('class', 'ite');

    let para = document.createElement('p');
    para.setAttribute('class', 'ite');
    para.innerText = todotask;

    let wrapper1 = document.createElement('div');
    wrapper1.setAttribute('class', 'iteminner');
    wrapper1.appendChild(inputfield);
    wrapper1.appendChild(para);

    let button1 = document.createElement('button');
    button1.setAttribute('class', 'ite');
    button1.classList.add('delete');
    button1.innerText = 'Delete';

    let wrapper2 = document.createElement('div');
    wrapper2.setAttribute('class', 'iteminner');
    wrapper2.appendChild(button1);

    mainWrapper = document.createElement('div');
    mainWrapper.setAttribute('class', 'item');
    mainWrapper.appendChild(wrapper1);
    mainWrapper.appendChild(wrapper2);
};

task.addEventListener('blur', doIt);

let addButton = document.querySelector('#AddButton');

addButton.addEventListener('click', () => {
    todo_list.appendChild(mainWrapper);
    task.value = "";

    // Move the deleteButton query here, after buttons are created
    let deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((a) => {
        a.addEventListener('click', () => {
            const item = a.closest('.item');
            item.remove();
            console.log('removed');
        });
    });
});
