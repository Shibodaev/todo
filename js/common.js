let parentElement = document.body,
	input = document.createElement("input"),
	label = document.createElement("label"),
	ol = document.createElement("ol"),
	inputSubmit = document.createElement("input"),
	idInput = input.value,
	arr = [input, label, ol, inputSubmit],
	inputVal = [];
/* 1 ------------------------------- */
/* цикл добавления елементов на страницу */
for (let i = 0; i < arr.length; i++) {
	parentElement.appendChild(arr[i]);
}
/* 2 ------------------------------- */
/* добавление аттрибутов инпуту */
function setAttr(el, button) {
	button = { type: "submit", id: "button", value: "Добавить", onclick: "add()" };
	for (let key in button) {
		el.setAttribute(key, button[key]);
	}
	console.log('0');
}
setAttr(input);
parentElement
function setAttr1(el, attr) {
	attr = { type: "text", id: "input"};
	for (let key in attr) {el.setAttribute(key, attr[key])}
	console.log('1');
}
setAttr1(input);
/* 4 ------------------------------- */
/* создаю функцию получения значения инпут */
// function save() {
// 	addVal = inputVal.push(idInput);
// 	return addVal;
// }

/* 3 ------------------------------- */
/* Разобратся с добавлением автоматичиски атрибутов с id label */
label.setAttribute("for", "input");
label.textContent = (' Добавьте Задание');











