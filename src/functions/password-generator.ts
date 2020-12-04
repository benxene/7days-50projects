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

export function generatePassword(
  hasLower: boolean,
  hasUpper: boolean,
  hasNumbers: boolean,
  hasSymbols: boolean,
  length: number
) {
  let password = '';
  if (!(hasLower || hasUpper || hasNumbers || hasSymbols)) {
    return password;
  }

  for (let i = 0; i <= length; i++) {}
}
