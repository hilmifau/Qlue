function printNumber(arr) {
  let temp = []
  if (arr.length != 1) {
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i])
        if(temp.length === 0) break
    }
    console.log(temp);
  }
}

function findNumbers(arr, i, n) {
  if (n == 0)
    printNumber(arr);
  for (let j = i; j <= n; j++) {
    arr.push(j);
    findNumbers(arr, j, n - j);
    arr.pop();
  }
}
let n = 4;
let arr = [];
findNumbers(arr, 1, n);




