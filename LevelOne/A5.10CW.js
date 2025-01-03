console.log('A5.10_CW')
console.log('---- ---- ----')
console.log('Exercise 1')
console.log('1.1')

//

const studentsData = [

  {
      name: 'Rahul',
      rollNo: '101',
      hindi: 80,
      english: 75,
      maths: 90,
      computer: 88,
      science: 82,
     
  },
  {
    name: 'Amit',
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
    computer: 92,
    science: 90
    

  },

  {
    name: 'Priya',
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
    computer: 95,
    science: 88
    
    
  }
]


for(let i = 0; i < studentsData.length; i++){
  console.log('Name: ' + studentsData[i].name + '\n' + 
              'Roll No: ' + studentsData[i].rollNo + '\n' + 'Hindi: ' + studentsData[i].hindi + '\n' + 'English: '
              +  studentsData[i].english + '\n'  + 'Maths: ' + studentsData[i].maths + '\n' + 'Computer: ' + studentsData[i].computer + '\n ')
}


console.log('---- ---- ----')
console.log('1.2')

const marksForScience = [82,90,88]


// check how we   add the marks of science to studentData

for(let i = 0; i < studentsData.length; i++){

      studentsData[i].science = marksForScience[i]
  // Now, we want to check the science marks in the console 

     console.log(studentsData[i])
}


// Dry run of this code 
// i = 0; studentData[0].science = marksForScience[0]


console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')

console.log('2.1')
const kaveriData = {
                  name: 'Kaveri',
                  rollNo: 104,
                  hindi: 84,
                  english: 88,
                  maths : 78,
                  computer: 90,
                  science: 86
}


// let's print the kaveri data

console.log("Kaveri's Data:", kaveriData)
console.log('---- ---- ----')
console.log('2.2')

// check how we add the kaveri data to Student data



studentsData.push(kaveriData)
console.log('Updated Data: ', studentsData)

console.log('---- ---- ---- ')
console.log('2.3')

for(let i = 0; i< studentsData.length; i++){

  let totalMarks = studentsData[i].hindi + studentsData[i].english + studentsData[i].maths + studentsData[i].computer + studentsData[i].science

  studentsData[i].totalMarks = totalMarks
}

console.log('Array with total marks:', studentsData)

console.log('---- ---- ----')
console.log('2.4')

for(let i =0; i< studentsData.length; i++){
 const numberofSubjects = 5
  const average = studentsData[i].totalMarks / numberofSubjects

  studentsData[i].avgMarks = average
}

console.log('Students Data: ', studentsData)


console.log('---- ---- ----')
console.log('Exercise 3')
console.log('---- ---- ----')


for(let i = 0; i < studentsData.length; i++){
  //for every iteration we have fenerate the result 

   generateReportCard(studentsData[i])

}

 function generateReportCard(student){
    console.log('===== Report Card For ' + 
            student.name + ' =====' + '\n' + 'Roll No. :' + student.rollNo + '\n' + '---- \n' + 'Marks' +' \n-----'
               + '\n' + 'Hindi: ' + student.hindi + '\n' + 'English: ' + student.english + "\n" + 'Maths: ' + student.maths + '\n' + 'Computer: ' + student.computer + ' \n'
               + 'Science: ' + student.science + "\n -----" + '\n' + 'Total: ' + student.totalMarks + '\n' + 'Average: ' + student.avgMarks + '\n' + 'Grade: ' + getGrade(student.avgMarks) + '\n') 
 
   
}

function getGrade(avg){

  if(avg >=90){
    return 'A'
    
  }
  else if(avg >= 80 && avg < 90){
    return 'B'
  }
   else if(avg >= 70 && avg <=79){
     return 'C'
   }
  else if(avg >= 60 && avg <= 69){
    return 'D'
  }
  else if(avg >= 50 && avg <= 59){

    return 'E'
  }

  else{
       return 'F'
  }


  
}