# Teste unitários em JS
* Utilizado com a finalidade de verificar o desempenho e o com com é o funcionamento do produto final;
* Uma metodologia que visa a qualidade, reduzindo a quantidade de defeitos, aumentodo a qualidade do sistema

> ## Dimenses de qualidade a serem consideradas:
1. Confiança: resistencia a falhas na execução;
1. Funcionalidade: segue os requisitos;
1. Performance: tempo de resposta adequado e aceitável;

> ### Teste unitários, onde vivem e o que comem?
* Tem como principal funcionalidade, garantir que mesmo que ocorra uma modificação na linha do código, os mesmos comandos continuaram a funcionar

> ### Okay, mas por que raios eu devo utilizá-lo?
* Apesar de mais trabalhoso, fazer testes para verificar o andamento do código previne mais esforço fisico para entender e corrigir os futuros erros que estão por vir
* LEMBRE-SE QUE O SEUS CÓDIGOS PODERAM SER RODAR CENTENAS DE FUNÇÕES QUE O TORNARÁ DIFICIL DE LER, você não quer que apareçam erros quer?

> ### Mãos na massa

* NodeJs Assert - uma expressão booleana que sempre retorna true, então só será apresentado um feedback, caso a expressão retorne false
  * Como chamá-la:
  ``` 
  const assert = require('assert');
  ```
  * Metodos de verificação:
    * assert.strictEqual()
    ```
    EX:
    
    assert.strictEqual(expected, 5, 'Dez dividido por dois é igual a cinco');

    ```
    * assert.deepStrictEqual()
    * assert.notStrictEqual()
    * assert.ok()
    * assert.fail()

> Os três passos para o sucesso
1. Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior, você só precisaria declarar a função para passar o teste.
1. Refatorar o código para que ele esteja bem escrito e fácil de se entender. O pulo do gato nessa etapa é que você tem um teste já implementado que irá falhar caso você quebre algo ao refatorar o seu código.
1. Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo. Volte a etapa 1 e repita esse processo até que todas as funcionalidades da sua função sejam implementadas.

>>> throw Error() - usado para passar erros esperados
- sendo necessario utilizar

```
assert.thrown(() => {
  summmationOf('xablau') // uma função qualquer que possui ou leva a um erro, ou seja, 
  que possui throw Error()
})
```