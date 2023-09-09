
//We moved food vendor class to its own file to show readability

//child class extends/ adds more functionality from the FoodVendor
class TacoTruck extends FoodVendor{
    //ctor must have the properties for the parent to be able to send to super
    constructor(name, revenue, expenses, location, tacosOnMenu){
        //call super to create the part of FV that taco truck needs
        super(name, revenue, expenses)
        this.location = location
        //sanity / data validation is important
        if(tacosOnMenu === undefined){
            throw new Error("TacoTruck requires a list of tacos on menu")
        }
        this.tacosOnMenu = tacosOnMenu
    }
    makeTortillas(){
        console.log("makeTortillas")
    }
    moveLocation(){
        console.log("moveLocation")
    }
    openDoors(){
        console.log("openDoors")
    }
    //lists out data only this truck has
    customerOrder(){
        console.log("Here are the tacos on menu", this.tacosOnMenu)
    }
}

console.log(FoodVendor)

let lstand = new FoodVendor("Lemonade stand", 300, 175)
console.log(lstand, "profit " + lstand.profit())
//my parent doesn't have this, throws error
// lstand.makeTortillas()

let ttUsingTClass = new TacoTruck("Taco Truck", 300, 175, "Shell Gas Station", [
    {
        name: "Brisket BBQ Taco",
        price: 8.15
    },
    {
        name: "Pork Belly",
        price: 5.25
    },
    {
        name: "Tongue Taco",
        price: 3.99
    },
    {
        name: "Birria",
        price: .50
    }
])
console.log(ttUsingTClass, "profit " + ttUsingTClass.profit())
ttUsingTClass.makeTortillas()
ttUsingTClass.customerOrder()
//Create a class for car
class Car{
    //called when intializing a class instance with new
    constructor(make, model, color,price){
        this.make = make;
        this.model = model;
        this.color = color

        //in real-world our developers decided car must have price, don't create cars without
        if(price === undefined){
            throw new Error("You must give a price")
        }
        this.price = price// can be constant 0 but we dont want to sell cars for free
        //define as many as you want
    }
}


//create cars
let newJag = new Car("Jaguar", "Turbo XE", "Black",60000)
console.log(newJag)

let newEvo = new Car("Mitsubishi", "Evo Lancer", "Hunter Green",0)
console.log(newEvo)

//create a tesla
// debugger
let newTesla = new Car("Tesla", "Model S", "Blue",87000)
console.log(newTesla)


class Shape {
    constructor(height, width){
      this.height = height;
      this.width = width;
    }
  }
  