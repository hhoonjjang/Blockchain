import { useState } from "react";

export default function ({ test1, children }) {
  let count = 0;
  const [count1, setCount1] = useState(0);
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [{ title: "테스트중", text: "졸려어", username: "jjh" }];
  console.log(arr[0]);
  // props다, 나중에 다시 설명
  // props 는 상위 컴포넌트에서 설정된 값이다.
  // props.children은 상위 컴포넌트에서 해당 컴포넌트의 자식으로 설정된값이다.
  return (
    <>
      <div style={{ fontSize: "30px", backgroundColor: "red" }}>{test1}</div>
      <input type="text" placeholder="입력해주세요"></input>
      <button>클릭</button>

      {arr.map((item, index) => {
        return (
          <div key={`map-${index}`}>
            <div key={`title-${index}`}>{item.title}</div>
            <div key={`text-${index}`}>{item.text}</div>
            <div key={`username-${index}`}>{item.username}</div>
          </div>
        );
      })}
      {children}
      {tempArr.map((item, index) => {
        return <li key={`test-${index}`}>{item}</li>;
      })}
      <button
        onClick={function () {
          console.log(count1);
          setCount1(count1 + 1);
        }}
      >
        {count1}
      </button>
    </>
  );
  //HTML 태그의 형제 방식으로 return하지 못한다.<<하나로 구조를 묶어서 return 해야한다.

  // HTML 문법 내에 Javascript 변수 / 함수 등등을 사용할 경우 {} 로 묶어준다.
}

// Component란 여러 개의 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록 구성한 작은
// 기능적 단위

// React는 View를 위한 라이브러리 >> Front End에 보여주기 위한 라이브러리>>
// 랜더링이 주된 기능이다.>> 기능은 div 등등의 Element구조로 많이 나뉘어진다
