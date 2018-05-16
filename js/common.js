var arr = [];
window.onload = function () {
	if(localStorage.getItem('todo') != undefined ) {
		arr = JSON.parse(localStorage.getItem('todo'));
		out();
	}
	document.getElementById('button').onclick = function () {
		var input = document.getElementById('input').value;
		if (input === "") {
			alert('введите значение в поле!!');
		} else {
			if(localStorage.getItem('todo') != undefined ) {
				arr = JSON.parse(localStorage.getItem('todo'));
				out();
			}
			var obj = {};
			obj.todo = input;
			obj.check = false;
			var i = arr.length;
			arr[i] = obj;
			console.log(obj);
			out();
			localStorage.setItem('todo', JSON.stringify(arr));
		}
	};
	function out() {
		var out = "";
		for (var key in arr) {

			if (arr[key].check == true) {
				out += '<input type="checkbox" checked>'

			} else {
				out += '<input type="checkbox">'
			}

			out += arr[key].todo + "<br>";
			document.getElementById('out').innerHTML = out;
			//URL=https://www.youtube.com/watch?v=GlW0ZnPstpk
			var  myOut = document.getElementById('out');
			myOut.addEventListener('click', function(e) {
				var checkk = document.querySelector('input');
				if( e.target.tagName == 'input' ) {
					console.log('Hi');
				}
			})
		}

		// var box = e.target;
		// box.onclick =  function(e){
		// 	console.log('hi');
		// 	if ( box.check == true ) {
		// 		console.log(true);
		// 		return e.target.classList.toggle("checked");
		// 	}
		// }

	}
};


// var parentElement = document.body,
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
//
//
// /* 4 ------------------------------- */
// /* создаю функцию получения значения инпут */
//
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
//		
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
//
//
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
//
// function setAttr(el, button) {
// 	button = { type: "submit", id: "button", value: "Добавить", onclick: "add()" };
// 	for (var key in button) {
// 		el.setAttribute(key, button[key]);
// 	}
// }
// setAttr(inputSubmit);
//
// function button2(el, buttonAttr) {
// 	buttonAttr = { type: "submit", id: "button", value: "Удалить", onclick: "del()" };
// 	for (var key in buttonAttr) {
// 		el.setAttribute(key, buttonAttr[key]);
// 	}
// }
// button2(inputSubmit2);
//
// /* 3 ------------------------------- */
// /* Разобратся с добавлением автоматичиски атрибутов с id label */
// label.setAttribute("for", "input");
// label.textContent = (' Добавьте Задание');
// ol.setAttribute("id", "list");
//
//
//
//
//
//
//
//
//
//
//
