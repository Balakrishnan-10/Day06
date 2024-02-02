// Question : 4.
 // write a class to calculate the Uber price.
class UberPrice{
    constructor(Pickuppoint,Droppingpoint,Distance,kmpercost){
      this.Pickuppoint = Pickuppoint
      this.Droppingpoint = Droppingpoint
      this.Distance = Distance
      this.kmpercost = kmpercost
    }
    getPrice(){
      return `Calculate the Uberprice is RS. ${this.Distance*this.kmpercost}`
    }   
  }
    var u1 = new UberPrice("Aruppukottai","Madurai",45,3);
    console.log(u1.getPrice());