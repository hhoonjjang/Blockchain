import { useContext, useState } from "react";
import { OfficeContext } from "./ReducertTest";

export default function Office() {
  const { result, requestDispatch } = useContext(OfficeContext);
  const [balance, setBalance] = useState(100000);
  return (
    <div
      className="office"
      onClick={() => {
        requestDispatch({
          type: "주민등록등본",
          payload: {
            identityCard: "주민등록증",
            pay: 100,
          },
        });
      }}
    >
      {result}
    </div>
  );
}
