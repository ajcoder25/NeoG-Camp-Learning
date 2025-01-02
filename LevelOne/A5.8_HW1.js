console.log('A5.8_HW1')
console.log('---- ---- ----')

console.log('Exercise 1')

let animal  = {
             name: 'Lion',
             averageWeight: 190,
             sound: 'Roar'
}


console.log('1.1')

console.log(animal.name)

console.log('---- ---- ----')
console.log('1.2')




console.log(animal.averageWeight)

console.log('---- ---- ----')

console.log('1.3')

console.log(animal.sound)

console.log('---- ---- ----')
console.log('1.4')

animal.averageWeight = 210
console.log('The Animal Object: ', animal)
console.log('---- ---- ----')

console.log('1.5')

animal.diet = 'Carnivore'

console.log('---- ---- ----')
console.log('1.6')

console.log('All properties of animal object: ')
for(property in animal){
  console.log(property + ': ' , animal[property])
}

console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')

console.log('2.1')


let movie = {
              title: 'Iception',
              director: 'Christopher Nolan'
}

movie.year = 2010

console.log(movie.year)
console.log('---- ---- ----')
console.log('2.2')

movie.duration = 154


console.log(movie.duration)

console.log('---- ---- ----')
console.log('2.3')

movie.duration = 148

console.log('Updated duration: ', movie.duration)

console.log('---- ---- ----')

console.log('2.4')

movie.year = movie.year + 1

console.log('Updated year: ', ( movie.year))

console.log('---- ---- ----')
console.log('2.5')

console.log('All properties of movie object: ')

for(let movies in movie){
             console.log(movies + ': ' + movie[movies])
}