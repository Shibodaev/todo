var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

	ctx.fillStyle = "red";
	ctx.fillRect(100, 50, 150, 75);
// ctx.fillRect(x,y width, height)
	ctx.fillStyle = "blue";
	ctx.fillRect(150, 75, 150, 75);
//команда очистки холста
	ctx.clearRect(100,50,150,75);
// ctx.clearRect(x,y,width,height);
// цвет обводки задается до команды отрисовки
	ctx.strokeStyle = "green";
//	ширина линии обводки
	ctx.lineWidth = "10";
//	команда отрисовки
	ctx.rect(10,100,100,100);//  не работает без stroke
	ctx.stroke();
	ctx.fill();




// function draw() {
// 	var ctx = canvas.getContext('2d');
//
//
// 	// if (canvas.getContext) {
// 	// 	var ctx = canvas.getContext('2d');
// 	//
// 	// 	ctx.beginPath();
// 	// 	ctx.moveTo(75, 50);
// 	// 	ctx.lineTo(100, 75);
// 	// 	ctx.lineTo(100, 25);
// 	// 	ctx.fill();
// 	// }
// }
// draw();