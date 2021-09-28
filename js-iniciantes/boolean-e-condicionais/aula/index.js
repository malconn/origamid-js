let possuiGraduacao = false;
let possuiDoutorado = true;

if(possuiGraduacao){
    console.log('É verdadeiro');

}else if(possuiDoutorado){

    console.log('Possui Doutorado');

}else{

    console.log(x);

}

let nome = '10kg' / 10;

if(nome){
    console.log(nome)
}else{
    console.log(nome);

    console.log('Nome não existe');
}

if(!possuiGraduacao){
    console.log('Não pssui Graduação');

}


// Como ver o typeof de forma rápido =
console.log(
    !!nome, //Converte para o contrário e depois trás para o initial já com typeof
    
    !!possuiDoutorado,//Converte para o contrário e depois trás para o initial já com typeof

    !!possuiGraduacao,//Converte para o contrário e depois trás para o initial já com typeof
)

if( ( 5 - 5 ) && ( 5 + 5 ) ){
    console.log('Verdadeiro');
} else{
    console.log('Falso');
}

let condicional = ( 5 - 10 ) && ( 5 + 5 );

if( condicional ){
    console.log('Verdadeiro');
} else{
    console.log('Falso');
}

let condicional2 = (5 - 5) || (5 + 5) || (10 - 2);

console.log(condicional2);


let corFavorita = 'Aul';

switch(corFavorita){
    case 'Azul':
        console.log('Olhe para o céu');
    break;
    case 'Amarelo':
        console.log('Olhe para o sol');
    break;
    case 'Verde':
        console.log('Olhe para a floresta');
    break;
    default:
        console.log('Feche os olhos');
}