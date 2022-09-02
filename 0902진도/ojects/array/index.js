// 객체는 {}로묶인 키와 값으로 이루어진 변수(상자)?
const obj = {
  // obj = 객체
  a: 1,
  //    a가 키고 1이 값이다.
  // 키의 정식 명칭은 property 다.
  b: function () {
    // b와 c는 함수 => 메소드
    console.log("b");
  },
  c: () => {
    return "c";
  },
};

const arr = ["정재훈", "염예나", "김성진", "최원겸", "김선주"];
//배열 객체
// arr.push()
//push 메소드 호출

console.log(arr.length);

let tempReturn = arr.indexOf("오늘의 점심 메뉴는?");
// 배열에 있는 아이템을 찾아서 그 위츠를 알려준다. (인덱스)위치를 리턴.
// 없으면 -1, 첫번째에 있으면 0
console.log(tempReturn);
tempReturn = arr.find((item) => {
  console.log("item" + item);
  return item === 3;
});
console.log(tempReturn);

const tempFind = (item) => {
  return item === 3;
  //  item이 3이랑 같으면 true리턴하고 아니면 false 리턴.
};

const arrFind = function () {
  for (let i = 0; i < arr.length; i++) {
    // i는 0부터 arr의 길이까지 하나씩 증가하면서 반복한다.
    if (tempFind(arr[i])) return arr[i];
    //tempFind 함수를 호출하고 매개변수로 arr의 i번째의 아이템을 전달한다.
    //tempFind 함수가 true를 리턴(반환)하면 arr의 i번째 아이템을 리턴한다.
  }
};

tempReturn = arr.find((item) => {
  return item[0] === "김";
});
// find는 매개변수함수가 true인 아이템들 중 첫번째만 리턴한다
console.log(tempReturn);
tempReturn = arr.findIndex((item) => {
  return item[0] === "김";
});
// 첫번째 아이템의 인덱스를 호출
console.log(tempReturn);
tempReturn = arr.filter((item) => {
  return item[0] === "김";
});
// filter는 매개변수함수가 true인 아이템들을 뽑는다.
console.log(tempReturn);

// map은 매개변수함수의 return값들을 배열로 반환
tempReturn = arr.map((item) => {
  return item[0] === "김";
});
console.log(tempReturn);
// filter는 매개변수함수가 true인 아이템들을 배열로 리턴해준다.

const tempArr = [
  {
    name: "정재훈",
    age: 30,
    area: "대치동",
  },
  {
    name: "염예나",
    age: 32,
    area: "하남",
  },
  {
    name: "김성진",
    age: 27,
    area: "성남",
  },
];

console.log(tempArr.find((item) => item.area === "하남"));
console.log(tempArr.findIndex((item) => item.area === "하남"));

console.log(tempArr.filter((item) => item.area === "하남"));
console.log(tempArr.map((item) => item.area === "하남"));

//find 는 검색할 때 사용할 코드를 넣어줌
// 코드의 반환값이 true나오는 함수를 넣어준다.
// ex) arr.find(func)=> find(arr,func)

arr.forEach((item) => console.log("foreach:" + item));
//arr.foreach(function(item){console.log(item);})

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.reverse();
// 순서 거꾸로

console.log(arr);
console.log(arr.join("/"));
// 배열을 문자열로 바꿔줍니다. 매개변수로 아이템 사이에 넣을 문자를 입력합니다.

console.log(arr.toString()); //문자열로 바꿈( 거의 모든 객체에 포함되어있음)
console.log((16).toString(8)); //8진수
console.log(arr.slice(1, 3));
// [1,2,3] 이라고 했을떄 1앞이 0이고 각 ,마다 숫자가 늘어난다
// [0"정재훈",1"염예나",2"김성진",3"최원겸"

console.log(arr.slice(1, -1));

//-은 뒤에서 부터 확인합니다. 즉5가 0이고, 4가 -1
// arr.splice(1,3) 1부터 3개를 짜른다. 단 arr을 수정한다.
// console.log(arr.splice(1, 3));
// console.log(arr);

console.log(arr.sort());

console.log(arr.sort().reverse());

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return 1;
    else if (curr < next) return -1;
    else return 0;
    // sort 메소드는 정렬해주는 메소드
    // 1,0,-1 로 정렬 방식을 선택한다.
  })
);

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return -1;
    else if (curr < next) return 1;
    else return 0;
    // 내림차순;
    // sort 메소드는 정렬해주는 메소드
    // 1,0,-1 로 정렬 방식을 선택한다.
  })
);
