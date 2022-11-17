// import TempTd from "./TempTd";
import TempTr from "./TempTr";

export default function TempTable({ isHead, tableData, head, arr }) {
  console.log(tableData);
  console.log(head);
  console.log(isHead);
  console.log(arr);
  return (
    <table>
      <thead>
        <TempTr isHead={isHead} tableData={tableData} head={head} />
      </thead>
      <tbody>
        {arr.map((item, index) => (
          <TempTr key={index} tableData={item} head={head} />
        ))}
      </tbody>
    </table>
  );
}

// export default function TempTable(props) {
//   console.log(props);
//   return (
//     <table>
//       <thead>
//         <TempTr
//           isHead={true}
//           tableData={props.headData}
//           head={props.tempHead}
//         />
//       </thead>
//       <tbody>
//         {props.tempArr.map((item, index) => (
//           <TempTr key={index} tableData={item} head={props.tempHead} />
//         ))}
//       </tbody>
//     </table>
//   );
// }
