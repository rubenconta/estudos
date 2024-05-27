/*
APS da Disciplina Programação JavaScript
Unicarioca
Turma: 123N
Nome: Ruben Costa Tavares de Oliveira
Matricula: 2015101516
*/
 
//Verifica se um numero é ou não Primo
function isPrime(num){
    if(num<2){
        return false;
    }//if
    for(let i=num-1; i>=2; i--){
        let resto = num % i;
        if(resto == 0){
            return false;
        }//if
    }//for
    return true;
}//function isPrime(num)

//monta os 10 maiores números primos possíveis para o número informado
function findLargestPrimes(num){
    let contador = 0;
    for(let k=num; k>=2; k--){
        let ehPrimo = isPrime(k);
        if(ehPrimo){
            console.log("O número ["+ k +"] é primo!")
            contador++;
            if(contador==10){
                console.log("O programa foi concluído com sucesso!");
                return;                
            }//if
        }//if
    }//for
}//function findLargestPrimes(num)

//Número a ser informado pelo usuário
let numero = parseInt(prompt("Digite um número: "))

//exibe a lista dos 10 maiores números primos possíveis para o número informado
findLargestPrimes(numero);