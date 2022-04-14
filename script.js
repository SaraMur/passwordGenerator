//HTML ELEMENTS
//INPUTS DE LONGITUD
const longitud12Caracteres = document.getElementById('longitud-12-caracteres');
const longitud9Caracteres = document.getElementById('longitud-9-caracteres');
const longitud6Caracteres = document.getElementById('longitud-6-caracteres');



//INPUTS DE REGLAS
const reglasSoloLetras = document.getElementById('reglas-solo-letras');
const reglasLecturaSimple = document.getElementById('reglas-lectura-simple');
const reglasTodosCaracteres = document.getElementById('reglas-todos-caracteres');





//INPUTS DE CARACTERES
const caracteresMayusculas = document.getElementById('caracteres-mayusculas');
const caracteresMinusculas = document.getElementById('caracteres-minusculas');
const caracteresNumeros = document.getElementById('caracteres-numeros');
const caracteresSimbolos = document.getElementById('caracteres-simbolos');




//BUTTONS
const generatorButton = document.getElementById('generator-button');
//const copyButton = document.getElementById('copy-button');

//PASSWORD TEXT
const passwordText = document.getElementById('password-text');

//INPUT FORM
const passwordForm = document.getElementById('password-form');





const seleccionUsuario = document.getElementsByTagName('input');

const loQueVaUsuario = (seleccionUsuario) =>{
    return seleccionUsuario.value === checked;
}
//¿Porque no recibe los datos de los inputs?



//FUNCTIONS********************
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //esta funcion funciona con la longitud en el parametro y con un array "characters" conformado por lo que el usuario eligió en la seccion de reglas y en la seccion de caracteres. 

let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const genPassword = (characters, length) => {
  

    let charactersLength = characters.length;
    let password = '';
    for (let i = 0; i <= length; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return password;
};

const generateMixDatos = () => {

  
    let length = parseInt(inputLength.value);

    const symbols = ".:,;-+*/¡!<>¿?=()&%$#@°"
    const numbers = "0123456789";

    if (caracteresNumeros.checked) characters += numbers;
    if (caracteresSimbolos.checked) characters += symbols;

    genPassword.innerText /*donde esta innerText?*/ = genPassword (characters, length);

};





passwordForm.addEventListener('submit', e =>{
    e.preventDefault()

    
    const genPassword = (characters, length);

    
});    





//BOTONES
/*const copyPassword = () => {
    let copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}

*/

//const buttonGeneratePassword = () =>{
    
//}


//generatorButton.addEventListener('click', genPassword())


//genPassword()