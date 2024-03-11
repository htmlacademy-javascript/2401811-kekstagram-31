/*Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
если строка меньше или равна указанной длине, и false, если строка длиннее. */

const checkStringLenght = function (string, maxLenght) {
  if (string.length <= maxLenght) {
    return true;
  } else {
    return false;
  }
};

checkStringLenght('проверяемая строка', 20);
checkStringLenght('проверяемая строка', 18);
checkStringLenght('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом.

function isStringPalindrome(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  const newString = string;
  let newEmptyString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    newEmptyString += newString[i];
  }
  if (newEmptyString === newString) {
    return true;
  } else {
    return false;
  }
}

isStringPalindrome('топот');
isStringPalindrome('ДовОд');
isStringPalindrome('Кекс');
isStringPalindrome('Лёша на полке клопа нашёл ');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN.

function stringToNumber(string) {
  let result = '';
  string = string.toString();
  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

stringToNumber('2023 год');
stringToNumber('ECMAScript 2022');
stringToNumber('1 кефир, 0.5 батона');
stringToNumber('агент 007');
stringToNumber('а я томат');
stringToNumber(2023);
stringToNumber(1.5);
stringToNumber(-1);
