console.log('A5.8_HW2')
console.log('---- ---- ----')
console.log('Exercise 1')
console.log('1.1')


let recipe = {
           name: 'Pasta carbonara',
           cuisine: 'Italian'
           
}

console.log(recipe.name)

console.log('---- ---- ----')
console.log('1.2')
console.log(recipe.cuisine)

console.log('---- ---- ----')

console.log('1.3')



recipe.name = 'Bell pepper Pizza'

console.log('Recipe: ' , recipe)
console.log('')

console.log('---- ---- ----')
console.log('1.4')

recipe.difficulty = 'Intermediate'

console.log(recipe.difficulty)

console.log('---- ---- ---- ')
console.log('1.5')

console.log('All properties of recipe:')
for(let recipes in recipe){

           console.log(recipes + ': ' + recipe[recipes])
}


console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')

console.log('2.1')
let laptop = {
               model: 'Xps 15',
               isTouchScreen: true,
               screenSize: 15.6
}

laptop.brand = 'Dell'

console.log(laptop.brand)
console.log('---- ---- -----')
console.log('2.2')

laptop.processor = 'Intel Core i7'


console.log(laptop.processor)

console.log('---- ---- ----')
console.log('2.3')

laptop.screenSize = 15.4

console.log('Updated screen size: ',laptop.screenSize)

console.log('---- ---- ----')
console.log('2.4')


console.log('All properties of laptop: ')
for(let laptops in laptop){
           console.log(laptops + ': ' + laptop[laptops])
}