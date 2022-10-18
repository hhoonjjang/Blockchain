window.addEventListener("load", function () {
  // 메뉴아이콘
  let toggleDiv = document.getElementById("toggle");
  toggleDiv.addEventListener("mousedown", (event) => {
    document.getElementById("toggle").classList.add("clickCircle");
  });
  toggleDiv.addEventListener("mouseup", () => {
    document.getElementById("toggle").classList.remove("clickCircle");
  });
  document.getElementById("toggle").addEventListener("click", function () {
    if (window.innerWidth > 1320) {
      document.getElementById("sideMenubarHidden").classList.toggle("hi");
      document.getElementById("display").classList.toggle("displayBye");
    } else {
      document.getElementById("sideMenubarHidden").classList.toggle("hi");
      document.getElementById("headerIcon1").classList.add("hi");
      document.getElementById("protect").style.display = "block";
      document.body.style.overflowY = "hidden";
    }
  });

  window.onresize = () => {
    let innerWidth = window.innerWidth;
    if (innerWidth <= 1320) {
      document.getElementById("sideMenubarHidden").classList.remove("hi");
      document.getElementById("display").classList.remove("displayBye");
      document.getElementById("protect").style.display = "none";
      document.getElementById("headerIcon1").classList.remove("hi");
    } else if (innerWidth > 1320) {
      document.getElementById("protect").style.display = "none";
      document.body.style.overflowY = "scroll";
    }
  };

  let arrowClick = document.getElementById("arrowIcon");
  let shortVideoItem = [...document.querySelectorAll(".shortsVideoItem")];

  arrowClick.onclick = () => {
    for (let i = 0; i < shortVideoItem.length; ++i) {
      shortVideoItem[i].style.display = "block";
    }
    arrowClick.style.display = "none";
  };

  document.getElementById("headerIcon1").onclick = () => {
    document.getElementById("headerIcon1").classList.remove("hi");
    document.getElementById("sideMenubarHidden").classList.remove("hi");
    // document.getElementById("display").classList.toggle("displayBye");
    document.getElementById("protect").style.display = "none";
    document.body.style.overflowY = "scroll";
  };

  //헤더바 etc Setting 아이콘
  let etcSetting = document.getElementById("etcSetting");
  let etcset = document.getElementById("settingIcon");
  let etcMenu = etcset.querySelector(".etcMenu");
  etcSetting.addEventListener("mousedown", () => {
    document.getElementById("etcSetting").classList.add("clickCircle");
  });

  etcSetting.addEventListener("mouseup", () => {
    document.getElementById("etcSetting").classList.remove("clickCircle");
  });

  etcSetting.addEventListener("click", () => {
    if (etcMenu.style.display == "none") {
      etcMenu.style.display = "block";
      document.getElementById("navi_setting").style.display="none";
    } else {
      etcMenu.style.display = "none";
      document.getElementById("navi_setting").style.display="";

    }
  });

  let inputBox = document.getElementById("inputBox");
  let searchIcon = this.document.getElementById("searchIcon");

  searchIcon.onclick = () => {
    inputBox.style.display = "block";
    inputBox.setAttribute = "focus";
  };

  let searchBox = document.getElementById("searchBox");
  inputBox.onfocus = () => {
    inputBox.style.border = "none";
    searchBox.style.border = "1px solid blue";
    document.getElementById("searchhidden").style.display = "block";
  };

  inputBox.onblur = () => {
    inputBox.style.border = "1px solid lightgray";
    searchBox.style.border = "none";
    document.getElementById("searchhidden").style.display = "none";
  };

  // 헤더바 etc voice 아이콘
  let voiceIcon = this.document.getElementById("voiceIcon");

  voiceIcon.addEventListener("mousedown", () => {
    document.getElementById("voiceIcon").classList.add("clickCircle");
  });

  voiceIcon.addEventListener("mouseup", () => {
    document.getElementById("voiceIcon").classList.remove("clickCircle");
  });

  let etcLogin = document.getElementById("etcLogin");

  etcLogin.addEventListener("mousedown", () => {
    document.getElementById("etcLogin").classList.add("clickCircle");
  });

  etcLogin.addEventListener("mouseup", () => {
    document.getElementById("etcLogin").classList.remove("clickCircle");
  });
});

let hiddenSettings = document.querySelectorAll(".hiddenSetting");

hiddenSettings.forEach((hiddenSetting) => {
  const settingButton = hiddenSetting.querySelector(".settingButton");
  const menu = hiddenSetting.querySelector(".menu");
  settingButton.addEventListener("mousedown", () => {
    settingButton.classList.add("clickCircle");
  });

  settingButton.addEventListener("mouseup", () => {
    settingButton.classList.remove("clickCircle");
  });

  //   settingButton.addEventListener("click", () => {
  //     if (menu.style.display == "none") {
  //       menu.style.display = "block";
  //     } else {
  //       menu.style.display = "none";
  //     }
  //   });

  settingButton.onclick = () => {
    if (menu.style.display == "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
});

let normalVideoItems = document.querySelectorAll(".normalVideoItem");

normalVideoItems.forEach((normalVideoItem) => {
  const thumbNail = normalVideoItem.querySelector(".thumbNail");
  const absoluteDiv = normalVideoItem.querySelector(".absoluteDiv");
  let startVideo;

  //   thumbNail.addEventListener("mouseenter", () => {
  //     startVideo = setTimeout(() => {
  //       clearTimeout(startVideo);
  //       absoluteDiv.classList.add("start");
  //       normalVideoItem.querySelector(".runTime").style.display = "none";
  //     }, 2000);
  //   });
  //   absoluteDiv.addEventListener("mouseleave", () => {
  //     clearTimeout(startVideo);

  //     absoluteDiv.classList.remove("start");
  //     normalVideoItem.querySelector(".runTime").style.display = "block";
  //   });

  thumbNail.onmouseenter = () => {
    startVideo = setTimeout(() => {
      clearTimeout(startVideo);
      absoluteDiv.classList.add("start");
      normalVideoItem.querySelector(".runTime").style.display = "none";
    }, 1000);
  };
  absoluteDiv.onmouseleave = () => {
    clearTimeout(startVideo);

    absoluteDiv.classList.remove("start");
    normalVideoItem.querySelector(".runTime").style.display = "block";
  };
});

// console.log(window.innerHeight);
// console.log(window.scrollY);
// console.log(document.body.offsetHeight);
// offsetHeight 스크롤바가 나타나는 부분까지의 길이.

let count = 0;
// window.onscroll = () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("videoInfiniteContainer");
//     newDiv.textContent = `${++count}번째 블록`;
//     console.log(newDiv);
//     document.querySelector(".videobar").appendChild(newDiv);

//     for (let i = 0; i < 4; i++) {
//       document
//         .querySelector(".videoInfiniteContainer")
//         .appendChild(normalVideoItem[i]);
//     }
//     console.log("hi");
//   }
// };

// console.log(document.getElementById(1));
let normalVideoItem = document.getElementById(1).children;
// let normalVideoItem1 = document.getElementById(1).children;
// console.log(...normalVideoItem[1].innerHTML);
// console.log(normalVideoItem);
// console.log(normalVideoItem[1].outerhtml);
let arrayDiv = [];
arrayDiv.push(normalVideoItem[0].outerHTML);
arrayDiv.push(normalVideoItem[1].outerHTML);
arrayDiv.push(normalVideoItem[2].outerHTML);
arrayDiv.push(normalVideoItem[3].outerHTML);
arrayDiv.push(normalVideoItem[4].outerHTML);

// console.log(arrayDiv);

window.onscroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("videoInfiniteContainer");
    let tempStr = "";
    arrayDiv.forEach((item) => {
      tempStr += item;
    });

    newDiv.innerHTML = tempStr;

    // if (count === 4) {
    //   count = 0;
    // }
    // newDiv.innerHTML = normalVideoItem[count++].innerHTML;
    // newDiv.innerHTML = [...normalVideoItem[count++].innerHTML];

    document.querySelector(".videobar").appendChild(newDiv);
    let newDivVideoItems = document.querySelectorAll(".normalvideoItem");

    newDivVideoItems.forEach((normalVideoItem) => {
      const thumbNail = normalVideoItem.querySelector(".thumbNail");
      const absoluteDiv = normalVideoItem.querySelector(".absoluteDiv");
      let startVideo;

      //   thumbNail.addEventListener("mouseenter", () => {
      //     startVideo = setTimeout(() => {
      //       clearTimeout(startVideo);
      //       absoluteDiv.classList.add("start");
      //       normalVideoItem.querySelector(".runTime").style.display = "none";
      //     }, 2000);
      //   });
      //   absoluteDiv.addEventListener("mouseleave", () => {
      //     clearTimeout(startVideo);

      //     absoluteDiv.classList.remove("start");
      //     normalVideoItem.querySelector(".runTime").style.display = "block";
      //   });
      thumbNail.onmouseenter = () => {
        startVideo = setTimeout(() => {
          clearTimeout(startVideo);
          absoluteDiv.classList.add("start");
          normalVideoItem.querySelector(".runTime").style.display = "none";
        }, 1000);
      };
      absoluteDiv.onmouseleave = () => {
        clearTimeout(startVideo);

        absoluteDiv.classList.remove("start");
        normalVideoItem.querySelector(".runTime").style.display = "block";
      };
    });
    let newDivhiddenSettings = document.querySelectorAll(".hiddenSetting");

    newDivhiddenSettings.forEach((hiddenSetting) => {
      const settingButton = hiddenSetting.querySelector(".settingButton");
      const menu = hiddenSetting.querySelector(".menu");
      settingButton.addEventListener("mousedown", () => {
        settingButton.classList.add("clickCircle");
      });

      settingButton.addEventListener("mouseup", () => {
        settingButton.classList.remove("clickCircle");
      });
      settingButton.onclick = () => {
        if (menu.style.display == "none") {
          menu.style.display = "block";
        } else {
          menu.style.display = "none";
        }
      };
    });
  }
};
