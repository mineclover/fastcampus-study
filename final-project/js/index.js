
function videoElement(){
  let videoArea = document.querySelector('div.hide article.content');
  let setArea = document.querySelector('section.primary-area');

  let copyContent = videoArea.cloneNode(true);

  setArea.appendChild(copyContent);
}

function videoContent(num){
  let i = 0
  while(i < num){
    videoElement();
    i++;
  }
}

function contentSelector(){
  var list = document.querySelectorAll('.primary-area > article.content');
  console.log(list.length);

  for(let i = 0;i <list.length;i++ ){
    videoGenerator(list[i],game_01);
  }  
}

function videoGenerator(element,object) {

  console.log(object.thumbnail);
  console.log(object.logo);
  console.log(object.title);
  console.log(object.username);
  console.log(object.channelLink);
  console.log(object.official );
  console.log(object.view);
  console.log(object.created);
  console.log(object.live);
  
  
  var list = document.querySelectorAll('');
  
  let a = list[0].querySelector('content__img');
  a.setAttribute('src','object.thumbnail');
  
  
  // object.thumbnail
  // object.logo
  // object.title
  // object.username
  // object.channelLink
  // object.official 
  // object.view
  // object.created
  // object.live
}