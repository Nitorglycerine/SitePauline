console.log('Salut, can vas ?');

// Setup du canvas 
const canvas = document.querySelector('.canvasWalking'),
context = canvas.getContext('2d');
context.moveTo(100, 0);


// var globales
largeurécran=window.screen.width/4;
// Setup du dessin

//entité 1
xFirst=0;
yFirst=100;
const imageFirst = new Image();
imageFirst.src = 'res/limule2.png';
imageFirst.addEventListener('load', event => {
	context.drawImage(imageFirst, 0, 0,50,50);
	console.log('limule has arrived');
});
xDirectionFirst=true;



//entité 2
xSecond=0;
ySecond=0;
const secondImage = new Image();
secondImage.src='res/limule.png';
secondImage.addEventListener('load', event => {
	context.drawImage(secondImage, 0, 0,50,50);
	console.log('another limule has arrived');
});
xDirectionSecond=true;

// lancement du rendu (update des images)
requestAnimationFrame(render);


// Fonction de rendu
function render(event) {
	context.clearRect(0, 0, 6000, 200);
	context.beginPath();
	context.drawImage(imageFirst, xFirst, yFirst,50,100);
    context.drawImage(secondImage,xSecond,ySecond,50,100);
	moveMonster();
	verifySwitch();
	requestAnimationFrame(render);
}


// fonction qui fait se retourner les persos
function verifySwitch() {
	if (xFirst >= largeurécran-100) {
		xDirectionFirst= false;
	}
	if (xFirst <= 0) {
		xDirectionFirst = true;
	}
	if (xSecond <= 0) {
		xDirectionSecond = true;
	}
	if (xSecond >= largeurécran-100) {
		xDirectionSecond = false;
	}
}

function moveMonster() {
	if (xDirectionFirst) {
		xFirst = xFirst + 1;
	} else {
		xFirst = xFirst - 1;
	}
    if (xDirectionSecond) {
		xSecond = xSecond + 1;
	} else {
		xSecond = xSecond - 1;
	}
}