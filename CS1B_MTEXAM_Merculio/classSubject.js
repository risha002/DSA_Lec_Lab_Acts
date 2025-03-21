let sub_title = prompt("Enter your subject title: "); //prompt the user to enter the name of the subject
let class_sched = prompt("Enter the time and day of the schedule: "); //prompt the user about the schedule of the subject
let classroom = prompt("Enter the classroom: "); //prompt the user to enter the designated classroom of the said subject
let class_instructor = prompt("Enter your class instructor: "); //prompt the user to enter the instructor of the said subject
let stud_name = prompt("Enter your name: "); //prompt the user to enter their name

console.log(`${stud_name} is currently enrolled in ${sub_title} with a class schedule of ${class_sched} at room ${classroom}.
    The instructor for the subject is ${class_instructor}`);