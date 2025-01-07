console.log('---- ---- ----')
console.log('A5.12_HW1')
console.log('---- ---- ----')

const studentsData = [
  { name: "Sarah", rollNo: 201, chemistry: 88, homeScience: 78, commerce: 92, physicalEducation: 90, moralScience: 85, totalMarks: 433, avgMarks: 86.6 },
  { name: "Michael", rollNo: 202, chemistry: 75, homeScience: 90, commerce: 85, physicalEducation: 94, moralScience: 88, totalMarks: 432, avgMarks: 86.4 },
  { name: "Emily", rollNo: 203, chemistry: 82, homeScience: 95, commerce: 88, physicalEducation: 92, moralScience: 90, totalMarks: 447, avgMarks: 89.4 },
  { name: "David", rollNo: 204, chemistry: 95, homeScience: 96, commerce: 94, physicalEducation: 99, moralScience: 99, totalMarks: 483, avgMarks: 96.6 },
  { name: "Olivia", rollNo: 205, chemistry: 85, homeScience: 92, commerce: 89, physicalEducation: 91, moralScience: 86, totalMarks: 443, avgMarks: 88.6 }
];

// Finding Topper 

function findTopper(studentData){
  let highestNumber = studentData[0]
  for(let i = 1; i< studentData.length; i++){
   if(studentData[i].totalMarks > highestNumber.totalMarks){
     highestNumber = studentData[i]
     
   }
     
   
    
  }
  return highestNumber
}

console.log(findTopper(studentsData))

// finding topper ends here 

//Finding Grade

function findGrade(avg){

 if(avg >= 95) return 'A+';
 if(avg >= 90) return 'A';
  if(avg >= 85) return 'B+';
  if(avg >= 80) return 'B';
  if(avg >= 75) return 'C+';
  if(avg >= 70) return 'D+';
  if(avg >= 60) return 'D';
  if(avg >= 55) return 'E';
  if(avg < 55) return 'F'


    
  }

// Grade finding end

// Finding total A graders

function findAgrader(avg){

     let count = 0

  for(let i = 0; i < avg.length; i++){
    if(avg[i].avgMarks >= 95){
      count = count + 1
    }
    
  }

  return count
}
  

// A grader end

// total marks scored by student

function totalMarksScored(total){
  let totalMarks = 0

  for(let i = 0; i< total.length; i++){
    
      totalMarks = totalMarks + total[i].totalMarks
    
   
     
  }
  return totalMarks
}




// end of total Marks


// finding the average for the subject

function findingAverage(data, subjectName){

// Considering variable, a subject we will pass in, we are considering it as 0
  
 let totalAverage = 0

  for(let i = 0; i < data.length; i++){

    totalAverage = totalAverage + data[i][subjectName]
  }

  
  return totalAverage/data.length
}



// End of findingAverage

function createClassReport(studentData){

  let findingTopper = findTopper(studentData)
  let findingGrade = findGrade(findingTopper.avgMarks)
  let findingAGrader = findAgrader(studentsData)
  let totalNumberScored = totalMarksScored(studentsData)
  let findingAverageChemistry = findingAverage(studentData,'chemistry')
  let findingAverageHomeScience = findingAverage(studentData, 'homeScience')

  let findingAverageCommerce = findingAverage(studentsData,'commerce')

  let findingPhysicalEducation = findingAverage(studentsData, 'physicalEducation')

  let findingMoralScience = findingAverage(studentData, 'moralScience')
  
  let report = '====' + 'Class Prformance Report ' + '====' + '\n'

  report += 'Topper: \n'
  report += '------ \n' 
  report += 'Name:'+ findingTopper.name +'\n'
  report += 'Roll No: ' + findingTopper.rollNo + '\n'
  report += 'Total Marks: ' + findingTopper.totalMarks +'\n'
  report += 'Grade: ' + findingGrade +'\n'
  report += '\n' 
  report += 'A+ Graders: \n'
  report += '-----\n'
  report += 'Total no. of A+ graders: '  + findingAGrader +'\n'
// finding the name of A+ grader name and total marks

  for(let i = 0; i< studentsData.length; i++){
     if(studentData[i].avgMarks >= 90){
       report += 'Name: ' + studentsData[i].name +
        '\nTotal Marks: ' + studentsData[i].totalMarks +'\n'
       
     }
  }
  
report += '------\n'
report += 'Class Average: \n'
report += '------\n'
report += 'Total Marks Scored by Class: ' + totalNumberScored +'\n'
report += 'Total Average of Class: ' + totalNumberScored / studentsData.length + '\n'
report += '------\n'
report += 'Total Average of Chemistry: ' + findingAverageChemistry + '\n'

report += 'Total Average of Home Science: ' + findingAverageHomeScience +'\n'

report += 'Total Average of Commerce: ' + findingAverageCommerce +'\n'
report += 'Total Average of Physical Education: ' + findingPhysicalEducation + '\n'

report += 'Total Average of Moral Science: ' + findingMoralScience +
  '\n'

  



  return report
}



console.log(createClassReport(studentsData))