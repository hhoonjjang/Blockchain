function Heap(type = "min") {
  this.items = [];
  this.type = type;
}

Heap.prototype.swap = function (idx1, idx2) {
  const temp = this.items[idx1];
  this.items[idx1] = this.items[idx2];
  this.items[idx2] = temp;
};

Heap.prototype.getParentIndex = function (idx) {
  return parseInt((idx - 1) / 2);
};

Heap.prototype.getLeftChildIndex = function (idx) {
  return idx * 2 + 1;
};

Heap.prototype.getRightChildIndex = function (idx) {
  return idx * 2 + 2;
};

Heap.prototype.getType = function () {
  return this.type === "max" ? -1 : 1;
};

Heap.prototype.insert = function (item) {
  this.items.push(item);
  let nowIdx = this.items.length - 1;
  while (true) {
    if (nowIdx < 1) return this.items.length;
    const parentIdx = this.getParentIndex(nowIdx);
    if (
      this.items[parentIdx] * this.getType() >
      this.items[nowIdx] * this.getType()
    ) {
      this.swap(parentIdx, nowIdx);
      nowIdx = parentIdx;
    } else {
      break;
    }
  }
  return this.items.length;
};

Heap.prototype.remove = function () {
  const temp = this.items.shift();
  this.items.unshift(this.items.pop());
  let nowIdx = 0;
  while (true) {
    const leftChild = this.getLeftChildIndex(nowIdx),
      rightChild = this.getRightChildIndex(nowIdx);
    if (
      this.items[nowIdx] * this.getType() >
        this.items[leftChild] * this.getType() ||
      this.items[nowIdx] * this.getType() >
        this.items[rightChild] * this.getType()
    ) {
      if (
        this.items[leftChild] * this.getType() >
        this.items[rightChild] * this.getType()
      ) {
        this.swap(nowIdx, rightChild);
        nowIdx = rightChild;
      } else {
        this.swap(nowIdx, leftChild);
        nowIdx = leftChild;
      }
    } else {
      break;
    }
  }
  return temp;
};

let heapArr = new Heap();
console.log(heapArr);
heapArr.insert(10);
heapArr.insert(20);
heapArr.insert(28);
heapArr.insert(18);
heapArr.insert(727);
heapArr.insert(9);
heapArr.insert(8);
heapArr.insert(7);
heapArr.insert(6);
heapArr.insert(17);
heapArr.insert(8);
heapArr.insert(4);
heapArr.insert(3);
heapArr.insert(2);
heapArr.insert(1);
console.log(heapArr.items);
console.log(heapArr.remove());
console.log(heapArr.items);

const heap = new Heap("max");
console.log(heapArr);
heap.insert(10);
heap.insert(20);
heap.insert(28);
heap.insert(18);
heap.insert(727);
heap.insert(9);
heap.insert(8);
heap.insert(7);
heap.insert(6);
heap.insert(17);
heap.insert(8);
heap.insert(4);
heap.insert(3);
heap.insert(2);
heap.insert(1);
console.log(heap.items);
console.log(heap.remove());
console.log(heap.items);
