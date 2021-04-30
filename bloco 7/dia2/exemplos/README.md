# Uso de Objetos 

* Adicionando propriedades a um objeto:
  * Pode ser através de adicioná-lo ao objeto
  * Ou por meio de objeto.propriedade ou objeto['NomeDaPropriedade'] , como mostrado a seguir:

    ```
    custumer.lastName = 'Faria' 

    customer['favoriteColor'] = 'blue';
    ```

> ## Uso de `Object.keys`

* Por meio deste é possivel ter um array com os nomes das chaves de um obejto


> ## Uso de `Object.values`
* Segue a mesma logica do keys, porem retorna seus valores, além de poupar bastante tempo
```
const student = {
  key: value
};
```
> Uso de Object.values().includes()
* retorna true ou false 
> ## Uso de `Object.entries`
* Em outras palavras, é a união do values e do keys. Ele é utilizado para retornar um array que armazena um array com apenas dois dados, o value e o key
```
EX:
const obj = { 
  0: 'a', 
  1: 'b', 
  2: 'c' 
  };

console.log(Object.entries(obj)); 

// retorna: [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
```
> ## Uso de `Object.assign`
* Usado para juntar varios objetos em um unico, sendo necessario, no minimo, dois parametros, um sendo o destino e o outro o objeto a ser juntado
```
EX:
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  child: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */
```

* notar que ocorre mudança em algumas variaveis, devido a substituição de valores

> ### 🚨  Cuidado  🚨
* Ao se declarar variaveis, mesmo que constantes, seguindo a seguinte estrutura, na variavel esta sendo armazenada o próprio objeto destino e não a ação de juntar
```
const clone = Object.assign(person, lastName);
```
* Isso ocorre pois se está sendo criado 'um outro caminho'
* Para se corrigir isso, deve ser passado como primeiro parametro um objeto vazio `{}`
```
EX:
const newPerson = Object.assign({},person,lastName);

// Apenas newPerson receberá os valores que foram juntados
```
