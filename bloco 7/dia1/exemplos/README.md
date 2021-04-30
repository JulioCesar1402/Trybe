# Trybe
* exercicios Trybe
Um espaço para armazenar dos exercicios da trybe

### Uso de let, const, arrow functions, template literals e ternary oparator

* Independente de como for atribuida a variavel, não é possivel chamá-la fora a função

* O uso do var pode causar em fasamento do escolpo e por isso foi criado o let - 05:37

* const é um valor constante, não podendo ser mudado por um for

* É possivel alterar a const de um objeto se for atravez de sua propriedade
Ex: objeto: 'const estudante = {}'
    propriedade: 'estudante.idade = 24'


* Sempre use const, a menos que sinta necessidade de um let

### var pode ser sobrescrito sem gerar erros!
* em contra partida, se substituir o var por um let ou por const irar aparecer um erro

***
## O uso uso de const e let
* diferente do let, a const não pode ter seu valor reatribuido 

ex:

const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // retorna erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // retorna a alteração "Facial recognition"

***
* Quando se trata de objetos e de arrays, uma const pode ter seus valores reatribuidos 

Seja através de uma atribuição:

userInfo.name = "João"

Seja através de um push: 

technologies.push('React');

***
* Portanto é recomendado que se use const sempre que possivel e que se evite o uso de var

***

# Nova forma de concatenar strings

* Deixar console.log('Hello' + ' ' + myName + '!');
* Utilizar console.log(``Welcome ${myName}!``);
* não esquecer de usar `` no lugar de '' 
* e, por fim, não é mais necessario o sudo de \n para quebrar linha

# Arrow functions 
* Recomendada principalmente para momentos em que não sera necessario reutilizar uma função

* Criar uma função da seguinte forma é equivalente a uma função 'convencional' - 02:07

  * const printName = function () {}
* Mas, também tem um outro jeito, no caso, com a arrow: 

  * const printName = () => {}
  * const soma = (num1, num2) => num1 + num2;

## botando em pratica - 04:46
* quando for usar um objeto, colorque-o entre "()"

# Ternary operator

* estrutura: x ? y : z;
  * x é a condição que será avaliada como verdadeira ou falsa
  * y é o retorno se for verdadeira
  * z é o retorno se for falsa
* Um bom substituto para if/else ou switch caso seja questão de verdadeiro ou false. Agora se necessitar de mais verificações/condições ele não será muito util, pois dificultará na leitura, indo contra o seu intuito de uso e pode ser que não funcione adequadamente!