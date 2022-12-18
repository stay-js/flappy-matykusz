import './style/globals.css';

let isStarted = false;

const block = document.getElementById('block')!;
const hole = document.getElementById('hole')!;
const character = document.getElementById('character')!;

const game = () => {
  document.getElementById('game-container')!.style.display = 'flex';
  document.getElementById('start')!.style.display = 'none';
  isStarted = true;

  let isJumping = false;
  let score = 0;

  setInterval(() => {
    document.getElementById('output')!.innerText = score.toString();
  }, 100);

  setInterval(() => {
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const characterBottom = characterTop + 25;

    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    const holeBottom = holeTop + 160;

    if (!isJumping) character.style.top = `${characterTop + 4}px`;

    if (
      characterTop > 475 ||
      (blockLeft <= 37 && (characterTop < holeTop || characterBottom > holeBottom))
    ) {
      alert(`Matykusz barát döglött. Score: ${score}`);
      character.style.top = '50px';
      score = 0;
    }
  }, 10);

  const jump = () => {
    isJumping = true;

    let jumpCount = 0;

    const jumpInterval = setInterval(() => {
      const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

      if (characterTop > 6) character.style.top = `${characterTop - 4}px`;

      if (jumpCount > 20) {
        clearInterval(jumpInterval);
        isJumping = false;
      }

      jumpCount++;
    }, 10);
  };

  document.addEventListener('click', jump);
  document.addEventListener('keydown', jump);

  block?.addEventListener('animationiteration', () => {
    hole.style.top = `${Math.floor(Math.random() * (340 + 1))}px`;
    score++;
  });
};

document.addEventListener('keydown', () => !isStarted && game());
document.querySelector('main')?.addEventListener('click', () => !isStarted && game());
