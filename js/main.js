/*Aula 01*/

var nome = "Rennan Emanoel";
var idade = prompt("Qual é sua idade: ");
var frase = "Atiraram o pau no gato";


/*Mostrar Data*/

var d = new Date();
alert(d.getDate());


/*For*/

var cont;
for(cont= 0; cont <=5; cont++ ){
    alert(cont);
}
/* While */

var cont = 0;
while(cont <= 5){
    
console.log(cont);
cont++;
}

/*If */
/*alert(nome + " tem " + idade+" anos");*/

if(idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
} 


console.log(nome);
console.log(idade);

console.log(frase.toUpperCase());

/*Aula 02*/

/* Array */

var list = ["Maça", "Uva", "Melancia"];
list.push("Laranja");
list.pop();
console.log(list.length);
console.log(list.reverse());
console.log(list);
console.log(list.toString());
console.log(list.join(" - "));

/*Dicionario*/

var fruta = [{nome:"Uva", cor:"Roxo"}, {nome:"Maça", cor:"Vermelha"}]

console.log(fruta.nome);
alert(fruta[1].nome);


/*aula 03*/

function soma(n1, n2) {
    return(n1 + n2);
}
alert(soma(5,10));
alert(setReplace(" vai japão", "japão", "Italy"));

function setReplace(frase, nome, novo_nome) {
   return(frase.replace(nome, novo_nome));
}

function validaIdade (idade) {
    var validar;
    if(idade >= 18){
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade: ");
console.log(validaIdade(idade));

/*Aula 4*/

function buttom () {
    
    document.getElementById("vlw").innerHTML ="obrigado por clicar aqui burrão";

    console.log(document.getElementById("vlw"));
}
function redirecionar() {
    window.open("https://vagas.hunterco.com.br/");
}
function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
 }
 function voltar() {
     document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
 }

 function funcaoChange(elemento){
     console.log(elemento.value());
 }