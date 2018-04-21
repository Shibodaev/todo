let 	parentElement = document.body,
		input = document.createElement("input");
		arr = [input];
/* цикл добавления елеентов на страницу */
		for (let i = 0; i < arr.length; i++) {
			parentElement.appendChild(arr[i]);
		}

let attr = {
	type: "text",
	id: "input"
};
function setAttr( el, attr ) {
	for (let key in attr){
		el.setAttribute(key,attr[key]);
	}
}
setAttr();






