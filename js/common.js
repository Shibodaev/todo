

; (function () {
	var entryField = document.getElementById('enter'),
		info = document.getElementById('info'),
		addButton = document.getElementById('button'),
		list = document.getElementById('list'),
		obj = {};
	var inputValue = () => {
		if(entryField.value.length > 0) {
			addButton.removeAttribute('disabled');
			info.innerHTML = '';
		} else {
			addButton.setAttribute('disabled', 'disabled');
			info.innerHTML = "Значение не задано!!!";
		}
	};
	entryField.addEventListener("change",inputValue);
	


	
	close.delMission;
	var addCase = addButton.addEventListener("click", function () {
		var listItem = document.createElement('li'),
		close = document.createElement('span');
		if(close){
			close.classList.add('close');
		}
		list.appendChild(listItem).innerHTML = entryField.value;
		listItem.appendChild(close).innerHTML = "X";
		close.addEventListener('click', delMission	);
		var delMission = function(e) {
			
		}
	}, true);
})();






    // parentElement.
// 	input = document.createElement("input"),
// 	label = document.createElement("label"),
// 	ol = document.createElement("ol"),
// 	inputSubmit = document.createElement("input"),
// 	span = document.createElement("span"),
// 	inputSubmit2 = document.createElement("input"),
// 	arr = [input, label, ol, inputSubmit, inputSubmit2],
// 	arrOl = [],
// /* получение id */
// 	idText = document.getElementById('input'),
// 	idSubmit = document.getElementById('button'),
// 	idOl = document.getElementById('list');


/* 4 ------------------------------- */
/* создаю функцию получения значения инпут */

// function add() {
// 	var idInput = input.value,
// 		li = document.createElement("li");
// 	if (idInput == "") {
// 		arrOl = [];
// 		return ol;
// 	} else {
// 		arrOl.push(idInput);
// 		ol.appendChild(li);
// 		li.innerHTML = '<input type="checkbox">' + '<span class="mission">' + idInput + '</span>';

// 		li.onclick = function (e) {
// 			var checkBox = document.querySelector('[type="checkbox"]');
// 			var mission = document.querySelector('.mission');
// 			if (checkBox.checked) {
// 				return e.target.nextSibling.classList.add("mission-none")
// 			} else {
// 				return e.target.getElementsByClassName("mission").classList.remove("mission-none")
// 			}
// 		}
// 	}
// }


// function del() {
// 	arrOl.pop();
// 	ol.removeChild(ol.children[0]);
// }
// /* 1 ------------------------------- */
// /* цикл добавления елементов на страницу */
// for (var i = 0; i < arr.length; i++) {
// 	parentElement.appendChild(arr[i]);
// }
// /* 2 ------------------------------- */
// /* добавление аттрибутов инпуту */
// function setAttr1(el, attr) {
// 	attr = { type: "text", id: "input" };
// 	for (var key in attr) {
// 		el.setAttribute(key, attr[key])
// 	}
// }
// setAttr1(input);

// function setAttr(el, button) {
// 	button = { type: "submit", id: "button", value: "Добавить", onclick: "add()" };
// 	for (var key in button) {
// 		el.setAttribute(key, button[key]);
// 	}
// }
// setAttr(inputSubmit);

// function button2(el, buttonAttr) {
// 	buttonAttr = { type: "submit", id: "button", value: "Удалить", onclick: "del()" };
// 	for (var key in buttonAttr) {
// 		el.setAttribute(key, buttonAttr[key]);
// 	}
// }
// button2(inputSubmit2);

// /* 3 ------------------------------- */
// /* Разобратся с добавлением автоматичиски атрибутов с id label */
// label.setAttribute("for", "input");
// label.textContent = (' Добавьте Задание');
// ol.setAttribute("id", "list");










