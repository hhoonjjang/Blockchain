function Node(data) {
  this.data = data;
  this.next = undefined;
}

function CircularLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

CircularLinkedList.prototype.insert = function (data) {
  if (!this.head) {
    this.head = this.tail = new Node(data);
    this.head.next = this.head;
  } else {
    this.tail.next = new Node(data);
    this.tail.next.next = this.head;
    this.tail = this.tail.next;
  }
  this.size++;
};

CircularLinkedList.prototype.remove = function (data) {
  let curr = this.head;
  if (!curr) return;
  if (curr.data === data) {
    this.head = this.head.next;
    this.tail.next = this.head;
    this.size--;
    return curr.data;
  }
  while (curr !== this.tail) {
    if (curr.next.data === data) {
      const tempNode = curr.next;
      curr.next = tempNode.next;
      if (tempNode === this.tail) this.tail = curr;
      --this.size;
      return curr.data;
    }
    curr = curr.next;
  }
};

// CircularLinkedList.prototype.remove = function (data) {
//   if(!this.head) return;
//     if (this.head?.data === data) {
//     this.tail.next = this.head.next;
//     delete this.head;
//     this.head = this.tail.next;
//     this.size--;
//     return;
//   } else {

//     while(curr !== this.tail){
//     if (curr.next.data === data) {
//       const tempNode = curr.next.next;
//       delete this.curr.next.data;
//       this.curr.next = tempNode;
// if(curr.next==this.head) this.tail =curr;
//       this.size--;
//       return;
//     }
//     curr = curr.next;
//   }
// }
// };
let circular = new CircularLinkedList();
circular.insert(1);
circular.insert(2);
circular.insert(3);
circular.insert(4);
circular.insert(5);

console.log(circular);
// circular.remove();
console.log(circular.toString());

// CircularLinkedList.prototype.toString = function () {
//   let a = new String();
//   for (let i = 1; i < 6; i++) {
//     a += circular.remove(i) + ",";
//     console.log(a);
//   }
//   console.log(a);
// };

CircularLinkedList.prototype.toString = function () {
  if (!this.head) return "";
  // head가 없으면 빈 문자열 반환
  let curr = this.head;
  let tempStr = `${this.head.data}`;
  //   임시 문자열에 head의 데이터 정의
  while (curr !== this.tail) {
    // curr가 tail이 아니면 실행
    tempStr += ",";
    // head의 data가 정의되었으니 한번 끊도록, 를 추가
    tempStr += curr.next.data;
    // 임시 문자열에 다음NOde의 data를 추가
    curr = curr.next;
    // 현재 노드를 다음 노드로 정의
  }
  return tempStr;
  //   모든 문자열이 모인 tempStr을 반환
};

console.log(circular.toString());
