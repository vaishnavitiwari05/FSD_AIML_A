const student={
    name:"Vaishnavi",
    ID:"123",
    branch:"AIML"
};
console.log("Student:",student);
const newstudent={...student,adress:{
    street1:"sector15",
    city:"Noida",
    pin:"201001"
}}
console.log("new Student :",newstudent)
