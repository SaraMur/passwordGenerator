

//PASSWORD TEXT
const passwordText = document.getElementById('password-text');

//INPUT FORM
const passwordForm = document.getElementById('password-form');





//const seleccionUsuario = document.getElementsByTagName('input');




//FUNCTIONS********************
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //esta funcion funciona con la longitud en el parametro y con un array "characters" conformado por lo que el usuario eligió en la seccion de reglas y en la seccion de caracteres. 



const longitud12Caracteres = document.getElementById('longitud-12-caracteres');
const longitud9Caracteres = document.getElementById('longitud-9-caracteres');
const longitud6Caracteres = document.getElementById('longitud-6-caracteres');


const caracteresMayusculas = document.getElementById('caracteres-mayusculas');
const caracteresMinusculas = document.getElementById('caracteres-minusculas');

const caracteresNumeros = document.getElementById('caracteres-numeros');

const caracteresSimbolos = document.getElementById('caracteres-simbolos');


const generatorButton = document.getElementById('generator-button');


        
const genPassword = (letters, length) => {
            
    let password = '';

    for (let i = 0; i <= length; i++) {
       let random = Math.floor(Math.random() * letters.length);
        password += letters.charAt(random);
    }
    return password;
};




const generateMixDatos = () => {
    
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
 //   let lettersLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    
    const symbols = ".:,;-+*/¡!<>¿?=()&%$#@°";
    const numbers = "0123456789";
    
    
    if (longitud12Caracteres.checked)letters.length = 11;
//    if (longitud9Caracteres.checked) letters.length = 8;
//    if (longitud6Caracteres.checked) letters.length = 5;
    
    let length = letters.length;
    
//    if (caracteresMayusculas.checked) lettersLowerCase = lettersLowerCase.toUpperCase;
//    if (caracteresMinusculas.checked) lettersLowerCase = lettersLowerCase;


    if (caracteresNumeros.checked) letters += numbers;
    if (caracteresSimbolos.checked) letters += symbols;


    genPassword.innerText = genPassword (letters, length);

};

generatorButton.addEventListener('click', ()=>{
    generateMixDatos();
});




// const input= document.getElementsByTagName(input)

// input.addEventListener('change', (e) =>{
//     console.log(elem);

//     genPassword(e.target.value);
    
// });    





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