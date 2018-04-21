let 	parentElement = document.body,
		input = document.createElement("input"),
		label = document.createElement("label"),
		arr = [input, label];

/* Разобратся с добавлением автоматичиски атрибутов с id label */
	label.setAttribute("for","input");
	label.textContent = (' Добавьте Задание');

/* цикл добавления елеентов на страницу */
	for (let i = 0; i < arr.length; i++) {
		parentElement.appendChild(arr[i]);
	}
/* добавление аттрибутов инпуту*/
	let attr = {
		type: "text",
		id: "input"
	};
		function setAttr( el, attr ) {
			for (let key in attr) {
				el.setAttribute(key,attr[key]);
			}
		}
	setAttr(input, attr);









