let startPoint;
do {
  startPoint = Number(
    prompt(" 재훈이의 인생게임. \n 게임을 시작하겠습니까?\n 1.네 2.아니오")
  );
  let stage1;
  switch (startPoint) {
    case 1:
      alert("게임을 시작합니다");
      console.log("게임을 시작합니다.");
      do {
        stage1 = Number(
          prompt(
            "장래희망을 선택하시오.\n1번.학생 2번.사업가 3번.프로그래머 4번.거지 5번.백수"
          )
        );
        switch (stage1) {
          case 1:
            console.log("학생이 되기위한 인생이 시작됩니다.");
            break;
          case 2:
            console.log("사업가가 되기위한 인생이 시작됩니다.");
            break;
          case 3:
            console.log("프로그래머가 되기위한 인생이 시작됩니다.");
            break;
          case 4:
            console.log("거지가 되기위한 인생이 시작됩니다.");
            break;
          case 5:
            console.log("백수가 되기위한 인생이 시작됩니다.");
            break;
          default:
            console.log("다시 선택하세요");
            stage1 = 6;
            break;
        }
      } while (stage1 === 6);
      break;
    case 2:
      alert(`종료하겠습니다`);
      console.log(`종료하겠습니다`);
      break;
    default:
      alert(`다시선택하세요`);
      console.log("다시선택하세요");
      startPoint = 3;
      break;
  }
} while (startPoint === 3);

let intscore = 10;
let healthscore = 10;
let date = 1;
let deadLine = 14;
if (startPoint == 1) {
  for (let i = 0; i < 16; i++) {
    if (i == 0) {
      alert("15일을 어떻게 보내는지에 따라 당신의 미래가 바뀝니다.");
    } else {
    }

    let choiceDailyLife;

    do {
      choiceDailyLife = Number(
        prompt(
          "아침해가 밝았습니다\n 무엇을 하겠습니까?[선택지를고르시오.]\n 1.경일게임아카데미를 간다.(지력+2)\n 2.게임을 한다.(지력-2)\n 3.운동을 한다.(체력+2)\n 4.술을 마신다.(체력-2)\n 5.다시 잔다.(지력-1,체력-1)"
        )
      );

      switch (choiceDailyLife) {
        case 1:
          intscore += 2;
          console.log("지력이 2 증가했습니다.");
          alert("지력이 2 증가했습니다.");
          break;
        case 2:
          intscore -= 2;
          console.log("지력이 2 감소했습니다.");
          alert("지력이 2 감소했습니다.");

          break;
        case 3:
          healthscore += 2;
          console.log("체력이 2 증가했습니다.");
          alert("체력이 2 증가했습니다.");
          break;
        case 4:
          healthscore -= 2;
          console.log("체력이 2 감소했습니다.");
          alert("체력이 2 감소했습니다.");
          break;
        case 5:
          healthscore--;
          intscore--;
          console.log("체력과 지력이 1씩 감소했습니다.");
          alert("체력과 지력이 1씩 감소했습니다.");
          break;
        default:
          console.log("다시 선택하세요");
          alert("다시 선택하세요");
          choiceDailyLife = 6;
          break;
      }
    } while (choiceDailyLife === 6);

    console.log(
      `${date}일이 지났습니다[${deadLine}일 남음]\n 현재 능력치: 체력:${healthscore} 지력:${intscore} `
    );
    alert(
      `${date}일이 지났습니다[${deadLine}일 남음]\n 현재 능력치: 체력:${healthscore} 지력:${intscore} `
    );
    date++;
    deadLine--;
    if (intscore <= 0) {
      console.log("빡대가리가 되었습니다.");
      alert("빡대가리가 되었습니다.");
      i = 16;
    }
    if (healthscore <= 0) {
      console.log("술을 하도 처먹어서 뒤졌습니다.");
      alert("술을 하도 처먹어서 뒤졌습니다.");
      i = 16;
    }

    if (intscore >= 20) {
      confirm("당신은 열심히 공부해서 지력을 최대치로 올렸습니다.");
      confirm("당신의 꿈을 이룰 수 있을겁니다");
      console.log("라고할뻔~\n 니가 아무리 공부해도 천재 못이겨");
      alert("라고할뻔~");
      alert("니가 아무리 공부해도 천재 못이겨");
      i = 16;
    }

    if (healthscore >= 20) {
      confirm("당신은 열심히 운동을 해서 체력을 최대치까지 올렸습니다.");
      confirm("당신은 몸짱 보더빌더가 될수있습니다.");
      console.log("라고할뻔~\n 니가 아무리 운동해도 로이더 못이겨");
      alert("라고할뻔~");
      alert("니가 아무리 운동해도 로이더 못이겨");
      i = 16;
    }

    if (i == 15) {
      alert("당신은 15일을 무사히 보냈습니다.");
      alert("당신은 15일을 보내기 위해 적당한 삶을 살았습니다.");
      alert("당신은 꿈을 이룰 자격이 생겼습니다.");
      console.log("라고할뻔~ 인생을 그렇게 살면 나가뒤져야지");
      alert("라고할뻔~");
      alert("인생을 그렇게 살면 나가뒤져야지");
      i == 16;
    }
  }
} else if (startPoint == 2) {
} else {
}
