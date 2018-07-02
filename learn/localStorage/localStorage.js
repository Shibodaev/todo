window.onload = (function () {
	var arr = [];
	document.getElementById('button').onclick = function () {
		var inputVal = document.getElementById('input').value;
		arr.push(inputVal);
		localStorage.setItem( 'val' ,inputVal );
		// for(var key in inputVal){
		//
		// }

	};
})();

// if (input.value == '') {
// 	alert('Введите значение');
// } else {
//
// 	arr.push(inputVal);
// }