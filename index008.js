function changeSalutation() {
  //changeSalutation
  var salutation = prompt("원하는 인사말을 입력하세요.");
    document.querySelector(".test").innerHTML = salutation;
}


var i = 0;
let stopIntervalSalutations;

function stopTextChange() {
  // check if an interval has already been set up
  clearInterval(stopIntervalSalutations);
  // release our intervalID from the variable
  stopIntervalSalutations = null;
}

function startTextChange() {
  // check if an interval has already been set up
  if (!stopIntervalSalutations) {
  stopIntervalSalutations = setInterval(intervalSalutations, 1000);
  // 값 형태가 추적이 안된다..
  // 일단 console 테스트 결과는 아무래도 반복을 명령하는 메모리가 다른 곳으로 연장된건가
  // 아니면 console 로그 중 대가리만 나오나?
  }
  // release our intervalID from the variable
}

function intervalSalutations() {
  
  let salutations = ["안녕하세요", "반갑습니다"];  
  // 아 0일 땐 1-0되서 1 , 1일 땐 .. 뭐 그런건데 리액트나 js 로 옮긴 상태에서도 가능한가?
  console.log(i)
  console.log("inter"+stopIntervalSalutations);
  i = 1 - i;
  document.querySelector(".chapter02").innerHTML = salutations[i];
}

function showMyAlert() {
  alert("짠! 알림창이 나타났습니다.");
}

function numberTypeCheck() {
  document.querySelector("#typesTest").innerHTML = `100의 typeof : ${typeof(100)}`;
}
function stringTypeCheck() {
  document.querySelector("#typesTest").innerHTML = `"100"의 typeof : ${typeof("100")}`;
}
function functionTypeCheck() {
  let a = function(){};
  document.querySelector("#typesTest").innerHTML = `a(함수를 넣은)의 typeof : ${typeof(a)}`;
}
function nullTypeCheck() {
  let a = null;
  document.querySelector("#typesTest").innerHTML = `a(null 넣은)의 typeof : ${typeof(a)}`;
}

// 자료형 연산
function numToNum() {
  let a = 10;
  document.querySelector("#typescalc").innerHTML = `10 + a : ${10 + a}`;
}


function stringToNum() {
  let a = 10;
  document.querySelector("#typescalc").innerHTML = `"10" + a : ${"10" + a}`;
}

function three(number){
  var largerNumber = number > 10 ? "참" : "거짓";
  document.querySelector("#threeresult").innerHTML = largerNumber;
  console.log(largerNumber);
}

function arrayTest(){
  let multiTypes = [100, true, 'English', [2, 4, 8]];

  
  for (let array__count = 0; array__count < multiTypes.length + 3; array__count++){
    

    if (array__count == multiTypes.length + 1 ){
      document.querySelectorAll(".array__ul > li")[array__count].innerHTML = `multiTypes의 length 값:${multiTypes.length}`
    }
    else if (array__count  == multiTypes.length + 2){
      document.querySelectorAll(".array__ul > li")[array__count].innerHTML = `length typeof 값:${typeof(multiTypes.length)}`
    }
    else {
      document.querySelectorAll(".array__ul > li")[array__count].innerHTML = `현재 인덱스 ${array__count} : ${multiTypes[array__count]}`;
    }
  }  
}

var arrayData = ['사과','바나나','A','B','C','사과',7,999,'77',"쌍따옴표"];

function array_index_reflesh(){
  let text = document.querySelector("#ip-indexof-text").value;
  document.querySelector(".index_result").innerHTML = `${arrayData.indexOf(text)} + 입력값 typeOf: ${typeof(text)}`;

}

function array_view(){
  //document.querySelector(".array__viewer").innerHTML = `현재 배열: ${arrayData}` ;
  let sumData ='[';
  for (let array__count = 0; array__count < arrayData.length; array__count++){
    sumData += `${array__count}:${arrayData[array__count]}, `;
  }
  sumData = sumData.slice(0,-2);
  sumData += ']';
  document.querySelector(".array__viewer").innerHTML = `현재 배열: ${sumData}` ;

}

function array_push(){
  //changeSalutation
  let inputForm = prompt("추가할 요소를 입력하세요");
    arrayData.push(inputForm);
    array_view();
    
}

function array_splice(){
  let text = parseInt(document.querySelector("#ip-splice-pos").value);
  let num = parseInt(document.querySelector("#ip-splice-number").value);
  arrayData.splice(text,num);
  array_view();
}
