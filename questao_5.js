function stringInverter(string) {
  let invertedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  console.log(invertedString);
}

stringInverter("Gabriel");
