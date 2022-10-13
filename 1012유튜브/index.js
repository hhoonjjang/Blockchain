let count = 2;

window.onscroll = () => {
  console.log(window.innerHeight);
  console.log(window.scrollY);
  console.log(document.body.offsetHeight);
  if (window.innerHeight + window.scrollY * 1.1 >= document.body.offsetHeight) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.textContent = `${++count}`;
    document.querySelector(".videoInfiniteContainer").appendChild(newDiv);
    console.log(newDiv);
    // document.querySelector(".hi").appendChild(newDiv);
  }
};
