
'use strict'
; (function () {
	var entryField = document.getElementById('enter'),
		info = document.getElementById('info'),
		addButton = document.getElementById('button'),
		list = document.getElementById('list'),
		date = new Date();
		
	var inputValue = () => {
		if(entryField.value.length > 0) {
			addButton.removeAttribute('disabled');
			info.innerHTML = '';
		} else {
			addButton.setAttribute('disabled', 'disabled');
		}
	}
	entryField.addEventListener("input",inputValue);
	
	var addCase = addButton.addEventListener("click", function () {
		var listItem = document.createElement('li'),
		close = document.createElement('span');
		close.classList.add('close');
		list.appendChild(listItem).innerHTML = `<span> ${entryField.value}</span>  <span class='time'>
		${date.toLocaleDateString()}</span>`;
		listItem.appendChild(close).innerHTML = "X";
		
		close.onclick = (e) => close.parentNode.remove();
		
		listItem.onclick = () => listItem.firstChild.style.textDecoration =
	"line-Through";
	
	}, true);
	
})();