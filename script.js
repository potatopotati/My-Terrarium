/*The solution to draggable elements was inspired by w3schools solution on creating a [Draggable HTML Element](https://www.w3schools.com/howto/howto_js_draggable.asp).*/

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

const initialPos={};

window.onload = storeInitialPos; 

document.getElementById('resetButton').onclick = resetPos;

function storeInitialPos(){
	const plants = document.querySelectorAll('.plant')
	for(let i=0; i<plants.length;i++){
		//store all plant initial position
		initialPos[plants[i].id]={
			top: plants[i].style.top,
			left: plants[i].style.left
		};
	}
}

function resetPos(){
	const plants = document.querySelectorAll('.plant')
	//set initial position to all plant's top and left property
	for(let j=0;j<plants.length;j++){
		plants[j].style.top = initialPos[plants[j].id].top;
		plants[j].style.left = initialPos[plants[j].id].left
	}
}

function dragElement(terrariumElement) {
	let xDiff = 0,
		yDiff = 0,
		x = 0, //current mouse x position
		y = 0; //current mouse y position

    //mouse event listener when user press down the mouse
	terrariumElement.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault(); 
		console.log(e); //print the event 
		x = e.clientX; //x position of the mouse
		y = e.clientY; //y position of the mouse

        //mouse event listener when user move the mouse
		document.onpointermove = elementDrag;

        //mouse event listener when user release the mouse
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		// calculate how much the mouse was dragged 
		xDiff = x - e.clientX;
		yDiff = y - e.clientY;

        //update current mouse position
		x = e.clientX;
		y = e.clientY;
		console.log(xDiff, yDiff, x, y);
		// set plant new position:
		terrariumElement.style.top = terrariumElement.offsetTop - yDiff + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - xDiff + 'px';
	}

	function stopElementDrag() {
		document.onpointerup = null;
		document.onpointermove = null;
	}
}