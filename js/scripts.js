// IMPORTANTE: Los nombres de las funciones NO SE PUEDEN REPETIR.

//1 - Escribe una función que reciba un número y lo devuelva sumando 2.

const twoNumber = number => {
  const sum = number + number;
  return sum;
};

const resultTwoNumber = twoNumber(1, 1);
console.log(resultTwoNumber);

//2 - Escribe una función que reciba un número y devuelva el doble de ese número.

const doubleNumber = number => {
  const double = 2 * number;

  return double;
};

const resultDouble = doubleNumber(20);
console.log(resultDouble);

//3 - Escribe una función que reciba una palabra y devuelva su longitud.

const length = word => {
  const numberLength = word.length;
  return numberLength;
};
const resultLength = length('hola');
console.log(resultLength);

//4 - Escribe una función que reciba una palabra y la imprima en mayúsculas.

const wordUpper = word => {
  const upper = word.toUpperCase();
  return upper;
};
const resultWordUpper = wordUpper('bienvenido');
console.log(resultWordUpper);

//5 - Escribe una función que reciba dos palabras e imprima si son iguales o no

const same = (word1, word2) => {
  if (word1 === word2) {
    return `Son iguales`;
  }
  return `No son iguales`;
};
const resultSame1 = same('cielo', 'cielo');
console.log(resultSame1);
const resultSame2 = same('cielo', 'liceo');
console.log(resultSame2);

//6 - Crea una función que tome dos números como parámetro y devuelva su multiplicación.

const multiplication = (number1, number2) => {
  const multi = number1 * number2;
  return multi;
};
const resultMultiplicacion = multiplication(4, 6);
console.log(resultMultiplicacion);

//7 - Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = num => {
  let string = String(num);

  const stringSum = Number(string.charAt(0)) + Number(string.charAt(1)) + Number(string.charAt(2));

  return stringSum;
};
const resultSumDigits = sumDigits(168);
console.log(resultSumDigits);

//8 - Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.

const longestWord = (word1, word2) => {
  if (word1.length >= word2.length) {
    return word1;
  } else if (word2.length >= word1.length) {
    return word2;
  }
};
const resultLongestWord = longestWord('pato', 'coche');
console.log(resultLongestWord);

//9 - Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.

const getfirstElement = array => {
  return array[0];
};
const resultGetfirstElement = getfirstElement(['hola', 'casa']);
console.log(resultGetfirstElement);

//10 - Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, position) => {
  return array[position];
};
const resultGetArrayElement = getArrayElement(['ordenador', 'coche', 'cristal'], 2);
console.log(resultGetArrayElement);

//11 - Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.

const shortestWord = (word1, word2) => {
  if (word1.length <= word2.length) {
    return `"${word1}" es la palabra mas corta`;
  }
  return `"${word2}" es la palabra mas corta`;
};
const resultShortestWord = shortestWord('Casa', 'Edificio');
console.log(resultShortestWord);

//12 - Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.

const onlyEven = (num1, num2, num3) => {
  let allNumbers = [];

  if (num1 % 2 === 0) {
    allNumbers.push(num1);
  }
  if (num2 % 2 === 0) {
    allNumbers.push(num2);
  }
  if (num3 % 2 === 0) {
    allNumbers.push(num3);
  }
  return allNumbers;
};
const resultOnlyEven = onlyEven(20, 35, 22);
console.log(resultOnlyEven);

//13 - Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const cubeSquare = num => {
  const square = Math.pow(num, 2);
  const cube = Math.pow(num, 3);

  return `El número de cuadrado es ${square} y el de cubo es ${cube}`;
};
const resultCubeSquare = cubeSquare(8);
console.log(resultCubeSquare);

//14 - Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const fiveLetters = word => {
  let allFive = '';

  allFive += word.charAt(0) + ',' + word.charAt(1) + ',' + word.charAt(2) + ',' + word.charAt(3) + ',' + word.charAt(4);

  return allFive;
};
const resultFiveLetters = fiveLetters('Cazar');
console.log(resultFiveLetters);

//15 - Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const duplicate = num => {
  num.push(num[0]);
  num.push(num[1]);
  num.push(num[2]);

  return num;
};
const resultDuplicate = duplicate([1, 2, 3]);
console.log(resultDuplicate);

//16 - Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const noFirstLast = array => {
  array.shift();
  array.pop();
  return array;
};
const resultNoFirstLast = noFirstLast([1, 2, 3, 4, 5]);
console.log(resultNoFirstLast);

//17 - Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra

const united = word => {
  return word[0] + word[1] + word[2] + word[3] + word[4];
};
const resultUnited = united(['A', 'v', 'i', 'ó', 'n']);
console.log(resultUnited);

//18 - Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

const wordArray = array => {
  if (array[0].length > array[1].length && array[0].length > array[2].length) {
    return `${array[0]} es la mas larga`;
  } else if (array[1].length > array[0].length && array[1].length > array[2].length) {
    return `${array[1]} es la mas larga`;
  }
  return `${array[2]} es la mas larga`;
};
const resultWordArray = wordArray(['hola', 'espatula', 'autopista']);
console.log(resultWordArray);

//19 - Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c

const intercalated = (letters, num) => {
  return `${letters[0]},${num[0]},${letters[1]},${num[1]},${letters[2]},${num[2]} `;
};

const resultIntercalated = intercalated([1, 2, 3], ['a', 'b', 'c']);
console.log(resultIntercalated);

//20 - Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

const positionCentral = array => {
  const odd = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return `El array no es válido`;
  } else {
    return array[odd];
  }
};

const resultPositionCentral1 = positionCentral([1, 2, 3, 4, 5, 6, 7]);
console.log(resultPositionCentral1);

const resultPositionCentral2 = positionCentral([1, 2, 3, 4, 5]);
console.log(resultPositionCentral2);

const resultPositionCentral3 = positionCentral([1, 2, 3, 4, 5, 6]);
console.log(resultPositionCentral3);

//21 - Crea una función que reciba una palabra de 5 letras e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"

const vowel = letters => {
  let fixedLetters = '';

  if (
    letters.charAt(0) === 'a' ||
    letters.charAt(0) === 'e' ||
    letters.charAt(0) === 'i' ||
    letters.charAt(0) === 'o' ||
    letters.charAt(0) === 'u'
  ) {
    fixedLetters += letters.charAt(0);
  }
  if (
    letters.charAt(1) === 'a' ||
    letters.charAt(1) === 'e' ||
    letters.charAt(1) === 'i' ||
    letters.charAt(1) === 'o' ||
    letters.charAt(1) === 'u'
  ) {
    fixedLetters += letters.charAt(1);
  }
  if (
    letters.charAt(2) === 'a' ||
    letters.charAt(2) === 'e' ||
    letters.charAt(2) === 'i' ||
    letters.charAt(2) === 'o' ||
    letters.charAt(2) === 'u'
  ) {
    fixedLetters += letters.charAt(2);
  }
  if (
    letters.charAt(3) === 'a' ||
    letters.charAt(3) === 'e' ||
    letters.charAt(3) === 'i' ||
    letters.charAt(3) === 'o' ||
    letters.charAt(3) === 'u'
  ) {
    fixedLetters += letters.charAt(3);
  }
  if (
    letters.charAt(4) === 'a' ||
    letters.charAt(4) === 'e' ||
    letters.charAt(4) === 'i' ||
    letters.charAt(4) === 'o' ||
    letters.charAt(4) === 'u'
  ) {
    fixedLetters += letters.charAt(4);
  }

  return fixedLetters;
};

const resultVowel = vowel('mario');
console.log(resultVowel);
