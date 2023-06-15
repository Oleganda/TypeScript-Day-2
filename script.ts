// --------------------------------Basic--------------------------------------------
//Ex. 1:
// Create a class constructor named Person that should hold information about name, age, 
// jobTitle and have a function that will return a string 
// “Hello there, My name is(name) and I am(age) years old, and I am a(jobTitle)”
//    +
//Ex. 2:
//Create a class based on the Person class and add some other properties like salary, 
//jobLocation and a function that will call the function that is inside the 
//Person class and add “and I get (salary) every month, and I work in (jobLocation)”

// class Person {
//     fName: string;
//     lName: string;
//     age: number;
//     jobTitle: string;

//     constructor(firstName: string, lastName: string, age: number, jobTitle: string) {
//         this.fName = firstName;
//         this.lName = lastName;
//         this.age = age;
//         this.jobTitle = jobTitle;
//     }
//     mainInfo() {
//         return `Hello there, My name is ${this.fName} ${this.lName} and I am ${this.age} years old, I am a ${this.jobTitle}`
//     }
// }

// class moreInfo extends Person {
//     jobLocation: string;
//     salary: number;
//     constructor(firstName: string, lastName: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
//         super(firstName, lastName, age, jobTitle);
//         this.jobLocation = jobLocation;
//         this.salary = salary;
//     }

//     mainInfo() {
//         return `${super.mainInfo()} I get ${this.salary} every month, and I work in ${this.jobLocation}`
//     }
// }

// let person1 = new Person("Anna", "Ivanova", 24, "Sales Manager");
// let person2 = new moreInfo("Elena", "Petrova", 27, "HR Manager", 3000, "Wien Mitte")

// console.log(person2.mainInfo());

//--------------------------------Advanced--------------------------------------
//Create an App that has to offer four different of types of vehicles and list the vehicle 
//models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price.

//Create a Parent Class called Vehicles 
//Define properties and methods for the super Class
//Consider the inheritance concept
//Define other Child class and name it Motorbikes
//Based on the personal vehicle performance model, kilometers left, 
//number of seats, fuel type and year of production calculate the price once the 
//user clicks on the button "show price" * use your dummy custom formula)


interface IVehicles {
    model: string;
    transmission?: string;
    price: number;
    insurance: boolean;
    img: any;
    information: string;
    id: number;
    accessories?: string;
    kmDay?: number;
}

let VehiclesArr: IVehicles[] = [];
class Vehicles implements IVehicles {
    model: string;
    transmission: string;
    price: number;
    insurance: boolean;
    img: any;
    information: string;
    id: number;

    constructor(model: string, transmission: string, price: number, insurance: boolean, img: any, information: string, id: number) {
        this.model = model;
        this.transmission = transmission;
        this.price = price;
        this.insurance = insurance;
        this.img = img;
        this.information = information;
        this.id = id;
        VehiclesArr.push(this);
    }
}

let bikeArr: IVehicles[] = [];
class Motorbikes extends Vehicles {
    kmDay: number;
    accessories: string;

    constructor(model: string, transmission: string, price: number, insurance: boolean, img: any, information: string, kmDay: number, accessories: string, id: number) {
        super(model, transmission, price, insurance, img, information, id)
        this.kmDay = kmDay;
        this.accessories = accessories;
    }
}

let car1 = new Vehicles("Opel Corsa", "manual", 49, true, "photos/car1.jpg", "Pick up in the airport", 1);
let car3 = new Vehicles("Mercedes Benz B-Class", "automatic", 250, true, "photos/car3.jpg", "Pick up in Main Train Station", 2);
let car4 = new Vehicles("Suzuki SX4", "manual", 161, true, "photos/car4.jpg", "Pick up in Wien Mitte", 3);
let bike1 = new Motorbikes("BMW", "manuel", 125, false, "photos/bike1.jpg", "Pick up in multiply locations", 250, "You can rent a helmet", 4);
let bike2 = new Motorbikes("Hynday", "manuel", 100, false, "photos/bike2.jpg", "Pick up in multiply locations", 250, "You can rent a helmet", 5);
let bike3 = new Motorbikes("Harley Davidson", "manuel", 255, false, "photos/bike3.jpg", "Pick up in multiply locations", 250, "You can rent a helmet", 6);

const result = document.getElementById("container") as HTMLElement;
for (let car of VehiclesArr) {
    result.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${car.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${car.model}</h5>
    <p class="card-text">You have to return a car with full gas trunck</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Car has ${car.transmission} transmission</li>
    <li class="list-group-item">Car has ${car.kmDay ? car.kmDay : "unlimited"} km per day</li>
    <li class="list-group-item">${car.price} € per day</li>
    <li class="list-group-item">Car insurance included: ${car.insurance}</li>
  </ul>
  <div class="card-body">
<div class="d-grid gap-2">
   <button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#${car.id}" aria-expanded="false" aria-controls="collapseExample">
   More Information
  </button>
<div class="collapse" id="${car.id}">
  <div>
    ${car.information}
  </div>
</div>
</div>
`
}



















