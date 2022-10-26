// 정의
// 내부함수가 선언됐을 때의 스코프 (선언됐을 떄의 환경)를 기억
// 스코프 밖에서 호출되어도 스코프에 접근할 수 있는 함수

function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x);
  };
  innerFunc();
}

outerFunc(); // 10

// 1. outerFunc 내에서 innerFunc가 선언 & 호출
// 2. innerFunc는 외부함수 outterFunc의 변수 x에 접근할 수 있다.
// 이유: innerFunc가 outerFunc의 내부에 선언되었기 때문
// 즉, 스코프는 함수를 호출할 때가 아니라 함수를 선언한 위치에 따라 결정된다.
// 이것이 렉시컬 스코핑

// innerFunc를 outerFunc 내에서 호출하는 것이 아니라 반환하도록 변경
function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}

/**
 *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
 *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 */
var inner = outerFunc();
inner(); // 10

// outerFunc는 innerFunc를 반환하고 생을 마감
// 즉, outerFunc는 실행된 이후 콜스택에서 제거되었으므로 outerFunc의 변수 x는 유효하지 않다.
// 그러나 innerFunc가 자신이 호출되었을 때의 환경을 기억하여 변수 x를 가져온다.
// 이것이 클로저

// 클로저의 조건
// 자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우

// 클로져의 활용
let counter = 0;

function increase() {
  return ++counter;
}

GamepadButton.onclick = function () {
  counter.innerHTML = increase();
};
// 작동은 하지만 오류를 발생시킬 가능성을 가지고 있다.,
// counter가 전역 변수이기 때문에 언제든지 누구나 접근이 가능하고 변경 또한 가능하다.
// 따라서 변수 counter는 카운터를 관리하는 increase 함수가 관리하는 것이 바람직하다.

function increase() {
  // 카운트 상태를 유지하기 위한 지역 변수
  var counter = 0;
  return ++counter;
}

Button.onclick = function () {
  count.innerHTML = increase(); // 무조건 1이 반환 된다
};

// 의도치 않은 상태 변경은 방지했다.
// 하지만 increase 함수가 호출될 때마다 counter를 0으로 초기화 한다. => 언제나 1이 표시됨.
// 즉, 변경된 이전 상태를 기억하지 못함.
// 이럴때 사용하는 것이 closure

var increase = (function () {
  // (function() { ... })(); 즉시실행함수
  var counter = 0;

  return function () {
    // 클로저
    return ++counter;
  };
})();

Button.onclick = function () {
  count.innerHTML = increase(); // 1 .. 2 .. 3
};

// 즉시 실행함수가 호출되고 변수 increase에 function() {return ++counter;}가 할당된다.

// 즉시 실행함수는 호출된 이후 소멸 => 반환된 함수는 변수 increase에 할당된다
// 이때 클로져인 함수가 자신이 선언되었을 때의 환경을 기억한다
// 자신이 속한 스코프의 지역변수 counter에 접근이 가능
// counter는 자신을 참조하는 함수가 소멸될 때까지 유지
