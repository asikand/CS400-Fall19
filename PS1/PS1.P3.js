//P3.js
const stringFunc = (s, func) => func(s)

//Function to split on 'c' character
const brokenOnC = s => {
  var split = s.split('c');
  var first = split[0];
  split.forEach( (str, i) => {
    if (i != 0) {
      split[i] = "c" + str;
    }
  });
  return split;
}

//Helper function to count occurences
const countChar = (str, c) => {
  var count = 0;
  for (var pos = 0; pos < str.length; pos++)
  {
     if (str.charAt(pos) == c) { count+= 1 }
  }
  return count;
}

//Function to replace 'a' with 'A' and return data object
const replaceA = s => {
  var orig = s
  var mod = s.replace('a', 'A');
  var l = s.length
  var count = countChar(mod, 'A')
  return {
    originalString: orig,
    modifiedString: mod,
    numberReplaced: count,
    length:         l
  }
}

//console.log(stringFunc('supercalifragilisticexpialidocious', brokenOnC))
//console.log(stringFunc('supercalifragilisticexpialidocious', replaceA))
