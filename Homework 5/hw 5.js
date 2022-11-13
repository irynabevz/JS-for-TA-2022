//------------------task 1-----------------

/*
function propsCount(currentObj) {
    let keysArr = Object.keys(currentObj);
    return keysArr.length;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

console.log(propsCount(mentor));
*/

//------------------task 2-----------------

/*
let showProps = (currentObj) => {return Object.keys(currentObj);}

let showPropsValues = (currentObj) => {return Object.values(currentObj);}

let student = {
    course: "JS fundamental",
    duration: 3,
    direction: "Test Automation",
    mentor: "Volodymyr",
    company: "SoftServe"
};

console.log("The properties of object Student: " + showProps(student));
console.log("The properties values of object Student: " + showPropsValues(student));
*/

//------------------task 3-----------------
/*
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        alert("Hello " + this.name + " " + this.surname);
    }
}

class Student extends Person {
    constructor(name,surname,year){
        super(name,surname,year);
        this.year = year;
        console.log(this.year);
    }

    showFullName(middleName) {
        this.middleName = middleName;
        alert (this.name + " " + this.surname + " " + this.middleName);
    }

    showCourse() {
        let yearNow = new Date().getFullYear();
        let course = (yearNow - this.year);

        if(course <= 0 || course > 6) { 
            alert("You are not a student!");
        } else {alert("Current course: " + course);}
    }
}

let stud1 = new Student("Iryna", "Bevz", 2012);
console.log(stud1.showFullName("Sergiivna"));
console.log(stud1.showCourse());
*/

//------------------task 4-----------------

/*
const workersList = [];

class Worker {
    #experience = 1.2;

    get experience() {
        return this.#experience;
    }

    set experience(experience) {
        if(this.#experience < 0) {
            this.#experience = 1.2
        }
        this.#experience = experience;
    }

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workersList.push(this);
    }

    showSalary() {
        let workersSalary = this.dayRate * this.workingDays;
        console.log("Workers salary: " + workersSalary.toFixed(2));
    }

    showSalaryWithExperience() {
        let workerSalaryWithExp = this.#experience * this.dayRate * this.workingDays;
        return workerSalaryWithExp.toFixed(2);
    }

    sortSalary(workersList) {
        let sortedSalary = workersList.sort(function (a,b) {
            return b.showSalaryWithExperience() - a.showSalaryWithExperience()
        });

        console.log("Sorted salary: ");

        sortedSalary.forEach(element => {
            console.log(element.fullName + ": " + element.showSalaryWithExperience())
        });
    }

} 

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.experience);
console.log("Salary with experience: " + worker1.showSalaryWithExperience()); 
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log("Salary with experience: " + worker1.showSalaryWithExperience()); 

console.log("******************");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.experience);
console.log("Salary with experience: " + worker2.showSalaryWithExperience()); 
worker2.experience = 4.5;
console.log("New experience: " + worker2.experience);
console.log("Salary with experience: " + worker2.showSalaryWithExperience()); 

console.log("******************");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.experience);
console.log("Salary with experience: " + worker3.showSalaryWithExperience()); 
worker3.experience = 2;
console.log("New experience: " + worker3.experience);
console.log("Salary with experience: " + worker3.showSalaryWithExperience()); 

console.log("******************");

worker3.sortSalary(workersList);
*/

//------------------task 5-----------------

let figures = [];

class GeometricFigure {

    constructor() {
        figures.push(this);
    }

    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
   }
    
}

class Triangle extends GeometricFigure {
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }

    getArea() {
        return this.a * this.b;
    }
}

class Square extends GeometricFigure {
    constructor(a){
        super();
        this.a = a;
    }

    getArea() {
        return this.a ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(r){
        super();
        this.r = r;
    }

    getArea() {
        return Math.PI * (this.r**2);
    }
}

function handleFigures(figures) {
    for (let i = 0; i < figures.length; i+=1) {
        if (figures[i] instanceof GeometricFigure) {
            console.log(figures[i].toString() + " it's an instance of GeometricFigure");
        } else console.log(figures[i].toString() + " it's not an instance of GeometricFigure");

        console.log("The area of " + figures[i].toString() + ": " + figures[i].getArea());
        console.log("****************");        
    }

    let result = figures.reduce((sum, current) => sum + current.getArea(),0);

    console.log("The sum of areas: " + result.toFixed(2));
}

figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

handleFigures(figures);