function* createId(start, totalNumber) {
  while (start < totalNumber) {
    start++;
    // console.log(start);
    yield start;
  }
}

let number = createId(5, 10);
let number1 = createId(100, 110);
console.log(number.next());
console.log(number1.next());
