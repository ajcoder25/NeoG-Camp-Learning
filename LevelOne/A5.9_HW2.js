console.log("A5.9_HW2")
console.log('---- ---- ----')
console.log("Exercise 1")
console.log('1.1')

function printBookDetails(book){

  if(book.page > 500){

    console.log('The book,' + book.title + ', is long')
  }
  else{

    console.log(book.title + ' is not long')
  }
  console.log('---- ---- ----')
  console.log('1.2')

  book.cover = 'Hard Cover'
  console.log('The book,' + book.title + ' has ' + book.cover +'.')

  console.log('---- ---- ----')
  console.log('1.3')

  if(book.cover === 'Hard Cover' && book.page > 300){

      console.log('The book,' + book.title + ' is heavy.')
  }
  else{
       'The book,' + book.title + ' is not heavy.'
  }
  
}



let books = {
  title: 'The Great Gatsby',
   author: 'F.Scott Fitzgerald',
   genre: 'Fiction,classic',
   page : 650
}
printBookDetails(books)



console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')
console.log('2.1')


function printWeatherData(weatherData){

  console.log('Weather Data:', weatherData)

  console.log('---- ---- ----')
  console.log('2.2')
  

  let newWeatherData = {...weatherData}
  console.log('Are newWeatherData and weatherData the same object?', newWeatherData === weatherData)
  console.log('---- ---- ----')
  console.log('2.3')

  if(newWeatherData.humidity > 65){
     newWeatherData.weatherCondition = 'Cloudy'
 
  }
   console.log(newWeatherData)
}

let weatherData = {
  city : 'Tokyo',
  temperature: '28°C',
  humidity: 70,
  weatherCondition: 'Partly Cloudy'
}


printWeatherData(weatherData)


console.log('---- ---- ----')
console.log('Exercise 3')
console.log('---- ---- ----')


function takestwobooks(book1, book2){

  console.log('3.1')

  if(book1.page > book2.page){
    return true
  }

  else {
      return false
  }


}


let book1title = {
            title: 'To Kill a Mockingbird',
            page: 281,
}

let book2title = {
              title: '1984',
              page : 328
}


// takestwobooks(book1title, book2title)

console.log('Does' + " 'To Kill a Mockingbird' " + ' have more pages than ' +" '1984'" +'?', takestwobooks(book1title, book2title))

console.log('---- ---- ----')
console.log('Exercise 4')
console.log('---- ---- ----')
console.log('4.1')

function compareBooks(book1, book2){

  console.log('Books 2:', book1)
  console.log('Book 3: ', book2)


  console.log('---- ---- ----')

  console.log('4.2')


  if(book1.numberOfPages > book2.numberOfPages){
    console.log(book1.title + ' is thicker than ' + book2.title + '.')
  }

  else{
      console.log(book2.title + ' is thicker than ' + book1.title)
  }

  console.log('---- ---- ----')
  console.log('4.3')

  if(book1.author === book2.author){
    console.log('Both books are written by same author,' + book1.author)
  }
  else{
    console.log('The books are written by different authors')
  }
}


let book1 = {
          title: 'Animal Farm',
          author: 'George orwell',
          numberofPages: 140
}

let book2 = {
       title: 'Coming up for Air',
       author : 'George orwell',
       numberOfPages: 210


  
}





compareBooks(book1, book2)