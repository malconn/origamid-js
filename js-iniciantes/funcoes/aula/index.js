function areaQuadrado(lado){
    
    return lado * lado;
}

console.log(areaQuadrado(1));



function pi(){
    return 3.14;
}

let total = 5 * pi();


console.log(total);


function imc(peso,altura){
    let imc = peso / (altura ** 2);

    return imc;
}

console.log(imc(80,1.75));


function corFavorita(cor){
    if(cor === 'Azul'){
        return 'isso é azul';
    }
    else if(cor === 'Vermelho'){
        return 'isso é vermelho';
    }
    else{
        return 'Não tem cor nenhuma';
    }
}

console.log(corFavorita('Vermelho'))


addEventListener('click',()=>{
    console.log('clicou')
});

function imc2(peso,altura){

    let imc = peso / (altura ** 2);

    return imc;

}

console.log(imc2(20, 1.80));



function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Preencha um número';
    }
    else if(idade >= 60){
        return true;
    }else{
        return false;
    }
}

console.log(terceiraIdade('60'));


function paisesVisitar(paisesVisitados){
    const totalPaises = 193;
    const total = totalPaises - paisesVisitados;
    return `${'Faltam visitar'} ${total} ${'países.'}`;
}

console.log( paisesVisitar(20) );