const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

function arrayLength() {
  let len = arr.push(1);
  arr.pop();
  return len - 1;
}

function arraySum() {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}

function arrayMulti() {
  let mult = 1;
  for (let index = 0; index < arr.length; index++) {
    mult *= arr[index];
  }
  return mult;
}

console.log("arrayLength:" + arrayLength());

console.log("arraySum:" + arraySum());

console.log("arrayMulti:" + arrayMulti());
