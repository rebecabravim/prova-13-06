//NUMEROS PRIMOS----------------------------------------------------------------------------------------

function verificarNumeroPrimo(numero) {
    // verifica se número é maior ou igual a 1. Se a condição for satisfeita, retorna falso.
    if (numero <= 1) {
        return false;
    }



    /* loop, onde começa divindo o numero por 2, e vai divindo até a raiz quadrada do número 
    (o resto da raiz quadrada exata é zero), pois número primos não possuem raiz quadrada exata.
    Se a condição do loop for satisfeita, então o número não é primo e retorna falso.
    */
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    //caso contrário, é número primo
    return true;
}


//Lista números primos
function listarNumerosPrimos() {
    const limite = 1000;
    const numerosPrimos = [];

    for (let i = 2; i <= limite; i++) {
        if (verificarNumeroPrimo(i)) {
            numerosPrimos.push(i);
        }
    }

    return numerosPrimos;
}


//exemplo de uso
const primos = listarNumerosPrimos();
console.log("Números primos entre 1 e 1000:");
console.log(primos);






//VERIFICAR SENHA-----------------------------------------------------------------------------------------

function verificarSenha(senha) {
    //verifica tamanho da senha menor que 8.
    if (senha.length < 8) {
        return "A senha deve ter pelo menos 8 caracteres.";
    }
    // verifica se senha tem pelo menos 1 caracter maiúsculo
    if (!/[A-Z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra maiúscula.";
    }

    // verifica se a senha tem pelo menos 1 caracter minúsculo
    if (!/[a-z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra minúscula.";
    }

    // verifica se senha tem um numero pelo menos
    if (!/[0-9]/.test(senha)) {
        return "A senha deve conter pelo menos um número.";
    }

    // se todas as condições forem satisfeitas, a senha vale.
    return "A senha é válida.";

}


// exemplo de uso(se alguma condição nao for satisfeita, me retornará a condição que está faltando para a senha ser válida)
const senhaExemplo = "abobrinhaquandonasce";
const resultado = verificarSenha(senhaExemplo);
console.log(resultado);






//FATORIAL----------------------------------------------------------------------------------------------
function calcularFatorial(numero) {
    // condiçao que se o numero for 0 ou 1, então o fatorial deles é 1.
    if (numero === 0 || numero === 1) {
        return 1;
    }

    //cria variável que começa em 1
    let fatorial = 1;
    //loop, que começa multiplicando a variável por 2, até multiplicar por ela mesmo.
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

// loop que começa em 1, até ser menor ou igual a 10.
for (let i = 1; i <= 10; i++) {
    const fatorial = calcularFatorial(i);
    console.log(`O fatorial de ${i} é ${fatorial}`);
}



//QUADRADO PERFEITO-----------------------------------------------------------------------------------
function verificarQuadradoPerfeito(numero) {
    //primeiro cria variável da raiz quadrada do numero com o Math.sqrt
    const raizQuadrada = Math.sqrt(numero);

    // verifica se raiz é inteira. Se raiz for quebrada, retorna falso.
    if (Number.isInteger(raizQuadrada)) {
        return true;
    } else {
        return false;
    }
}

// Exemplos de uso (vai retornar falso se raiz dor quebrada e verdadeiro se for exata)
console.log(verificarQuadradoPerfeito(1523));  
console.log(verificarQuadradoPerfeito(11000));  
console.log(verificarQuadradoPerfeito(16)); 



