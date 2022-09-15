const root = document.getElementById("root");
//  id 가 root인 엘레먼트를 가져온다. 그리고 root 변수에 초기화한다.

root.onwheel = (e) => {
  // 마우스 휠에 대한 메소드
  console.log(e.target);
};

// root.onload = () => {
//   console.log(i + "번째 Div");
// };

// onload 메소드는 로드의 진위여부판별. 로드 되었을때 실행된다. dom이 생성됐을때

document.getElementById("name").onchange = (e) => {
  console.log(e.target.value);
  //   e.target은 해당 메소드가 어디서 실행됐는지, 포커스(focus)나 마우스의 위치가 기준이 된다.
};

document.getElementById("name").oninput = (e) => {
  console.log(e.target.value);
  //   e.target은 해당 메소드가 어디서 실행됐는지, 포커스(focus)나 마우스의 위치가 기준이 된다.
};

// on*** 메소드
// on*** 은 전부 이벤트 함수라고 부른다.
// 클릭, 키다운, 입력 등 사용자의 입력에 대해 이벤트가 발생했을 때 실행된다.

document.getElementById("name").addEventListener("click", (e) => {
  console.log(e.target);
});

document.getElementById("name").style.backgroundColor = "lightgray";

console.log(document.getElementById("name").style.border);

for (let i = 0; i < 10; ++i) {
  const tempElem = document.createElement("div");
  //   div 엘레먼트를 생성해서 tempElem 변수에 초기화한다.
  tempElem.innerHTML = i + "번째 DIV";
  //   tempElem의 내용(innerHTML)을 'i번째 Div'라고 정의한다

  root.append(tempElem);
  //   root엘레먼트에 tempElem 엘레먼트를 자식으로 추가한다.(뒤에서)
  root.prepend(tempElem);
  //   root 엘레먼트에 TempELEm엘리먼트를 첫번째 자식으로 추가한다.
}

// 유튜브 영상 띄어주기보여주기.
