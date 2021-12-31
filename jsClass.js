// JavaScript Class Constructor
// class Student {
//   constructor(sName, sId, sGPA) {
//     this.name = sName;
//     this.id = sId;
//     this.gpa = sGPA;
//   }
// }
// const student1 = new Student("Rashidul", 371, 3.0);
// const student2 = new Student("Rased", 325, 3.5);
// console.log(student1.gpa, student2.name);

class Parent {
   constructor(){
      this.fatherName = "Moslem"
   }
}
class Child extends Parent{
   constructor(name){
      super()
   this.name = name;
   }
}

const baby2 = new Child("Rashiudl");
const baby3 = new Child("Rakib");
const baby1 = new Child("Rouf");
const baby4 = new Child("Rafiul");
console.log(baby1, baby2, baby3, baby4)