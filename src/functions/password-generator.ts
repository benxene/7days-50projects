export function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // 97 = a
}

export function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // 65 = a
}

export function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // ASCII
}

export function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function shuffleStringArray(array: Array<string>): Array<string> {
  let cloneArray = [...array];
  return cloneArray.sort(() => Math.random() - 0.5);
}

export function generatePassword(
  hasLower: boolean,
  hasUpper: boolean,
  hasNumbers: boolean,
  hasSymbols: boolean,
  length: number
) {
  if (!(hasLower || hasUpper || hasNumbers || hasSymbols)) {
    return '';
  }

  const typesCount = Number(hasLower) + Number(hasUpper) + Number(hasNumbers) + Number(hasSymbols);
  const eachLength = Math.ceil(length / typesCount);

  const eachCount = {
    lower: hasLower ? eachLength : 0,
    upper: hasUpper ? eachLength : 0,
    numbers: hasNumbers ? eachLength : 0,
    symbols: hasSymbols ? eachLength : 0
  };

  let passwordArray: Array<string> = [];

  for (let i = 0; i < eachCount.lower; i++) {
    passwordArray.push(getRandomLower());
  }
  for (let i = 0; i < eachCount.upper; i++) {
    passwordArray.push(getRandomUpper());
  }
  for (let i = 0; i < eachCount.numbers; i++) {
    passwordArray.push(getRandomNumber());
  }
  for (let i = 0; i < eachCount.symbols; i++) {
    passwordArray.push(getRandomSymbol());
  }

  const generatedPasswordArray = shuffleStringArray(passwordArray);
  generatedPasswordArray.length = length;

  return generatedPasswordArray.join('');
}
