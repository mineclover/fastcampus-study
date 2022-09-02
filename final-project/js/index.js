
function videoElement(){
  let videoArea = document.querySelector('div.hide article.content');
  let setArea = document.querySelector('section.primary-area');

  let copyContent = videoArea.cloneNode(true);

  setArea.appendChild(copyContent);
}

function videoContainerGen(num){
  let i = 0
  while(i < num){
    videoElement();
    i++;
  }
}

function menuSet(name){
  let area = document.querySelector('.primary-area');

  area.innerHTML  = '';
  
  let charText = name +`.length`
  console.log(charText);
  videoContainerGen(eval(charText));
  contentSelector(name);
  
}

function contentSelector(name){
  var list = document.querySelectorAll('.primary-area article.content');
  console.log(list.length);

  console.log(list[0]);
  
  
  if(name == 'dumi'){
    for(let i = 0;i <list.length;i++){
      videoGenerator(list[i],dumiGen(i));
    }
  }
  else if('game'){

    for(let i = 0;i <list.length;i++){
      if (i < game.length){
        videoGenerator(list[i],game[i]);
      }
      // else {
      //   videoGenerator(list[i],dumiGen(i));
      // }
    }
  }
}


function dumiGen(i){

  while (i >= dumi.length){
    videoRandomGen(1);
  }
  return dumi[i];
}


function videoGenerator(element,object) {

  //document.querySelector().innerHTML
  element.querySelector('.vidio_thumb').setAttribute("href",object.contentLink);
  element.querySelector('.content__img').setAttribute("src",object.thumbnail);
  element.querySelector('.content__logo').setAttribute("src",object.logo);
  element.querySelector('.content__title').setAttribute("href",object.contentLink);
  element.querySelector('.content__title').innerHTML = object.title ;
  element.querySelector('.content__info').innerHTML = `${object.view}${object.created}`;
  
  element.querySelector('.content__user').setAttribute("href",object.channelLink);
  element.querySelector('.content__live').style.display = object.live ? 'block' : 'none';
  
  // console.log(object.thumbnail);
  // console.log(object.logo);
  // console.log(object.title);
  // console.log(object.username);
  // console.log(object.channelLink);
  // console.log(object.official );
  // console.log(object.view);
  // console.log(object.created);
  // console.log(object.live);
}


function adClose() {
  document.querySelector('.primary .ad .ad__img').style.display = 'none';
}