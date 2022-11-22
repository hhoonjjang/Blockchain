import React, { useState } from "react";

export default function List() {
  const [listArr, setListArr] = React.useState([
    { text: "adsf1", user: "asdf" },
    { text: "adsf2", user: "asdf" },
    { text: "adsf3", user: "asdf" },
    { text: "adsf4", user: "asdf" },
    { text: "adsf5", user: "asdf" },
  ]);

  return (
    <div>
      {listArr.map((item, index) => (
        <div key={`${index}+1`}>
          <div key={`${index}-1`}>{item.text}</div>
          <div key={`${index}-2`}>{item.user}</div>
        </div>
      ))}
    </div>
  );
}
