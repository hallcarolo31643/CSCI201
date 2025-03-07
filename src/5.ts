function getRandomTsCode() {
  let date = new Date();
  let randomNumber = Math.random() * 1000;
  let timestamp = date.getTime() + randomNumber;
  return timestamp;
}
