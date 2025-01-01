

console.log('A5.8_CW')
console.log('---- ---- ----')
console.log('Exercise 1')


const car ={

     brand: 'Toyota',
     model: 'Corolla'
      
}


console.log('1.1')

console.log(car.brand)

console.log('---- ---- ----')
console.log('1.2')
console.log(car.model)


console.log('---- ---- ----')

console.log('1.3')


car.brand = 'Honda'

console.log('---- ---- ----')
console.log('1.4')

console.log('Updated Car: ', car)

console.log('---- ---- ----')
console.log('1.5')


// How to add two properties to the object 


car.year = 2022
car.color = 'Blue'

console.log('---- ---- ----')
console.log('1.6')

// you can acess the property by object[property]



  console.log('All properties of car object: ')

for(property in car){
    console.log(property + ': ' + car[property])
}

console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')

const citizen = {
                name:  'Ramesh Kumar',
                age : 65,
                Occupation: 'Retired'
}


console.log('2.1')

citizen.age = 68

console.log('Age: ', citizen.age)

console.log('---- ---- ----')
console.log('2.2')

citizen.age = 68 + 2

console.log('Updated Age: ', citizen.age)

console.log('---- ---- ----')
console.log('2.3')

citizen.city = 'Delhi'

for(property in citizen){
     console.log(property +': ' + citizen[property])
}
