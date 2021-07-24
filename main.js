var canvas = new fabric.Canvas("myCanvas");

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
});
}

window.addEventListener("keydown", my_keydown); 
function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if(keyPressed == '67'){
		new_image("captain_america.png");
		console.log("captain america");
	}
	if(keyPressed == '68'){
		new_image("doctor_strange.png");
		console.log("doctor strange");
	}
	if(keyPressed == '72'){
		new_image("hulk.png");
		console.log("hulk");
	}
	if(keyPressed == '73'){
		new_image("iron_man.jpg");
		console.log("iron man");
	}
	if(keyPressed == '84'){
		new_image("thor.jpg");
		console.log("thor");
	}
}