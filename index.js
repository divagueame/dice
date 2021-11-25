const rollBtn = document.getElementById('roll-btn');
rollBtn.addEventListener('click', ()=>{
  const dice = document.querySelector('.dice');
  // dice.classList.remove('dice-basic-rotation');
  dice.classList.add('dice-animation1');
  dice.classList.add('dice-animation');

  setTimeout(()=>{
    dice.classList.remove('dice-animation');
    dice.classList.remove('dice-animation1');
    // dice.classList.add('dice-basic-rotation');
  },3100)
})