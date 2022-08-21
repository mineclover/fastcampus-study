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
  
  var salutations = ["안녕하세요", "반갑습니다"];  
  // 아 0일 땐 1-0되서 1 , 1일 땐 .. 뭐 그런건데 리액트나 js 로 옮긴 상태에서도 가능한가?
  console.log(i)
  console.log("inter"+stopIntervalSalutations);
  i = 1 - i;
  document.querySelector(".chapter02").innerHTML = salutations[i];
}

