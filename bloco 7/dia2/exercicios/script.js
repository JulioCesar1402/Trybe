// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       margherita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const arrayOfOrderAll = Object.entries(order);
//   const keys = Object.keys(order);
//   const value = Object.values(order);
//   console.log(` Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${order.address.street}, N°${order.address.number}, AP:${order.address.apartment}`)






//   // for (let i = 0; i < 2; i += 1) {
//   //   console.log(order[keys[i]])
//   // }

// }

// customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const order2 = {
//     firstName: 'Luiz',
//     lastName: "Silva",
//     order: {
//       or1: "muzzarella",
//       or2: "calabresa"
//     },
//     drink: "Coca-Cola Zero",
//     price: "R$ 50,00"
//   }
//   console.log(`Olá ${order2.firstName}, o total do seu pedido de ${order2.order.or1}, ${order2.order.or2} e ${order2.drink} é ${order2.price}`)
// }

// orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addEntries(lesson, key, value) {
  lesson[key] = value;

}
addEntries(lesson2, 'turno', 'manhã');
// console.table(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// const listOfKeys = (objectName) => {
//   const keys = Object.keys(objectName);
//   console.table(keys);
// }

// listOfKeys(lesson1);



// Crie uma função para mostrar o tamanho de um objeto.
// const sizeOfObject = (objectName) => {
//   const size = Object.keys(objectName).length;
//   console.log(`O objeto inserito tem um tamanho igual à ${size}`);
// }

// sizeOfObject(lesson2);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// const valueOfObject = (objectName) => {
//   const value = Object.values(objectName);
//   console.table(value);
// }
// valueOfObject(lesson3)

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons =  {
  lesson1: {},
  lesson2: {},
  lesson3: {}
}

allLessons.lesson1 = Object.assign(lesson1);
allLessons.lesson2 = Object.assign(lesson2);
allLessons.lesson3 = Object.assign(lesson3);

// console.table(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// const totalOfStudents = () => {
//   const students1 = allLessons.lesson1.numeroEstudantes;
//   const students2 = allLessons.lesson2.numeroEstudantes;
//   const students3 = allLessons.lesson3.numeroEstudantes;

//   console.log(`O total é ${students1 + students2 + students3}`);
// }
// totalOfStudents();


// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// const getValueByNumber = (lesson, position) => {
//   const key = Object.keys(lesson)
//   const returnedKey = lesson[key[position]];
//   console.log(returnedKey);
// }
// getValueByNumber(lesson1, 0);

// todo: Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// const verifyPair = (lesson, key, value) => {
//   const arrayTest = [key, value];
//   const entrie = Object.entries(lesson);
//   for(let i = 0; i < entrie.length; i += 1) {
//     if (entrie[i] === arrayTest){
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// // console.log(
//   verifyPair(lesson3, 'turno', 'noite')
//   // );
// // Output: true,

// // console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

// const studentsForClass = (event) => {
//   let students = 0;
//   for (let i = 0; i < Object.keys(allLessons).length; i += 1){
//     const key = Object.keys(allLessons);
//     console.log(key[i]);
//     if ( allLessons[key[i]].materia === event) {
//       students += allLessons[key[i]].numeroEstudantes
//     }
// }
//   console.log(`O total é ${students} que estudam matematica`);
// }
// studentsForClass('Matemática');

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

// const form = (lesson, teacher) => {
//   let classes = '';
//   let students = 0;
//   let teacherName = '';
//   for (let i = 0; i < Object.keys(lesson).length; i += 1){
//     const key = Object.keys(lesson);
//     // console.log(key[i]);
//     if ( lesson[key[i]].professor === teacher) {
//       teacherName = lesson[key[i]].professor
//       let classList = lesson[key[i]].materia
//       let numberOfStudents = lesson[key[i]].numeroEstudantes
//       students += numberOfStudents;
//       classes += classList;
//       classes += ' ';
      
//     }
//   }
//   console.log(`  professor: ${teacherName},
//    aulas: ${classes},
//    estudantes: ${students} `); 
// }
// form(allLessons, 'Maria Clara');