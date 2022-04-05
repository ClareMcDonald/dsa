// CH01 Reverse Sentence Words

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWords('They are good'));


// CH02 Title Case Words
function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log(titleCase('tILLY iS gREAT'));


// CH02.1 Oddish Evenish
function oddishOrEvenish(number) {
  const sumOfDigits = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce((sum, num) => sum + num);
  return sumOfDigits % 2 === 0 ? 'Evenish' : 'Oddish';
  /// or              % 2 ? 'Oddish' : 'Evenish';
}

console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(41));


// CH02.2 At
function at(arr, index) {
  // if (index > -1) {
  //   return arr[index];
  // } else {
  //   return arr[arr.length + index];
  // }

  return index > -1 ? arr[index] : arr[arr.length + index];
}
console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));

// CH03 Fizz Buzz
function fizzBuzz(number) {
  const list = [];
  for (let i = 1; i < number; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   list.push('FizzBuzz');
    // } else if (i % 3 === 0) {
    //   list.push('Fizz')
    // } else if (i % 5 === 0) {
    //   list.push('Buzz')
    // } else {
    //   list.push(i);
    // }

    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    list.push(result || i);
  }
  return list;
}

console.log(fizzBuzz(16));


// CH04 Anagrams
function anagrams(wordOne, wordTwo) {
  // const first = wordOne.split('').sort().join('');
  // const second = wordTwo.split('').sort().join('');
  // return first === second;

  const orderLetters = (word) => word.split('').sort().join('');
  return orderLetters(wordOne) === orderLetters(wordTwo);
}

console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));


// CH05 Unique String
function uniqueString(strings) {
  const orderedUniqueLetters = strings.map((s) => [...new Set(s)].sort());
  const duplicates = [...new Set(...orderedUniqueLetters)];

  return strings.find((string) => {
    return duplicates.indexOf(string[0]) === -1;
  });
}

console.log(uniqueString(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']));
console.log(uniqueString(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']));


// CH06 Unique Char
function uniqueChar(string) {
  const chars = string.split('').sort();
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const prev = chars[i - 1];
    const next = chars[i + 1];
    if (current !== prev && current !== next) return current;
  }
  return '_';
}

console.log(uniqueChar('abdacabad'));
console.log(uniqueChar('abacabaabacaba'));
console.log(uniqueChar('abacabad'));
