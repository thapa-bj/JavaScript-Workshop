//Write js code to take name of user,his/her faculty name, his/her gpa of 8semesters(each using prompt) and 
//his/her exam roll number
// as inputs and then 
//calculate thecgpa of the 8 semesters and display the output as: 
 //"Cgpa" CGPA in my Bachelor's.


let Name=(prompt("enter your name"));
let faculty=(prompt("enter your faculty name"));
let Roll = +(prompt("enter your Roll"));
let first = +(prompt("Enter your marks in first semester"));
let second =parseInt(prompt("Enter your marks in second  semester"));
let third=parseInt(prompt("Enter your marks in third semester"));
let fourth=parseInt(prompt("Enter your marks in fourth semester"));
let fifth =parseInt(prompt("Enter your marks in fifth semester"));
let sixth =parseInt(prompt("Enter your marks in sixth semester"));
let seventh=parseInt(prompt("Enter your marks in seventh semester"));
let eighth=parseInt(prompt("Enter your marks in  eighth semester"));

let CGPA= (first+second+third+fourth+fifth+sixth+seventh)/8.0;
console.log(CGPA)


alert( ` I am ${Name}, I am doing ${faculty}. my roll number is ${Roll} and I scored ${CGPA} in my bachelor's`)