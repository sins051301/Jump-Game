
let collispeCactus= (dino, cactus, ctx, animation, canvas)=>{
    let xGap = cactus.x - (dino.x+dino.width);
    let yGap = cactus.y -(dino.y +dino.height);
    if(xGap <0 && yGap <0){
        cancelAnimationFrame(animation);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        return true;
    }
    return false;

}
function collispeRocket(dino, rocket, ctx, animation, canvas){
    let xGap = rocket.x - (dino.x+dino.width);
    let yGap = (rocket.y+rocket.height) -(dino.y);
    if(xGap <0 && yGap >0){
        cancelAnimationFrame(animation);    
       
        ctx.clearRect(0,0,canvas.width, canvas.height);
        return true;
    }
    return false;

}

function collispeCoin(dino, coin, ctx,coinScore){
    
    let xGap = coin.x - (dino.x+dino.width);
    let yGap = (coin.y+coin.height) -(dino.y);
    if(xGap <0 && yGap >0){
        console.log(coinScore);
        coinScore+=1;
        ctx.clearRect(coin.x,coin.y ,coin.width, coin.height);
        return coinScore;
    }
    
    return coinScore;
    
    
   

}
export {collispeCactus, collispeRocket, collispeCoin};
