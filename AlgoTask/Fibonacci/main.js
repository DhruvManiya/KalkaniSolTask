const fibo = (n) => {
  let ansFibo = [0, 1];

  while (ansFibo[ansFibo.length - 2] + ansFibo[ansFibo.length - 1] < n) {
    ansFibo.push(ansFibo[ansFibo.length - 2] + ansFibo[ansFibo.length - 1]);
  }

  return ansFibo;
};

console.log(fibo(10));
console.log(fibo(100));
console.log(fibo(150));
console.log(fibo(250));
