import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";

function EffectTest() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState({
    name: "dasdsa",
    ext: "png",
    type: "image/png",
  });

  console.log("확인중");
  useEffect(() => {
    console.log("이펙트훅 테스트 시작");
  }, []);

  useEffect(() => {
    console.log("숫자가" + num + "으로 변경됐어");
    setName(`${num}`);
    // setFile({ ...file, name: `${num}` });
  }, [num]);

  useEffect(() => {
    console.log("이름이" + name + "으로 변경됐어");
    setFile({ ...file, name: name });
  }, [name]);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const increase = () => {
    setNum(num + 1);
  };

  const increaseCallback = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  //   가입 => ID,PW,이름,나이,성별,지역
  //  input 함수를 만들어서 연결한다.
  // ID PW 이름 나이 성별 지역 각각 state
  // ID 가 바뀌었을때 pw 이름 나이 등등
  //   다시언언하지 않기위해 useCallback으로 최적화에 사용한다.

  const tempNum = num + 10;
  const memoNum = useMemo(() => {
    return num + 10;
  }, [num]);

  const ref = useRef();

  return (
    <div>
      <button onClick={increaseCallback}>{memoNum}</button>
      <div>{name}</div>
      <div
        ref={ref}
        onClick={() => {
          console.log(ref.current);
        }}
      >
        hey
      </div>
      <div>{file.name + "." + file.ext}</div>
    </div>
  );
}
export default EffectTest;
