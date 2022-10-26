function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x);
  };
  innerFunc();
}

outerFunc(); // 10

function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}

var inner = outerFunc();
inner(); // 10

let counter = 0;

function increase() {
  return ++counter;
}

GamepadButton.onclick = function () {
  counter.innerHTML = increase();
};

function increase() {
  // 카운트 상태를 유지하기 위한 지역 변수
  var counter = 0;
  return ++counter;
}

Button.onclick = function () {
  count.innerHTML = increase(); // 무조건 1이 반환 된다
};

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

function makeSizer(size) {
  return (document.body.style.fontSize = size + "px");
}
