
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//First Models Project
const Vehicule = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    urlRoot: "/api/vehicules",
    start: function(){
        console.log("Vehicule started");
    },
    validate: function(attrs){
        if(!attrs.registrationNumber)
        return "idAttribute is required";
    }
});

//Create a collection
const VehiculesCollection = Backbone.Collection.extend({
    model: Vehicule
});

let vehiculesCollection1 = new VehiculesCollection();

//add cars to the collection
vehiculesCollection1.add(new Vehicule({name: "car1", registrationNumber: "XLI887", color: "blue"}));
vehiculesCollection1.add(new Vehicule({name: "car2", registrationNumber: "ZNP123", color: "blue"}));
vehiculesCollection1.add(new Vehicule({name: "car3", registrationNumber: "XUV456", color: "gray"}));

console.log(vehiculesCollection1);

let blueCars = vehiculesCollection1.where({color: "blue"});
console.log(blueCars);

let firstCar = vehiculesCollection1.where({registrationNumber: "XLI887"});
console.log(firstCar);

vehiculesCollection1.remove(firstCar);
console.log(vehiculesCollection1.toJSON());
vehiculesCollection1.each(function(vehicule){
    console.log(vehicule);
});




