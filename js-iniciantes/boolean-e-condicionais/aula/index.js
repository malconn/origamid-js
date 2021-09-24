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