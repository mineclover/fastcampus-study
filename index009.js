function insertHtmlAddul(){

  let ulElSe = document.querySelector("ul.new-layout__ul");
  // 넣을 쿼리 선택 ( 이미 렌더링 된걸로 )
  let ulElCr = document.createElement("ul");
  //만들 요소 미리 선언
  let liElCr = document.createElement("li");
  // 요소
  // 이런식의 선언은 안된다 li div 하는 등으로 하면 작동을 안하고 , li.div 붙이면 <li.div>가 나옴
  liElCr.append(new Date());
  ulElCr.append(' ');
  ulElSe.append(ulElCr);
  
  //let ulElSe_02 = ulElSe.querySelector("ul li");
  //선택한 것 안에서 선택.. 근데 조금 빈약함
  //나는 마지막에 생성된 것 위주로 하고 싶다?
  let ulElSe_02 = ulElSe.querySelectorAll("ul li");
  ulElSe_02[ulElSe_02.length-1].append(liElCr);
  //아쉽게도 -1이 안꺼내졌다
}

function insertHtmlAddli(){
  let ulEl = document.querySelector("ul.new-layout__ul");
  // 넣을 쿼리 선택 ( 이미 렌더링 된걸로 )
  let liEl = document.createElement("li");
  liEl.append(new Date());
  ulEl.append(liEl);
  // 요소 생성 <li> 가 생기고 값이 들어간다 </li>
  // 이런식의 선언은 안된다 li div 하는 등으로 하면 작동을 안하고 , li.div 붙이면 <li.div>가 나옴
  // ulEL에 업로드 함으로써 내용 갱신됨

}