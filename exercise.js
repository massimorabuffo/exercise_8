function multiplyByTwo(value) {
  const number = 2;
  return function inner() {
    return value * number;
  }
};

console.log(multiplyByTwo(4)());

