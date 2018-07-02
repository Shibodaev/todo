//
// var myFunc = addEventListener('click' , function (base, step) {
//
// 	myFunc(2,2);
// 	return console.log(myFunc);
// }) ;



// ----------------------
// //функция подсчетов кликов
// (function () {
// 	var glob = 0,
// 		oneButton = document.getElementById("oneButton"),
// 		parent = document.querySelector('.parent-button'),
// 		twoButton = document.getElementById("twoButton"),
// 		oneEnter = document.getElementById('oneEnter'),
// 		twoEnter = document.getElementById('twoEnter');
// // parent.onclick = function(e){
// // 	return console.log(1);
// // };
// 	oneButton.onclick = function () {
// 		if ( glob == 0 ) {
// 			console.log("1");
// 			glob += +1;
// 			oneEnter.innerHTML = +glob;
// 		} else {
// 			console.log("1");
// 			glob += +1;
// 			oneEnter.innerHTML = +glob;
// 		}
// 	};
// 	twoButton.onclick = function () {
// 		if ( glob == 0 ) {
// 			glob += +1;
// 			twoEnter.innerHTML = +glob;
// 		} else {
// 			console.log("2");
// 			glob += +1;
// 			oneEnter.innerHTML = +glob;
// 		}
// 	};
// })();

// oneButton.onclick = function (e) {
// 	e.target
// };
// twoButton.onclick = function () {
//
// };
//----------------------------------------------------------
//Функция вывода текста перед праграфом insertAdjacentText
//----------------------------------------------------------
// (function () {
// 	var body = document.body;
// 	var arr = [];
// 	// document.querySelectorAll('p').style.color;
// 	var p = document.body.getElementsByTagName('p');
// 	for (var i = 0; i < p.length; i++) {
// 		p[i].insertAdjacentText('afterBegin', i);
// 	}
// }());


// var generator2 =  sequence(10,3);
// var arr = [];
// window.onload = function () {
// 	document.getElementById('button').onclick = function () {
// 		var input = document.getElementById('input').value;
// 		var obj = {};
// 		obj.todo = input;
// 		obj.check = false;
// 		var i = arr.length;
// 		arr[i] = obj;
// 		console.log(obj);
// 		out();
// 	};
// 	function out() {
// 		var out = "";
// 		for(var key in arr){
// 			if( arr[key].check == true ){
// 				out += '<input type="checkbox" checked>'
// 			} else {
// 				out += '<input type="checkbox">'
// 			}
// 			out += arr[key].todo + "<br>";
// 			document.getElementById('out').innerHTML = out;
// 		}
// 	}
// };
// window.onload = function () {
// 	document.getElementById('button').onclick = function () {
// 		var add = document.getElementById('input').value;
// 		var temp = {};  // создаю ассоцативный массив
// 		temp.todo = add; //  добавляю дело
// 		temp.check = false; // чекбокс по старту фолс
// 		var i = arr.length;
// 		arr[i] = temp;
// 		out();
// 	};
//
// 	function out() {
// 		var out = '';
// 		for (var key in arr) {
// 			out += arr[key].todo + '<br>';
// 			document.getElementById('out').innerHTML = out;
// 		}
//

// if(arr[i].  ){
//
// }
// 	}
// };


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
