var faceimage = new Image();
var mask = new Image();
const ICON_SIZE = 500;
const CIRCLE_SIZE = 430;
var imagex = 35;
var imagey = 10;
var imagew = 0;
var imageh = 0;
var imageangle = 0;

function upload(files, iconcanvas){
    let canvas = document.getElementById(iconcanvas);
    let context = canvas.getContext('2d');
    let reader = new FileReader();

    //initialize
    imagex = 35;
    imagey = 10;
    imagew = 0;
    imageh = 0;
    imageangle = 0;
    
    reader.onload = function(event){
        
        faceimage.onload = function() {
            if (faceimage.width < faceimage.height) {
                let ratio = faceimage.height / faceimage.width;
                imagew = CIRCLE_SIZE;
                imageh = CIRCLE_SIZE * ratio;
            } else {
                let ratio = faceimage.width / faceimage.height;
                imagew = CIRCLE_SIZE * ratio;
                imageh = CIRCLE_SIZE;
            }
            
            canvas.width = ICON_SIZE;
            canvas.height = ICON_SIZE;
            
            context.save();
            context.drawImage(faceimage, 35, 10, imagew, imageh);
            context.restore();

            context.save();
            context.drawImage(mask, 0, 0, ICON_SIZE, ICON_SIZE);
            context.restore();

            window.location.hash = "preview";
        }
        faceimage.src = event.target.result;
        mask.src = './mask.png';
    }

    
    reader.readAsDataURL(files[0]);
}

function moveImage(dx, dy, iconcanvas){
    let c = Math.cos(imageangle * Math.PI / 180);
    let s = Math.sin(imageangle * Math.PI / 180);
    imagex += c * dx + s * dy;
    imagey += c * dy - s * dx;
    applyCanvas(iconcanvas);
}

function rotateImage(angle, iconcanvas) {
    imageangle += angle;
    applyCanvas(iconcanvas);
}

function scaleImage(magnification, iconcanvas) {
    imagex -= imagew * (magnification - 1) / 2.0;
    imagey -= imageh * (magnification - 1) / 2.0;
    imagew *= magnification;
    imageh *= magnification;
    applyCanvas(iconcanvas);
}

function applyCanvas(iconcanvas) {
    let canvas = document.getElementById(iconcanvas);
    let context = canvas.getContext('2d');

    context.beginPath();

    canvas.width = ICON_SIZE;
    canvas.height = ICON_SIZE;

    context.save();
    context.translate(ICON_SIZE/2.0, ICON_SIZE/2.0);
    context.rotate(imageangle * Math.PI/180);
    context.translate(-ICON_SIZE/2.0, -ICON_SIZE/2.0);
    context.drawImage(faceimage, imagex, imagey, imagew, imageh);
    context.restore();

    context.save();
    context.drawImage(mask, 0, 0, ICON_SIZE, ICON_SIZE);
    context.restore();
}

function writeImage(iconcanvas) {
    let canvas = document.getElementById(iconcanvas);
    console.log(canvas.getContext('2d'));
    let resimg = canvas.toDataURL();
    document.getElementById('resultimage').src = resimg;
    window.location.hash = "result";
}