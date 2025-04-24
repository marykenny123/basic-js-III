/*1. Escribe una función que tome dos números como argumentos y devuelva su suma. 
2. Escribe una función que tome dos números como argumentos y devuelva su resta. 
3. Escribe una función que tome dos números como argumentos y devuelva su producto. 
4. Escribe una función que tome dos números como argumentos y devuelva su división. 
5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada. 
6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo. 
7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada. 
8. Escribe una función que tome un número como argumento y devuelva su valor absoluto. 
9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano. 
10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1 */

// HE AÑADIDO CONSOLE.LOG PARA VER RESULTADO DE UN EJEMPLO EN PANTALLA

console.log("----------- FUNCIONES NÚMEROS ----------------");
function add(num1,num2) {
    return num1 + num2; 
}
console.log(add(5,9)); 


function subtract(num1,num2) {
    return num1 - num2;
}
console.log(subtract(15,8)); 

function multiply(num1,num2) {
    return num1 * num2;
}
console.log(multiply(7,4));

function divide(num1,num2) {
    return num1 / num2;
}
console.log(divide(120,12));

function power (num1,num2) {
    return num1 ** num2;
}
console.log(power(2,3));

function remainder (num1,num2) {
    return num1 % num2;
}
console.log(remainder(36,5));

function squareRoot (num1) {
    return Math.sqrt(num1);
}
console.log(squareRoot(144));

function absoluteValue (num1) {
    return Math.abs(num1); 
}
console.log(absoluteValue(8));

function roundOff (num1) {
    return Math.round(num1);
}
console.log(roundOff(1.6));

function random (num1, num2) {
    return Math.random(num1)
}
console.log(random(0,1));

/*
## Letras:   
1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
7. Escribe una función que tome una cadena de texto y l como argumento y devuelva la misma cadena sin espacios en blanco.
9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula. 
*/


console.log("----------- FUNCIONES LETRAS -----------------");

function joinText(string1, string2) {
    return string1 + " " + string2;
  }
console.log(joinText("Hace frio", "y llueve."));  

function findTextLength(string1) {
    let lengthOfString = string1.length;
    return lengthOfString;
}
console.log(findTextLength("It's raining."));

function convertToUpper (string1) {
    let allUpper = string1.toUpperCase();
    return allUpper;
}
console.log(convertToUpper("I am feeling tired.")); 

function convertToLower (string1) {
    let allLower = string1.toLowerCase();
    return allLower;
}
console.log(convertToLower("I am feeling tired."));

function findCharAtSpecificPosition(string1,position) {
    let letter = string1.charAt(position);
    return letter;
}
console.log(findCharAtSpecificPosition("It's cold today.",2));

function reverseOrder(string1) {
    let reverse = string1.split('').reverse().join('');
    return reverse;
}
console.log(reverseOrder("It's sunny."));

function removeSpaces(string1) {
    let remove = string1.replaceAll(' ','');
    return remove;
}
console.log(removeSpaces(" a b c d e f g h"));

function checkPalindrome(string1) {
    let normalizedString = string1.toLowerCase().replace(/[\W_]/g, '');
    let reversedString = normalizedString.split('').reverse().join('');
    let isPalOrNot = normalizedString === reversedString;
    return isPalOrNot;
}
console.log(checkPalindrome("abababa"));


function capitalizeWords(string1) {
    let capLetter = string1.charAt(0).toUpperCase();
    let capString = capLetter+string1.slice(1);
    return capString;    
}   
console.log(capitalizeWords("it's not raining."));

function capitalizeAllFirstLetters(string1) {
    return string1.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeAllFirstLetters("the sun is shining today")); 


/* ## Arrays:    
1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.
*/

console.log("---------------------- FUNCIONES ARRAYS -------------------");

function sumElements(numArray) {
    let sum = 0;
    for (let i=0;i<numArray.length;i++) {
            sum = sum + numArray[i];    
    }
    return sum; 
}
console.log(sumElements([1,2,3]));

function getAverage(numArray) {
    let sum = 0;
    for (let i=0;i<numArray.length;i++) {
            sum = sum + numArray[i];
    }
    let average = sum / (numArray.length);
    return average; 
}
console.log(getAverage([1,2,3,4]));

function arrangeAscOrder(numArray) {
	let n = numArray.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			if (numArray[j] > numArray[j + 1]) {
            	[numArray[j], numArray[j + 1]] = [numArray[j + 1], numArray[j]];
			}
		}
	}
	return numArray;
}
console.log(arrangeAscOrder([10,4,7,9,91,-3]));  

function onlyGreaterThan(numArray, num1) {
    let newArrGreater = numArray.filter(n => n > num1)
    return newArrGreater;
    }
console.log(onlyGreaterThan([5,99,27,21,19,4,22,9,77],19));

function mergeArrayNums (numArray, numArray2) {
    let numArray3 = numArray.concat(numArray2);
    return numArray3;
}  
console.log(mergeArrayNums([1,99,14,7,5],[5,7,97,-3,4]));

function maxNumInArray(numArray) {
    let j = 0;
    let max = numArray[j];
    for (let i = 1; i < numArray.length; i++) {
      if (numArray[i] > max) {
        max = numArray[i];
      }
    }
    return max; 
}
console.log(maxNumInArray([1,98,-3,-99,0,100]));

function minNumInArray(numArray) {
    let j = 0;
    let min = numArray[j];
    for (let i = 1; i < numArray.length; i++) {
      if (numArray[i] < min) {
        min = numArray[i];
      }
    }
    return min; 
}
console.log(minNumInArray([1,98,-3,-99,0,100]));

function checkFrequencyInArray(numArray, num1) {
    let j = 1;
    let frequency = 0;
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] == numArray[j]) {
        frequency++;
        } 
    j++;
    }
    return frequency;
}
console.log(checkFrequencyInArray([99,1,-99,4,5,12,1],1)); 

function removeDuplicates(numArray) {
    let uniqueArray = [...new Set(numArray)];
    return uniqueArray;
} 
console.log(removeDuplicates([99,1,-99,1,1,14,5,12,1]));

console.log("NOTA -- ex 10 comentado, no consigo que me deje de dar error");
/*
function reverseOrder(numArr) {
    let reversd = numArray.reverse();
    return reversd;
}
console.log(reverseOrder([99,1,-99,1,12,1])); */


/*## Objetos literales:
1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.   
7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.
10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
*/
console.log("--------------- FUNCIONES OBJETOS -------------------")

// declaro objetos person y student con propiedades y valores para comprobar los resultados con contro.log
let person = {
    name: "Elena", 
    age: 64,
    hobby: "running",
    profession: "doctor"
    };
let student = {
    name: "Clara",
    age: 20, 
    hobby: "reading",   
}

function getName(object) {
    return person.name;
    }
console.log(getName(person));

function getAge(object) {
    return person.age;
    }
console.log(getAge(person)); 

function addProperty(object,string1) {
    return Object.assign(object, {[string1]: null });
    }
console.log(addProperty(person,"nationality")); 

function deleteProperty(object,string1) {
    delete object[string1]; 
    return object;
}
console.log(deleteProperty(person,"age"));

function getNumberProperties(object) {
    let size = Object.keys(object).length;
    return size;
    }
console.log(getNumberProperties(person));

function hasPropertyOrNot(object,string1) {
    let hasProp = Object.hasOwn(object,string1);
    return hasProp;
}
console.log(hasPropertyOrNot(person,'name'));
 
function convertObject(object) {
    let values = Object.values(object);
    return values;
    }
console.log(convertObject(person));


function areEqual(object, object1) {
    if (object === object1) {
        return true;
    }
    if (object == null || typeof object !== "object" || object1 == null || typeof object1 !== "object") {
        return false;
    }

    let keysA = Object.keys(object);
    let keysB = Object.keys(object1);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(object[key], object1[key])) {
            return false;
        }
    }

    return true;
}
console.log(areEqual(person,student));
 

function copyObject (object1) {
      let copyOfObject = Object.assign({}, object);
      return copyOfObject;    
    }
console.log(student);

function combineProps(object, object1) {
    let combined = { ...object, ...object1 };
    return combined;
}
console.log(combineProps(person,student));
