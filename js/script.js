const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const over = document.querySelector('.overimage');
const cloud = document.querySelector('.clouds')
const restart = document.querySelector('.restart')
 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
 
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'; 

        cloud.style.display = 'none';

        restart.style.display = 'block';
        restart.src = './images/restart.png';

        over.style.display = 'block';
        over.src = './images/game-over-image.png';
        clearInterval(loop);
        //restart.addEventListener('click',() => {clearInterval(loop); restart.style.display='none'}) //função anonima
    }
}, 10)

//restart.addEventListener('click',location.replace(''))

document.addEventListener('keydown', jump);