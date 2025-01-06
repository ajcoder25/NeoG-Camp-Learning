console.log('A5.12_CW')
console.log('---- ---- ----')
console.log('')


const studentData = [
  {name: 'Rahul',
   rollNo: 101, 
   hindi: 80,
   english:75,
   maths:90,
   computer:88,
   science: 82,
   totalMarks: 415,
   avgMarks: 83
     },

    {name: 'Ajay',
     rollNo: 102, 
     hindi: 85,
     english:70,
     maths:95,
     computer:92,
     science: 78,
     totalMarks: 420,
     avgMarks: 84
       },

    {
     name: 'Priya',
     rollNo: 103, 
     hindi: 78,
     english:92,
     maths: 87,
     computer:95,
     science: 90,
     totalMarks: 442,
     avgMarks: 88.4
       },

  {
     name: 'Kaveri',
     rollNo: 104, 
     hindi: 89,
     english:95,
     maths: 96,
     computer:98,
     science: 91,
     totalMarks: 469,
     avgMarks: 93.8
       }
]
  // Try to find the topper 

  function getTopper(data){

  let highestNumber = data[0]

  for(let i = 1; i < data.length; i++){

    if(data[i].totalMarks > highestNumber.totalMarks){

      highestNumber = data[i]
        
    }

    
  }
    return highestNumber
}

console.log(getTopper(studentData))

// topper end

  
 

 

// Get the grade of the topper 


    function getGrade(avg){

      if( avg >= 90){
        return 'A'
      }
      else if(avg >= 80){
        return 'B'
      }
      else if(avg >= 70){
        return 'C'
      }
      else if(avg >= 60){
        return 'D'
      }
      else if(avg >= 50){
        return 'E'
      }

      else{
        return 'F'
      }
      
    }

  // To find the A grders

  function getAGradersCount(data){
   let count = 0

    for(let i = 0; i < data.length; i++){
      if(data[i].avgMarks >=90){

        count = count + 1
      }
    }
    
   return count
    
  }

 console.log(getAGradersCount(studentData))



// Totalmarksscored by student starting 

 function getTotalMarks(data){
   let totalmarksStudent = 0

   for(let i = 0; i < data.length; i++){

     totalmarksStudent = totalmarksStudent + data[i].totalMarks
   }
 
   return totalmarksStudent
 }

// Calculate the average of each subject 


 function calculateSubjectAverage(data, subjectName){

   let totalMarks = 0

   for(let i = 0; i < data.length; i++){
    totalMarks = totalMarks + data[i][subjectName]
   }

   return totalMarks/ data.length
 }





// Ending of Totalmarksscored

function generateClassReport(studentData){

   let topper = getTopper(studentData)
   let aGradeCount = getAGradersCount(studentData)
   let totalMarksScoredByClass = getTotalMarks(studentData)
  let hindiAverage = calculateSubjectAverage(studentData, 'hindi')
  let mathsAverage = calculateSubjectAverage(studentData,'maths')
  let englishAverage = calculateSubjectAverage(studentData,'english')
  let scienceAverage = calculateSubjectAverage(studentData,'science')
  let computerAverage = calculateSubjectAverage(studentData,'computer')
  
let report = '=====  class Performance Report ' + ' =====' + '\n'

   report += 'Topper: \n'
   report += '----- \n'
   report += 'Name: ' + topper.name + '\n'
   report += 'Roll No: ' + topper.rollNo + '\n'
   report += 'Total marks: ' + topper.totalMarks 
   report += '\nGrade: ' +' ' + getGrade(topper.avgMarks) + '\n' // here we only need the average topper so we here use it.
   report += '\n'

    report += 'A graders: ' +'\n'
    report += '-----' + '\n'
    report += 'Total no. of A Graders: ' + aGradeCount +'\n'
    
    //find the name of a graders and total marks using for loop

    for(let i = 0; i< studentData.length; i++){

         if(studentData[i].avgMarks >= 90){

             report += 'Name: ' + studentData[i].name +
             '\nTotal Marks: ' + studentData[i].totalMarks +'\n ------'
         }
    }

  report += '\nClass Average: \n'
  report += '------\n'
  report +='Total Marks scored by Class : ' + totalMarksScoredByClass + '\n'
  report += 'Total Average of Class: ' +  totalMarksScoredByClass/ studentData.length + '\n'

  report += 'Total Average of Hindi: ' + hindiAverage + '\n'
  report += 'Total Average of Maths: ' + mathsAverage + '\n'
  report += 'Total Average of English: ' + englishAverage + '\n'
  report += 'Total Average of Science: ' + scienceAverage + '\n'
  report += 'Total Average of Computers: ' + computerAverage


    
return report
                  
  
  }


console.log(generateClassReport(studentData))