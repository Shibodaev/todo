;
(function () {
    var entryField = document.getElementById('enter'),
        addButton = document.getElementById('button'),
        list = document.getElementById('list'),
        btnDelete = document.querySelector(".btn-delete"),
        saveTask = document.querySelector(".btn-save"),
        date = new Date(),
        storage = localStorage;

    // проверяет ввод в поле инпут, если пусто то кнопка вывода дела не работает
    var inputValue = () => {
        if (entryField.value.length > 0) {
            addButton.removeAttribute('disabled');
        } else {
            addButton.setAttribute('disabled', 'disabled');
        }
    }
    entryField.addEventListener("input", inputValue);

    var addCase = addButton.addEventListener("click", function () {
        var close = document.createElement("span");
        var listItem = document.createElement('li');

        close.classList.add('close');
        list.appendChild(listItem).innerHTML =
            `<span class="text">${entryField.value}</span> <span class="time"> ${date.toLocaleDateString() + "<br>"  + date.toLocaleTimeString()}</span>`
        listItem.appendChild(close).innerHTML = "X";
        listItem.onclick = () => listItem.firstChild.style.textDecoration = "line-Through";
    }, true);
    saveTask.addEventListener('click', () => {
        storage.setItem( "todos",  list.innerHTML);
    });
    // вывожу сохранённые пункты
    ;(function() {
        list.innerHTML = localStorage.getItem('todos');
    }());
    
})();