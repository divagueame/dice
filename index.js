const rollBtn = document.getElementById('roll-btn');
const dice = document.querySelector('.dice');
dice.style.transform = 'scale(.5) rotateX(0deg) rotateY(36011deg) rotateZ(3600deg) scale(2.5) translateY(-1210px)';

rollBtn.addEventListener('click', ()=>{
  let thisRollNum = 1 + Math.floor(6 * Math.random());
  // thisRollNum = 6
  dice.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0px)' ;
  let current = dice.style.transform;
  // console.log(thisRollNum,current)
  setTimeout(() => {
    
    let newX = 720;
    let newY = 720;
    let newZ = 720;

    if(thisRollNum==1){
      newX += 180
      newY += 180
      newZ += 180
    }
    if(thisRollNum==2){
      newX += 180
      newY += 270
      newZ += 90
    }
    if(thisRollNum==3){
      newX += -90
      newY += 270
      newZ += 90
    }
    if(thisRollNum==4){
      newX += -90
      newY += 180
      newZ += 270
    }
    if(thisRollNum==5){
      newX += 90
      newY += -180
      newZ += 180
    }
    if(thisRollNum==6){
      newX += 180
      newY += 0
      newZ += 0
    }
    
    let newTransform = `rotateX(${newX}deg) rotateY(${newY}deg) rotateZ(${newZ}deg)`;
    console.log(thisRollNum,newTransform)
    dice.style.transform = newTransform;

  }, 500);

  // console.log(dice.style.transform)
  // dice.style.transform = 'rotateY(0deg) rotateX(0deg) rotateY(0deg)';
  // dice.classList.remove('dice1');
  // dice.classList.remove('dice2')
  // dice.classList.remove('dice3')
  // dice.classList.remove('dice4')
  // dice.classList.remove('dice5')
  // dice.classList.remove('dice6');

  // dice.classList.add('dice0');
  // console.log(dice.style.transform)
  // dice.style.transform = 'rotateX(1190deg)'
  // console.log(dice.style.transform);
  // dice.style.transform = 'rotateX(90deg)'
  // let a = window.getComputedStyle(dice) .getPropertyValue('transform');
  // console.log(thisRollNum, a)


  setTimeout(() => {
    
  // dice.style.transform = 'rotateX(0deg)'
  // console.log(dice.style.transform);
  }, 1000);



  setTimeout(()=>{
  let thisRollNum = 1 + Math.floor(6 * Math.random());
  
  thisRollNum = 11
    if(thisRollNum==1){
      dice.classList.add('dice1');
    }
    if(thisRollNum==2){
      dice.classList.add('dice2')
    }
    if(thisRollNum==3){
      dice.classList.add('dice3')
    }
    if(thisRollNum==4){
      dice.classList.add('dice4')
    }
    if(thisRollNum==5){
      dice.classList.add('dice5')
    }
    if(thisRollNum==6){
      dice.classList.add('dice6')
    }

    
  }, 11111111111111111111111100)
  
   
  
  



})

 