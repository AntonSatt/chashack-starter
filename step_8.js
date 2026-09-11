btnSteg8 = document.querySelector('.step8');
headerStep1 = document.querySelector('.step1');


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

  headerStep1.style.color = styles.color == colors.red
    ? colors.yellow
    : colors.red;
}