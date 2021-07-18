'use strict';

const People = (function () {
    let nameArray = [];
    let form;
    let list;

    function init() {
        cacheDom();
        bindEvent();
    }

    function cacheDom() {
        form = document.forms.addName;
        list = document.querySelector('.list');
    }

    function bindEvent() {
        form.btn.onclick = addPersonName;
        window.addEventListener('keydown', (event) => {
            if(event.keyCode === 13) {
                event.preventDefault();
                addPersonName();
            }
        });
    }

    function render() {
        list.textContent = '';
        for(let i = 0; i < nameArray.length; i++) {
            list.append(createLi(i));
        }
    }
    function createLi(index) {
        let li = document.createElement('li');
        li.classList.add('list__li');
        li.textContent = nameArray[index];
        li.prepend(createButton(index));
        return li;
    }
    function createButton(index) {
        let button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('value', index);
        button.classList.add('list__delete');
        button.textContent = '✖';
        button.addEventListener('click', delPersonName);
        return button;
    }

    function addPersonName() {
        if(form.input.value != 0) {
            nameArray.push(form.input.value);
            form.input.value = '';
            render();
        }
        else {
            form.input.focus();
        }
    }

    function delPersonName(event) {
        nameArray.splice(event.target.value, 1);
        render();
    }
    return {
        init: init
    }
})();

People.init();
