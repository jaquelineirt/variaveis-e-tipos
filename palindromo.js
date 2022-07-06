//solução 1
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    /*trabalando que o método existe*/

    return string.split("").reverse().join("") === string
}

//invocar a função

console.log(verificaPalindromo("ovo"));

//solução 2
//omo
//012
//abbbba
//012345

function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    //índice inicia no zero mas o length no 1
    for(let i = 0; i< string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));