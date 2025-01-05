console.log('A5.11_CW')
console.log('---- ---- ----')

const studentData = [
  {name: 'Anu', rollNo: 101, hindi: 80, english: 75, maths: 90},
  {name: 'Priya', rollNo: 102, hindi: 85, english: 70, maths: 95},
  {name: 'Ravi', rollNo: 103, hindi: 78, english: 92, maths: 87}
]

console.log('1.1')
console.log('---- ---- ----')

function printReportCard(rollNo){
  let student = getReportByRollNo(rollNo)
  
 console.log('=====' + 'Report Card for ' + student.name + ' ====' +'\n'
            + 'Roll No. : ' + student.rollNo + '\n' 
            +'-------' + '\n' + 'Marks: ' +'\n' + '------' + '\n' +
             'Hindi: ' + student.hindi + '\n' +
              'English: ' + student.english +'\n' +
               'Maths: ' + student.maths + '\n' +
             '------' + '------' + '------' + '\n'
             )
  
}


function getReportByRollNo(rollno){

  for(let i = 0; i<studentData.length; i++){
     if(studentData[i].rollNo === rollno){
       return studentData[i]
     }
  }
}


printReportCard(101)
printReportCard(102)
printReportCard(103)

console.log('---- ---- ----')
console.log('1.2')
console.log('---- ---- ----')


function check(subject,cuttOff){

  let result = []
  for(let i = 0; i< studentData.length; i++){

    if(studentData[i][subject] > cuttOff){
      result.push(studentData[i])
    }
  }

  return result
  
}

console.log('\nStudent data with cutoff for hindi > 80') 
console.log(check('hindi', 80))


console.log('\nStudent data with cuttoff for maths > 90')
console.log(check('maths', 90))


console.log('\n Student data with cuttoff for english > 90')
console.log(check('english', 90))


console.log('---- ----- ----')
console.log('1.3')
console.log('---- ---- ----')


for(let i = 0; i< studentData.length; i++){

      let numofSub = 3
      let totalmarks = studentData[i].maths + studentData[i].english + studentData[i].hindi
       

         studentData[i].totalmarks = totalmarks
  

     
        studentData[i].avgMarks = studentData[i].totalmarks/numofSub
   
}

console.log(studentData)


function printStudentsAboveAverage(AvgCutt){

  for(let i = 0; i < studentData.length; i++){

      if(studentData[i].avgMarks > AvgCutt){
         console.log(studentData[i].name + ' has average marks ' + studentData[i].avgMarks)
      }
  }
}

printStudentsAboveAverage(82)

console.log('----  ----- -----')
console.log('1.4')
console.log('---- ----- -----')

function findHighest(array){
let highestArray = array[0].avgMarks

  for(let i = 0; i < array.length; i++){

    if( array[i].avgMarks > highestArray){

       highestArray = array[i].avgMarks
    }
  }

  return highestArray
}

console.log('Student with highest average marks:', findHighest(studentData))