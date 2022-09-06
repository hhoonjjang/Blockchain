const inputData = prompt("숫자를 입력하세요");

for (let i = 1; i <= parseInt(inputData); i++) {
  let arr1 = String(i).split("");
  let arr2 = "";
  if (arr1.includes("3") || arr1.includes("6") || arr1.includes("9")) {
    for (let j = 0; j <= arr1.length; j++) {
      if (parseInt(arr1[j]) % 3 == 0 && arr1[j] != 0) {
        arr2 += "짝";
      }
    }
    console.log(arr2);
  } else console.log(i);
}

// for (let i = 1; i <= parseInt(inputData); i++) {
//   if (i / 10 < 1) {
//     if (i % 3 == 0 && i != 0) console.log("짝");
//     else console.log(i);
//   } else {
//     for (j = 0; j < i / 10; j++) {
//       if ((i % 10) % 3 == 0 && i % 10 > 0) {
//         console.log("짝");
//       } else console.log(i);
//     }
//   }
// }

//     else
//     while(i/10 !=0){

//     }
//     console.log(i);

// for (let i = 1; i <= parseInt(inputData); i++) {
//   arr1 = String(i).split("");
//   console.log(arr1);
//   let arr3 = arr1.find((item)=> {return item == 3})
//     if(arr3 = arr1.find(function))
//   //   if ();
// }
//   //   console.log(arr1);
//   for (let j = 0; j < arr1.length; j++) {

//       console.log(arr2);
//       arr2 = "";
//     } else console.log(i);
//   }
// }

// arr1 = String(i).split("");
// console.log(arr1);

//   for (let i = 1; i < parseInt(inputData); i++) {
//     if (i % 3 == 0) {
//       console.log("짝");
//     } else console.log(i);
//   }
// }
