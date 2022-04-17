//PASSWORD TEXT
const passwordText = document.getElementById("password-text");

//INPUT FORM
const passwordForm = document.getElementById("password-form");

//const seleccionUsuario = document.getElementsByTagName('input');

//FUNCTIONS********************
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//esta funcion funciona con la longitud en el parametro y con un array "characters" conformado por lo que el usuario eligió en la seccion de reglas y en la seccion de caracteres.

const longitud12Caracteres = document.getElementById("longitud-12-caracteres");
const longitud9Caracteres = document.getElementById("longitud-9-caracteres");
const longitud6Caracteres = document.getElementById("longitud-6-caracteres");

const caracteresMayusculas = document.getElementById("caracteres-mayusculas");
const caracteresMinusculas = document.getElementById("caracteres-minusculas");
const caracteresNumeros = document.getElementById("caracteres-numeros");
const caracteresSimbolos = document.getElementById("caracteres-simbolos");
const generatorButton = document.getElementById("generator-button");
const passwordGenerated = document.getElementById("password-generated");

//const reglas = document.querySelector('input[name="reglas"]:checked').value;

const genPassword = (letters, length) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * letters.length);
    password += letters.charAt(random);
  }
  return password;
};

const checkRules = (radReglas, checkbox, rule, a, b) => {
  if (checkbox.checked) {
    if (radReglas !== "simple") {
      return rule;
    } else {
      retorno = Array.from(rule).filter((x) => x !== a && x !== b).join("");
      return retorno;
    }
  }
};

const generateMixDatos = () => {
  let characters = "";
  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = ".:,;-+*/¡!<>¿?=()&%$#@°";
  const numbers = "0123456789";

  const longitud = document.querySelector(
    'input[name="longitud"]:checked'
  ).value;

  const radReglas = document.querySelector('input[name="reglas"]:checked').value;

  characters += checkRules(radReglas, caracteresMayusculas, upperCaseCharacters, "O", "I");
  characters += checkRules(radReglas, caracteresMinusculas, lowerCaseCharacters, "o", "l");
  characters += checkRules(radReglas, caracteresNumeros, numbers, "0", "1");

  /*
  if (caracteresMayusculas.checked) {
    if (reglas !== "simple") {
      characters += upperCaseCharacters;
    } else {
      characters += Array.from(upperCaseCharacters).filter((x) => x !== "O" || x !== "I").join("");
    }
  }
  if (caracteresMinusculas.checked) {
    if (reglas !== "simple") {
      characters += lowerCaseCharacters;
    } else {
      characters += Array.from(lowerCaseCharacters).filter((x) => x !== "o" || x !== "l").join("");
    }
  }
  if (caracteresNumeros.checked) {
    if (reglas !== "simple") {
      characters += numbers;
    } else {
      characters += Array.from(numbers).filter((x) => x !== "0" || x !== "1").join("");
    }
  }*/

  if (caracteresSimbolos.checked) characters += symbols;

  passwordGenerated.innerText = genPassword(characters, longitud);
};

function ShowHideDiv(selected) {
  if (selected === "letras") {
    caracteresNumeros.checked = false;
    caracteresSimbolos.checked = false;
    caracteresNumeros.disabled = true;
    caracteresSimbolos.disabled = true;
  }

  if (selected === "simple") {
    caracteresNumeros.checked = true;
    caracteresMayusculas.checked = true;
    caracteresMinusculas.checked = true;
    caracteresSimbolos.checked = false;
    caracteresSimbolos.disabled = true;
  }

  if (selected === "todos") {
    caracteresNumeros.checked = true;
    caracteresSimbolos.checked = true;
    caracteresMayusculas.checked = true;
    caracteresMinusculas.checked = true;
    caracteresNumeros.disabled = false;
    caracteresSimbolos.disabled = false;
  }

  generateMixDatos();
}

generatorButton.addEventListener("click", () => {
  generateMixDatos();
});

