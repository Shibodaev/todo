
'use strict'
; (function () {
	var entryField = document.getElementById('enter'),
		addButton = document.getElementById('button'),
		list = document.getElementById('list'),
		date = new Date(),storage = localStorage;
		
	var inputValue = () => {
		if(entryField.value.length > 0) {
			addButton.removeAttribute('disabled');
		} else {
			addButton.setAttribute('disabled', 'disabled');
		}
	}
	
	entryField.addEventListener("input",inputValue);
	
	var addCase = addButton.addEventListener("click", function () {
		var listItem = document.createElement('li'),
		close = document.createElement("span");
		close.classList.add('close');
		
		list.appendChild(listItem).innerHTML = 
		`<span class="text">${entryField.value}</span>
		<span class="time"> ${date.toLocaleDateString()}</span>`
		listItem.appendChild(close).innerHTML= "X";
		close.onclick =()=>close.parentNode.remove();
		listItem.onclick = () => listItem.firstChild.style.textDecoration =
	"line-Through";
	console.log(list.firstChild);
	}, true);
	function storage(key){
	  localStorage.setItem(key, JSON.stringify(data));
	}
	
})();