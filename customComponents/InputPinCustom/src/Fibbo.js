const historyCalc = (func) => {
  const cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

/*
0:1,
1:2,
2:2
*/

const fibbo = historyCalc((n) => {
  if (n <= 1) {
    return n;
  }
  return fibbo(n - 1) + fibbo(n - 2);
});

console.time("T1: ");
fibbo(4000);
console.timeEnd("T1: ");
