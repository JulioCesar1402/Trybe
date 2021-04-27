// const customer = {
//   firstName: 'Roberto',
//   //lastName: 'Faria',
//   age: 22,
//   jog: 'Teacher'
// }

// console.log(customer);

// customer.lastName = 'faria';
// console.log(customer);

// customer['favoriteColor'] = 'blue';
// console.log(customer);

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

// function func(param1, param2, param3) {
//   param1 = {}
//   param1[param2] = param3

//   return param1;
// }

// console.log(func("receita", "umaColher", "açucar"))

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };


// console.log(Object.keys(student1));


// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(index in arrayOfSkills) {
//     console.log(`${arrayOfSkills[index]}, Nivel: ${student[arrayOfSkills[index]]}`);
//   }
// };
// console.log('Estudante 1');
// listSkills(student1);
// console.log('Estudante 2');
// listSkills(student2);


// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// }

// const listSkillsWithValues = (student) => Object.values(student);


// // Sem Object.values
// console.log(listSkillsWithFor(student));
// console.log('-----------------------------------------');
// // Com Object.values
// console.log(listSkillsWithValues(student));


const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};