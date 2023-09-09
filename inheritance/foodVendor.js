//create blueprint of a foodvendor
//name, rev, expesns
class FoodVendor{
    //initialzie a new food vendor
    //abbreviated ctor
    //order of our properties in constructor matters
    constructor(name, revenue, expenses){
        //set my instance's properties to waht ctor had
        this.name = name;
        this.revenue = revenue;
        this.expenses = expenses;
    }

    //class method still a function
    profit(){
        //calc the instances profit
        return this.revenue - this.expenses   
    }
}