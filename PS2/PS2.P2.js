//Used to generate words in a given string "sentence" one at a time
function *wordEmitter(sentence) {
  var split = sentence.split(" ")
  let current = 0;
  while (current < split.length) {
    yield split[current]
    current++
  }
  return split[current]
}

//Print out all the words in the given string
let gen = wordEmitter("All I know is something like a bird within her sang")
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
