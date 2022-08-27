function insertHtmlAddul(){

  let ulElSe = document.querySelector("ul.list-layout__ul");
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
  let ulElSe_02 = ulElSe.querySelectorAll("ul");
  ulElSe_02[ulElSe_02.length-1].append(liElCr);
  //아쉽게도 -1이 안꺼내졌다
}

function insertHtmlAddli(){
  let ulEl = document.querySelector("ul.list-layout__ul");
  // 넣을 쿼리 선택 ( 이미 렌더링 된걸로 )
  let liEl = document.createElement("li");
  liEl.append(new Date());
  ulEl.append(liEl);
  // 요소 생성 <li> 가 생기고 값이 들어간다 </li>
  // 이런식의 선언은 안된다 li div 하는 등으로 하면 작동을 안하고 , li.div 붙이면 <li.div>가 나옴
  // ulEL에 업로드 함으로써 내용 갱신됨
}

function tableSelector(number) {
  let tbElSe = document.querySelectorAll(".select-table td");
  tbElSe[number].className += 'select ';
}

function tableIdSelector(number) {
  //let tbElSe = document.querySelector("#index_"+number);
  let tbElSe = document.querySelector(`#index_${number}`);
  tbElSe.className += 'select ';
}

var isPrimeNumber = function (number) {
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}

function runBetween(){
  let a = parseInt(document.querySelector("#betweenNum01").value);
  let b = parseInt(document.querySelector("#betweenNum02").value);

  document.querySelector("#betweenResult").innerHTML = `더한 값 : ${addnembersBetween(a,b)}`;
}

function addnembersBetween(num1,num2){
  let larger = num1 > num2 ? num1 : num2;
  let smaller = num1 > num2 ? num2 : num1;
  
  let result = 0;
  for(let i = smaller + 1; i< larger;i++) {
    result += i;
  }
  return result;
}

function sayPageIsLoaded(){
  console.log('로딩이 완료되었습니다');
  showNotAssigneds ();
  //alert('로딩이 완료되었습니다');
}

var members = [
  '손흥민', '김영권', '이승우', '기성용', '황희찬', 
  '황희조', '구자철', '이용', '조현우', '김승규',
  '이강인', '박주호', '문선민', '김민재', '황인범', 
  '이정협', '김인성', '구성윤', '장현수', '나상호'
];


function showNowAssign(member) {
  document.querySelector('#now-assign').innerHTML = member;
}

function showNotAssigneds () {
  let count = 0;
  var membersString = '';
  for (var i = 0; i < members.length; i++) {
    count = 1;
    membersString += members[i];
    if (i == 0){
      showNowAssign(members[0]);
    }
    

    if (i < members.length - 1) membersString += ', ';
  }
  document.querySelector('#not_assigned').innerHTML = membersString;
  // 함수 실행 여부 판단하는 count로 내용 지우기
  if (count == 0){
  document.querySelector('#now-assign').innerHTML ='';
  }
}

function assignMemberToTeam (teamNumber) {
  if (members.length === 0) return;
  var member = members[0];
  member = members.splice(0, 1);
  showNotAssigneds();
  

  var liEl = document.createElement("li");
  liEl.append(member);
  document.querySelector("#team_" + teamNumber).append(liEl);
}