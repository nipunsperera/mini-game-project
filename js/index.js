const playerElm = document.getElementById('player');
const groundElm = document.getElementById('ground');
console.log(groundElm.clientWidth);

let dx = 0;
let dy = 5;
let accelaration =0.3;

let index = 0;

const draw = ()=>{
    if(dy!=0){
        playerElm.style.backgroundImage = `url(/img/charactor/Jump__00${index++}.png)`;
    }else if(dx!=0){
        console.log(index);
        playerElm.style.backgroundImage = `url(/img/charactor/Run__00${index++}.png)`;
    }else{
        playerElm.style.backgroundImage = `url(/img/charactor/Idle__00${index++}.png)`;
    }
    if(index >9) index =1;
    requestAnimationFrame(draw); /* called at end of function again */
}

const animate = ()=>{

    if(playerElm.offsetLeft<0){
        playerElm.style.left = '0';
    }else if(playerElm.offsetLeft >= (groundElm.clientWidth-45)){
        playerElm.style.left = `${groundElm.clientWidth - playerElm.clientWidth}px`;
    }else{
        playerElm.style.left = `${playerElm.offsetLeft + dx}px`;
    }

    dy += accelaration;

    if((playerElm.offsetTop + playerElm.offsetHeight) > groundElm.offsetTop){
        dy=0;
        accelaration=0;
        playerElm.style.top = `${groundElm.offsetTop - playerElm.offsetHeight + dy}px`;
    }
    playerElm.style.top = `${playerElm.offsetTop + dy}px`;

    requestAnimationFrame(animate);/* called at end of function again */
}

requestAnimationFrame(animate);
requestAnimationFrame(draw);

// let j =0;
// let t1 = 0;
// const interval = 1;


// function repaint(timestamp){ /* pass 'time' parameter -> gives miliseconds from the begning */
//     if(!t1) t1 = timestamp;
//     const diff = timestamp - t1;
//     if(diff >= (interval * 1000)){
//         t1 = timestamp;
//         console.log('Painted: ' + j++);
//     }
//     requestAnimationFrame(repaint);
// }

// requestAnimationFrame(repaint);















// setInterval(()=>{
//     if(dy!=0){
//         playerElm.style.backgroundImage = `url(/img/charactor/Jump__00${index++}.png)`;
//     }else if(dx!=0){
//         console.log(index);
//         playerElm.style.backgroundImage = `url(/img/charactor/Run__00${index++}.png)`;
//     }else{
//         playerElm.style.backgroundImage = `url(/img/charactor/Idle__00${index++}.png)`;
//     }
//     if(index >9) index =1;
// },17);


// setInterval(()=>{

//     if(playerElm.offsetLeft<0){
//         playerElm.style.left = '0';
//     }else if(playerElm.offsetLeft >= (groundElm.clientWidth-45)){
//         playerElm.style.left = `${groundElm.clientWidth - playerElm.clientWidth}px`;
//     }else{
//         playerElm.style.left = `${playerElm.offsetLeft + dx}px`;
//     }

//     dy += accelaration;

//     if((playerElm.offsetTop + playerElm.offsetHeight) > groundElm.offsetTop){
//         dy=0;
//         accelaration=0;
//         playerElm.style.top = `${groundElm.offsetTop - playerElm.offsetHeight + dy}px`;
//     }
//     playerElm.style.top = `${playerElm.offsetTop + dy}px`;


// },17);




addEventListener('keydown',({key})=>{
    if(key === 'ArrowRight'){
        
        playerElm.classList.remove('turn');
        dx =10;

    }else if(key === 'ArrowLeft'){
        
        playerElm.classList.add('turn');
        dx = -10;

    }

    
});

addEventListener('keyup',({key})=>{
    if(key === 'ArrowRight' || key === 'ArrowLeft'){
       dx = 0;
    }
});

addEventListener('keypress',({key})=>{
    if(key === ' '){
        index = 1;
        dy = -10;
        accelaration = 0.2;
    }
});