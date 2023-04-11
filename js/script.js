const napo = document.querySelector('.napo');
const gosth = document.querySelector('.gosth');

const jump = () => {
    napo.classList.add('jump');

    setTimeout(() => {

    napo.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

const gosthPosition = gosth.offsetLeft;
const napoPosition = +window.getComputedStyle(napo).bottom.replace('px', '');

if (gosthPosition  <= 120 &&  napoPosition > 0 && napoPosition < 80) {

    gosth.style.style.animation = 'none';
    gosth.style.left =  '${gosthPosition}px';
    
    napo.style.style.animation = 'none';
    napo.style.bottom =  '${napoPosition}px';

    napo.src = './css/imagens/gamer-over.png;'
    napo.style.width = '75px';
    napo.style.marginLeft = '50px';

    clearInterval(loop);

}

}, 10);


document.addEventListener('keydown', jump);