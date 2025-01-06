console.log('A5.11_HW_1')
console.log('---- ---- ----')
console.log('1.1')
console.log('---- ---- ----')

const studentData = [
 { studentName: "John", rollNo: 201, science: 88, history: 75, geography: 90 },
 { studentName: "Alice", rollNo: 202, science: 92, history: 85, geography: 88 },
 { studentName: "Bob", rollNo: 203, science: 78, history: 89, geography: 91 }
];


// we created this function to get the full report in a way
function createReport(rollNo){
  let data = createReportCard(rollNo)
  
 

    console.log('===== ' + 'Report Card for ' + data.studentName + ' =====' + '\n' + '\n' +'Roll No: ' + rollNo + '\n' + '-----' + '\n'
    + 'Marks : ' + '\n' 
    +'----' + '\n' +
    'Science: ' + data.science + '\n' + 
    'history: ' + data.history + '\n' + 
     'geography: ' + data.geography + '\n' + 
        '---- ---- ----' + '\n') 
      
  }



// we create a function where user put the roll no and then we gets its data
function createReportCard(rollNo){

    for(let i = 0; i < studentData.length; i++){

      if(studentData[i].rollNo === rollNo){
         return  studentData[i]
      }
    }

     
}

createReport(201)
createReport(202)
createReport(203)

console.log('---- ---- ----')
console.log('1.2')

console.log('---- ---- ----')

// Here we are trying to put the subject name it's cuttoff and we will get whoever passes that cuttoff

function checkCuttoff(subjectName, cuttoff){

   let result = []
  for(let i = 0; i < studentData.length; i++){

    if(studentData[i][subjectName] > cuttoff){
         result.push(studentData[i])
    }
  }


  return result

  
}

console.log('Students with subject science marks >= 80' + '\n')
console.log(checkCuttoff('science', 78))


console.log('Students with subject science marks >= 80' + '\n')
console.log(checkCuttoff('geography', 90))


console.log('Student with subject history marks >= 90' + '\n')
console.log(checkCuttoff('history', 90))

console.log('Student with subject geography marks >= 90' + '\n')
console.log(checkCuttoff('geography', 90))


console.log('---- ---- ----')

console.log('1.3')

console.log('---- ---- ----')

// First we find the avg and insert the average in the array

for(let i = 0; i < studentData.length; i++){

  let totalSubject = 3
  
  let add = studentData[i]
    let totalMarks = add.science + add.history + add.geography
   let averageMarks = totalMarks/totalSubject

     add.averageMarks = averageMarks


}


// WHoever have the higher average than 82 just print the result in 

function checkCuttOffMarks(avg){
  for(let i = 0; i< studentData.length; i++){

    if(studentData[i].averageMarks > avg){
           console.log(studentData[i].studentName + ' has average marks ' + studentData[i].averageMarks)
    }
    
  }

  
}

checkCuttOffMarks(82)

// first studentData[0].avgMarks = highesth


console.log('---- ---- ----')
console.log('1.4')
console.log('---- ---- ----')

function findHighestAverage(array){

  let highestMarks = array[0].averageMarks
  
 for(let i = 1; i< array.length; i++){

     if(array[i].averageMarks > highestMarks){

         highestMarks = array[i]
     }
 }

  return highestMarks

}

console.log(findHighestAverage(studentData))