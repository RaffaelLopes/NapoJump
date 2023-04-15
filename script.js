const napo = document.querySelector('.napo');
const gosth = document.querySelector('.gosth');

const jump = () => {
  napo.classList.add('jump');

  setTimeout(() => {
    napo.classList.remove('jump');
  }, 500)
}

const loop = setInterval(() => {

    const gosthPosition = gosth.offsetLeft;
    const napoPosition = +window.getComputedStyle(napo).bottom.replace('px', '');

    if (gosthPosition <= 120 && gosthPosition > 0 && napoPosition <130) {

        gosth.style.animation = 'none';
        gosth.style.left = '${gosthPosition}px';
        

        napo.style.animation = 'none';
        napo.style.left = '${napoPosition}px';

        napo.src="imagens/gamer-over.png";
        napo.style.width = "200px";
        napo.style.marginleft = "50px";
        

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);