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



//OPTIONS
// const longitud12Valor = longitud12Caracteres.checked;
// const longitud9Valor = longitud9Caracteres.checked;
// const longitud6Valor = longitud6Caracteres.checked;
    
// const reglasSoloLetrasValor = reglasSoloLetras.checked;
// const reglasLecturaSimpleValor = reglasLecturaSimple.checked;
// const reglasTodosCaracteresValor = reglasTodosCaracteres.checked;

// const caracteresMayusculasValor = caracteresMayusculas.checked;
// const caracteresMinusculasValor = caracteresMinusculas.checked;
// const caracteresSimbolosValor = caracteresSimbolos.checked;




//funciones auxiliares
//LONGITUD AUXILIARES


//REGLAS AUXILIARES


//CARACTERES AUXILIARES
// const charactersChosen = () =>{

// }



const seleccionUsuario = document.getElementsByTagName('input');

const loQueVaUsuario = (seleccionUsuario) =>{
    return seleccionUsuario.value === checked;
}
//¿Porque no recibe los datos de los inputs?
//¿Como utilizo los datos recibidos de los inputs?



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//esta la llenaria con los datos obtenidos de reglas y de caracteres




let characters = '';



//FUNCTIONS********************
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //esta funcion funciona con la longitud en el parametro y con un array "characters" conformado por lo que el usuario eligió en la seccion de reglas y en la seccion de caracteres. 
const genPassword = (length) => {
  

    let charactersLength = characters.length;
    let password = '';
    for (let i = 0; i <= length; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return password;
}

console.log(genPassword(11));
console.log(genPassword(8));
console.log(genPassword(5));



passwordForm.addEventListener('submit', e =>{
    e.preventDefault()

    


    // const passwordCreated = genPassword2(longitud12Valor, longitud9Valor, longitud6Valor, reglasSoloLetrasValor, reglasLecturaSimpleValor, reglasTodosCaracteresValor, caracteresMayusculasValor, caracteresMinusculasValor, caracteresSimbolosValor) 

    
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


generatorButton.addEventListener('click', genPassword())


//genPassword()