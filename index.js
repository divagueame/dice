const rollBtn = document.getElementById('roll-btn');
rollBtn.addEventListener('click', ()=>{
  const dice = document.querySelector('.dice');
  dice.classList.add('dice-animation');
  dice.classList.add('dice-animation1');
  setTimeout(()=>{
    dice.classList.remove('dice-animation');
    dice.classList.remove('dice-animation1');
  },300)
})