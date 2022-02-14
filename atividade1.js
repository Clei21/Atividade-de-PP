//Detectar se é um número par ou impar
exibirTipo(10);
function exibirTipo(Detectar) {
    for (var i = 0; i <= Detectar; i++) {
        if (i % 2 === 0)
        console.log (i,'par');
        else
        console.log (i,'impar');
    
    }
}