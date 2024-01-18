
const imageMarioLeft = new Image();
imageMarioLeft.src = '삽화/마리오왼발.png';
const imageMarioRigtht = new Image();
imageMarioRigtht.src = '삽화/마리오오른발.png';
const imageMarioJump = new Image();
imageMarioJump.src = '삽화/마리오점프.png';
const imageCactus = new Image();
imageCactus.src = '삽화/플라워.png';
const imageBackground = new Image();
imageBackground.src = '삽화/마리오배경진.jpg';
const imageRocket = new Image();
imageRocket.src = '삽화/킬러.png';
const imageCoin = new Image();
imageCoin.src = '삽화/코인.png';

class Mario {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.x = 10;
        this.y = 580;
        this.width = 50;
        this.height = 50;
        this.dis = false;
    }

    drawLeft() {
        this.ctx.drawImage(imageMarioLeft, this.x, this.y, this.width, this.height);
    }
    drawRight(){
        this.ctx.drawImage(imageMarioRigtht, this.x, this.y, this.width, this.height);
    }
    drawJump(){
        this.ctx.drawImage(imageMarioJump, this.x, this.y, this.width, this.height);
    }
}

class Background {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.x = 1000;
        this.y = 0; 
        this.width = 1000;
        this.height = 714;
    }

    draw() {
        this.ctx.drawImage(imageBackground, this.x, this.y, this.width, this.height);
    }
}
class Coin{
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.x = 2000;
        this.y = 470;
        this.width = 30;
        this.height = 30;
    }

    draw() {
        this.ctx.drawImage(imageCoin, this.x, this.y, this.width, this.height);
    }
}

class Cactus {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.x = 2000;
        this.y = 580;
        this.width = 40;
        this.height = 50;
    }

    draw() {
        
        this.ctx.drawImage(imageCactus, this.x, this.y, this.width, this.height);
    }
}

class Rocket {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.x = 2000;
        this.y = 520;
        this.width = 50;
        this.height = 50;
    }

    draw() {
       
        this.ctx.drawImage(imageRocket, this.x, this.y, this.width, this.height);
    }
}

export { Mario, Background, Cactus, Rocket, Coin };
