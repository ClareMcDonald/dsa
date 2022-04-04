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
    .reduce((sum, num) => sum + num)
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
