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
const copyButton = document.getElementById('copy-button');

//INPUT PASSWORD
const inputPassword = document.getElementById('input-password');
const password = document.getElementById('input-password').value;

//FUNCTIONS********************
const characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';


const genPassword = (length) => {
    let charactersLength = characters.length;
    let password = '';
    for (let i = 0; i <= length; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return password;
}

console.log(genPassword(12));
console.log(genPassword(9));
console.log(genPassword(6));




//LONGITUD
/*const longitud12Caracteres{
if (longitud12Caracteres.value === checked){
    return create array. length [11]
    }
}
*/

//REGLAS



//CARACTERES


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


generatorButton.addEventListener('click', genPassword())


//genPassword()