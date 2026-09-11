console.log('script is here')

btnSteg8 = document.querySelector('.step8');
headerStep1 = document.querySelector('.step1');
console.log(btnSteg8, headerStep1);

if (btnSteg8) {
  btnSteg8.addEventListener('click', changeHEaderColor)
}


function changeHEaderColor(){
  colors = {
    red: 'rgb(255, 0, 0)',
    yellow: 'rgb(255, 255, 0)',
  }

  if (!btnSteg8) return;
  styles = getComputedStyle(headerStep1)
  console.log(styles.color)
  headerStep1.style.color = styles.color == colors.red
    ? colors.yellow
    : colors.red;
}