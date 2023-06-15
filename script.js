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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VehiclesArr = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(model, transmission, price, insurance, img, information, id) {
        this.model = model;
        this.transmission = transmission;
        this.price = price;
        this.insurance = insurance;
        this.img = img;
        this.information = information;
        this.id = id;
        VehiclesArr.push(this);
    }
    return Vehicles;
}());
var bikeArr = [];
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(model, transmission, price, insurance, img, information, kmDay, accessories, id) {
        var _this = _super.call(this, model, transmission, price, insurance, img, information, id) || this;
        _this.kmDay = kmDay;
        _this.accessories = accessories;
        return _this;
    }
    return Motorbikes;
}(Vehicles));
var car1 = new Vehicles("Opel Corsa", "manual", 49, true, "photos/car1.jpg", "Pick up in the airport", 1);
var car3 = new Vehicles("Mercedes Benz B-Class", "automatic", 250, true, "photos/car3.jpg", "Pick up in Main Train Station", 2);
var car4 = new Vehicles("Suzuki SX4", "manual", 161, true, "photos/car4.jpg", "Pick up in Wien Mitte", 3);
var bike1 = new Motorbikes("BMW", "manuel", 125, false, "photos/bike1.jpg", "Pick up in multiply locations", 250, "You can rent a helmet", 4);
var bike2 = new Motorbikes("Hynday", "manuel", 100, false, "photos/bike2.jpg", "Pick up in multiply locations", 250, "You can rent a helmet", 5);
var bike3 = new Motorbikes("Harley Davidson", "manuel", 255, false, "photos/bike3.jpg", "Pick up in multiply locations", 250, "You can rent a helmet", 6);
var result = document.getElementById("container");
for (var _i = 0, VehiclesArr_1 = VehiclesArr; _i < VehiclesArr_1.length; _i++) {
    var car = VehiclesArr_1[_i];
    result.innerHTML += "\n    <div class=\"card\" style=\"width: 18rem;\">\n  <img src=\"".concat(car.img, "\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">").concat(car.model, "</h5>\n    <p class=\"card-text\">You have to return a car with full gas trunck</p>\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">Car has ").concat(car.transmission, " transmission</li>\n    <li class=\"list-group-item\">Car has ").concat(car.kmDay ? car.kmDay : "unlimited", " km per day</li>\n    <li class=\"list-group-item\">").concat(car.price, " \u20AC per day</li>\n    <li class=\"list-group-item\">Car insurance included: ").concat(car.insurance, "</li>\n  </ul>\n  <div class=\"card-body\">\n<div class=\"d-grid gap-2\">\n   <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#").concat(car.id, "\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n   More Information\n  </button>\n<div class=\"collapse\" id=\"").concat(car.id, "\">\n  <div>\n    ").concat(car.information, "\n  </div>\n</div>\n</div>\n");
}
