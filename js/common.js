let parentElement = document.body,
	input          = document.createElement("input"),
	label          = document.createElement("label"),
	ol             = document.createElement("ol"),
	inputSubmit    = document.createElement("input"),
	inputSubmit2   = document.createElement("input"),
	arr            = [ input, label, ol, inputSubmit, inputSubmit2 ],
	arrOl          = [],
/* получение di */
	idText         = document.getElementById('input'),
	idSubmit       = document.getElementById('button'),
	checkbox       = document.querySelector('input[type="checkbox"]'),
	idOl 				= document.getElementById('list');


/* 4 ------------------------------- */
/* создаю функцию получения значения инпут */
function add() {
	var idInput = input.value,
	li          = document.createElement("li");
	if (idInput == "") {
		arrOl = [];
		return ol;
	} else {
		arrOl.push(idInput);
		ol.appendChild(li);
		li.innerHTML = '<input type="checkbox"  >' + idInput;
	}
}
// function liRedactor(el) {
//
// }
function del() {
	arrOl.pop();
	ol.removeChild(ol.children[0]);
}
/* 1 ------------------------------- */
/* цикл добавления елементов на страницу */
for (let i = 0; i < arr.length; i++) {
	parentElement.appendChild(arr[i]);
}
/* 2 ------------------------------- */
/* добавление аттрибутов инпуту */
function setAttr1(el, attr) {
	attr = { type: "text", id: "input"};
	for (let key in attr) {el.setAttribute(key, attr[key])}
}
setAttr1(input);

function setAttr(el, button) {
	button = { type: "submit", id: "button", value: "Добавить", onclick: "add()" };
	for (let key in button) {
		el.setAttribute(key, button[key]);
	}
}
setAttr(inputSubmit);

function button2(el, buttonAttr) {
	buttonAttr = { type: "submit", id: "button", value: "Удалить", onclick: "del()" };
	for (let key in buttonAttr) {
		el.setAttribute(key, buttonAttr[key]);
	}
}
button2(inputSubmit2);

/* 3 ------------------------------- */
/* Разобратся с добавлением автоматичиски атрибутов с id label */
label.setAttribute("for", "input");
label.textContent = (' Добавьте Задание');
ol.setAttribute("id", "list");











