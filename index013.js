function keyDown(){
  console.log('onkeydown');
document.querySelector('.section-02_td-01').innerHTML = `${document.querySelector('.section-02_input').value.length}`;
}

function keyUp(){
  console.log('onkeyup');
document.querySelector('.section-02_td-02').innerHTML = `${document.querySelector('.section-02_input').value.length}`;
}
function keyPress(){
  console.log('onkeypress');
document.querySelector('.section-02_td-03').innerHTML = `${document.querySelector('.section-02_input').value.length}`;
}