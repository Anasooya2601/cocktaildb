//get all the roll no
//get Anasooya's rollno and age

const RollNo=()=>{
    setTimeout(()=>{
        //callback function
     console.log('get the roll no')
     let roll_no=[1,2,3,4,5];
     console.log(roll_no)
     setTimeout((rollno)=>{
       const biodata = {
           name:'Anasooya',
           age:10
       }
       console.log(`My roll no is ${rollno}.My name is ${biodata.name} and I am ${biodata.age} years old`);
       setTimeout((name)=>{
            biodata.gender='female'
            console.log(`My roll no is ${rollno}.My name is ${biodata.name} and I am ${biodata.age} years old.I am ${biodata.gender}`);
       
      
       },2000,biodata.name)
     },2000,roll_no[1])
      },2000)

    }
RollNo()
// setTimeout(handler:AnalyserNode,clearTimeout)