const headList = [
  { type: "number", name: "번호" },
  { type: "name", name: "이름" },

  { type: "age", name: "나이" },
  { type: "area", name: "거주지" },
  { type: "mbti", name: "MBTI" },
  { type: "bloodType", name: "혈액형" },
];

const studentsList = [];

function createStudent(name, age, area, mbti, bloodType) {
  studentsList.push({
    name,
    age,
    area,
    mbti,
    bloodType,
  });
  // 객체 정의 시 객체 내에 다른 변수만을 넣으면 변수명과 변수의 값을 키와 값에 입력
  // name 매개변수에 정의된 값을 객체의 name 키에 대한 값으로 정의한다.
  let temp = 100;
  const tempObj = {
    temp,
    // temp : temp, <<24번 줄과 같다.
  };
  console.log(tempObj);
}

createStudent("김성진", 27, "성남", "INTP", "B");
createStudent("염예나", 22, "하남", "ENFP", "B");
createStudent("정재훈", 30, "강남", "ENTP", "B");
createStudent("이가원", 27, "광진", "ISFP", "O");
createStudent("김재일", 29, "용인", "ENFP", "AB");

console.log(studentsList);

const tableHeaderElem = document.getElementById("table-header");
headList.forEach((item) => {
  tableHeaderElem.innerHTML += "<th>" + item.name + "</th>";
});

const studentListElem = document.getElementById("data-list");

studentsList.forEach((item, index) => {
  let tempStr = "<tr>";
  headList.forEach((headItem) => {
    if (headItem.type === "number") tempStr += `<th>${index}</th>`;
    else tempStr += `<td>${item[headItem.type]}</td>`;
  });
  tempStr += "</tr>";
  studentListElem.innerHTML += tempStr;
});
