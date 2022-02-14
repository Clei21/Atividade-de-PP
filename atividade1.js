//Detectar se é um número par ou impar

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function showTypeOfNumber(number){
    if(number %2 == 0){
        console.log(number + " é um número par")
    } else {
        console.log(number + " é um número ímpar")
    }
}

rl.question('Digite um número válido ou digite X para sair: ', function (number) {
    if(number === 'x' || number === 'X'){
        rl.close();
    }

    showTypeOfNumber(number);

    rl.close();
});

rl.on('close', function () {
    console.log('\nAté mais !!!');
    process.exit(0);
});