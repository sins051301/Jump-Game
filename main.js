import { Mario, Background, Cactus, Rocket, Coin } from './Character.js';
import { collispeCactus, collispeRocket, collispeCoin } from './Action.js';
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-50;
canvas.height = window.innerHeight-50;

let mario = new Mario();
let timer =0;
let Jumptimer =0;

let Jumping = false;
let score =0;
let cactuses =[];
let rockets=[];
let coins =[];
let backgrounds =[];
var animation;
let coinScore =0;
let GameOverCondition = false;
let HiScore = 0;
let Downing = false;
let speed =3; //기본속도
let jumpspeed =4;
let Jumptimerspeed = 25;
const inner = document.getElementById('score');
const innerCoin = document.getElementById('coin');
const innerHi = document.getElementById('Hi');


document.addEventListener('keydown' , function(e){
    if(e.code === 'Space' && mario.dis == false){
        Jumping = true; 
        
    }
    else if(e.code === 'ArrowUp' && mario.dis == false){
        Jumping = true; 

    }
    else if(e.code === 'ArrowDown'){
        Downing = true;
     }

});
document.addEventListener('keyup' , function(e){
    if(e.code === 'ArrowDown'){
        Downing = false;
    }
    
  

});

function frame(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    animation = requestAnimationFrame(frame);
    timer++;
    inner.innerText = `score: ${(score++)+coinScore*2}`; //점수 생성
    innerCoin.innerText =`Coin: ${coinScore}`; //코인생성
    innerHi.innerText = `Hi: ${HiScore}`; //최고점수
    if(timer %2000 ==0){
        speed +=1;
        jumpspeed +=1;
        Jumptimerspeed -= 7;

    }

    
    let termCactus = Math.floor(Math.random() * 300) + 250;
    let termMario = 3;  //마리오 생성
    let termRocket = Math.floor(Math.random() * 600) + 200;
    let termCoin = Math.floor(Math.random() * 100) + 100;

    if(timer % termCoin ===0){
        let coin = new Coin();
        coins.push(coin);

    }



    while(termRocket - termCactus < 200 || termRocket - termCoin < 200){
        termRocket = Math.floor(Math.random() * 600) + 200;
    }
    if(timer % termRocket ===0){
        let rocket = new Rocket();
        rockets.push(rocket);

    }
    
    if(timer % termCactus === 0){
        let cactus = new Cactus();  //120프레임마다 장애물 생성하고 array에 집어 넣음
        cactuses.push(cactus);

    }


    let termBack = 158;
    if(timer % termBack === 0){
        let background = new Background();  //120프레임마다 배경 생성하고 array에 집어 넣음
        backgrounds.push(background);

    }
    backgrounds.forEach((a) =>{
        a.x-=speed;
        a.draw(); 
    })

    cactuses.forEach((a, i, o) => {  
        if(a.x <0){
            o.splice(i, 1);
        }
      
        a.x-=speed;
        if(collispeCactus(mario, a, ctx, animation, canvas)){
            GameOverCondition = true;
            o.splice(i, 1);
        }
        
        a.draw(); // array에 있던거 다 그림
    })
    rockets.forEach((a, i, o) => {
        if(a.x <0){
            o.splice(i, 1);
        }
        a.x-=speed;
        if(collispeRocket(mario, a, ctx, animation, canvas)){
            GameOverCondition = true;
            o.splice(i, 1);
        }
        a.draw(); // array에 있던거 다 그림
    })
    coins.forEach((a, i, o) => {
        if(a.x <0){
            o.splice(i, 1);
        }
        a.x-=speed;
        coinScore = collispeCoin(mario, a, ctx, coinScore);

        a.draw(); // array에 있던거 다 그림
    })
    
   
    if(Jumping == true ){
        mario.y-=jumpspeed;
        Jumptimer++;
        
        mario.drawJump();
        mario.dis = true;
    }
    if(Jumping == false){
        if(mario.y <560){
            mario.y+=jumpspeed;
            mario.dis = true; //뛰고 있을때는 점프안됨
            
            mario.drawJump();
        }
        else{
            mario.dis = false; 

        }
        
            
    }
    if(Downing == true && mario.dis == false){
        mario.height =40;
        mario.y =570;

    }
    if(Downing == false && mario.dis == false){
        mario.height =50;
        mario.y =560;
    }
  
    if(Jumptimer >Jumptimerspeed){
        Jumping =false;
        Jumptimer =0;
    }

    if(timer %2 ===0 && timer % termMario ==0 && mario.dis == false){
        mario.drawLeft();
        
    }
    else{
        mario.drawRight();
        
    }



    if( GameOverCondition){
        cancelAnimationFrame(animation);
        if (confirm("Game Over! Do you want to restart?")) {
            
            if(score > HiScore){
                HiScore = score;  ///최고 점수 갱신
            }
            speed =3; //기본속도
            jumpspeed =4;
            Jumptimerspeed = 25;
            timer = 0;
            Jumptimer = 0;
            Jumping = false;
            score = 0;
            cactuses = [];
            rockets = [];
            coins = [];
           
            coinScore = 0;
            GameOverCondition = false;
            

            // Restart the game loop
            animation = requestAnimationFrame(frame);
        } else {
            // If the user chooses not to restart, you can perform other actions or end the game.
            alert("Thanks for playing!");
        }
    }
  
    
}
frame();


