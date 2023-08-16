function multiplyByTwo(value) {
  let number = 2;
  const inner = function() {
    return value * number;
  };
  return inner();
};

console.log(multiplyByTwo(4));
