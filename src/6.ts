function getRandomTsCode(): string {
  let result = '';
  for (let i = 0; i < 15; i++) {
    const randomNumber = Math.floor(Math.random() * 9);
    result += randomNumber.toString();
  }
  return result;
}
