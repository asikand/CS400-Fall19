//Used to generate infinite sequence of fibonacci numbers
function *infFib() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

//Used to generate the first n even fibonacci numbers
function *fibEven(n) {
  const inf = n === undefined;
  let gen = infFib()
  while (inf || n--) {
    g = gen.next().value
    while (g % 2 != 0) {
      g = gen.next().value
    }
    yield g
  }
}

//First 6 even fibonacci numbers
let [...first6Even] = fibEven(6);
console.log(first6Even)
