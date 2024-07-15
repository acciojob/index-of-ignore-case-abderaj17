function indexOfIgnoreCase(s1, s2) {
  // convert both s1 and s2 to lowercase
  let lowerS1 = s1.toLowerCase();
  let lowerS2 = s2.toLowerCase();

  // find the index of lowerS2 in lowerS1
  let index = lowerS1.indexOf(lowerS2);

  // if s2 is not found in s1, index will be -1
  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
