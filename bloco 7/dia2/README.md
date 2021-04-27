# Uso de Objetos 

* Adicionando propriedades a um objeto:
  * Pode ser através de adicioná-lo ao objeto
  * Ou por meio de objeto.propriedade ou objeto['NomeDaPropriedade'] , como mostrado a seguir:

    ```
    custumer.lastName = 'Faria' 

    customer['favoriteColor'] = 'blue';
    ```

## Uso de `Object.keys`

* Por meio deste é possivel ter um array com os nomes das chaves de um obejto


## Uso de `Object.values`
* Segue a mesma logica do keys, porem retorna seus valores, além de poupar bastante tempo
```
const student = {
  key: value
};
```

## Uso de `Object.entries`
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
