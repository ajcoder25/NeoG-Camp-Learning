console.log('A5.9_CW')
console.log('---- ---- ----')

console.log('Exercise 1')
console.log('1.1')

let citizen = {
          name: 'Sandeep',
          age: 65
}

if(citizen.age >= 60){
  console.log(citizen.name + ' is a senior citizen')
}
else{
          console.log(citizen.name + ' is not a senior citizen.')
}

console.log('---- ---- ----')
console.log('1.2')

citizen.bp = 'Normal'

console.log('---- ---- ----')
console.log('1.3')

if(citizen.age >= 60 && citizen.bp == 'Normal'){
          console.log('Fit to travel')
}
else{
          console.log('Not fit to travel')
}

console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')


let person = {
           name: 'Rajesh',
           age : 36,
           isBirthday: true
}

function incrementAge(person){
          console.log('2.1')
          console.log('Person: ', person)

          console.log('---- ---- ----')
          console.log('2.2')

          const newPerson = {...person}
          console.log('Is newPerson same as person?', newPerson === person)

          console.log('---- ---- ----')
          console.log('2.3')

          if(newPerson.isBirthday){
                    newPerson.age = newPerson.age + 1
          }

          console.log('New Person: ', newPerson)
          
          
}


incrementAge(person)

console.log("---- ---- ----")
console.log('Exercise 3')
console.log('---- ---- ----')

let employee1 = {
                name: 'Amit',
                worked: 160
}

let employee2 = {
                 name: 'Suresh',
                 worked: 180
}


function compare (employee1, employee2){

          if(employee1.worked > employee2.worked ){
                 return   true
          }

          else{
                    return false
          }
          
          
}

console.log('Has Amit worked more than suresh? ',compare(employee1, employee2))