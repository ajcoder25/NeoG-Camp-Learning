console.log('A5.9_HW1')
console.log('---- ---- ----')
console.log('Exercise 1')
console.log('---- ---- ----')

let citizen = {
   name: 'Ajay',
   age: 72,
   city: 'Indore'
}


console.log('1.1')


if(citizen.age > 60){

  console.log(citizen.name + ' is the senior citizen ')

}

   else{
        console.log(citizen.name + ' is not the senior citizen')
   }


console.log('---- ---- ----')
console.log('1.2')


citizen.sugarLevel = 'Normal'
console.log('Sugar level for '+ citizen.name +' ' +'is ' +  citizen.sugarLevel)


console.log('---- ---- ----')
console.log('1.3')

if(citizen.age > 60 && citizen.sugarLevel === 'Normal'){
   console.log(citizen.name + ' is fit to travel')
}
else{
     citizen.name + ' is not fit to travel'
}

console.log('---- ---- ----')
console.log('Exerise 2')
console.log('---- ---- ----')
console.log('2.1')



let movie = {
          title: ' MI 7',
          duration: 150,
          isReleased: false
}

function releaseMovie(movie){

   console.log('Movie:', movie)

   console.log('---- ---- ----')
   console.log('2.2')
   let newMovie = { ...movie }; // Use spread operator for shallow copy
     let checkIsMovieSame = newMovie === movie; // Check reference equality
     console.log('Is newMovie same as movie? ' + checkIsMovieSame);

   console.log('---- ---- ----')
   console.log('2.3')

  if(newMovie.duration > 120){
     isReleased = true

     console.log('New movie: ', newMovie)
  }
   
   
   }




 releaseMovie( movie)

console.log('---- ---- ---- ')
console.log('Exercise 3')
console.log('---- ---- ----')


let movie1 = {
              title: 'The Lost City',
              duration: 120,
              
}

let movie2 = {
            title: 'Murder Mystery 2',
             duration: 110
}

function checkmovie(movie1, movie2){

   if(movie1.duration > movie2.duration){

      return true
   }
   return false
}


console.log('Is ' + "'The Lost City'" + ' longer than' + "'Murder Mystery 2'" + '? ' + checkmovie(movie1, movie2))

console.log('---- ---- ----')

console.log('Exercise 4')

console.log('---- ---- ----')
console.log('4.1')


let student = {
      name: 'Priya',
      age: 14, 
      marks: 45
}




function printStudentDetails(student) {
  // Step 4.1: Print the student object
 
  console.log("Student: ", student);

  // Step 4.2: Check if marks are less than 60
  if (student.marks < 60) {
    student.isTopPerformer = false; // Add isTopPerformer property
    console.log("---- ---- ----");
    console.log("4.2");
    console.log("Is the student a top performer? " + student.isTopPerformer);
  }

  // Step 4.3: Check if marks are less than 60 and >= 40
  if (student.marks < 60 && student.marks >= 40) {
    student.grade = "D"; // Add grade property
    console.log("---- ---- ----");
    console.log("4.3");
    console.log("Student Data: ", student);
  }
}




// Call the function
printStudentDetails(student);








