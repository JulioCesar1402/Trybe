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