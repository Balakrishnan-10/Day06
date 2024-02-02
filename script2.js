// Question : 3
//Create a class in Person:
class person{
    constructor(name,faname,number,address,gender,nationality,maritalStatus){
    this.name = name
    this.faname = faname
    this.number = number
    this.address = address
    this.gender = gender
    this.nationality = nationality
    this.maritalStatus = maritalStatus
    }
    getName(){
    return `I am ${this.name}`
    }
    getFaname(){
      return `My father name is ${this.faname}` 
    }
    getNumber(){
      return `My mobile number is ${this.number}`
    }
    getAddress(){
      return `My address is ${this.address}`
    }
    getGender(){
      return `Gender is ${this.gender}`
    }
    getNationality(){
      return `Nationality is ${this.nationality}`
    }
    getmaritalStatus(){
      return `I am ${this.maritalStatus}`
    }
  }
  var p1 = new person("Balakrishnan","Murugan",6369216016,"121,EastStreet,Palayampatti","Male","Indian","Single");
  console.log(p1.getName());
  console.log(p1.getFaname());
  console.log(p1.getNumber());
  console.log(p1.getAddress());
  console.log(p1.getGender());
  console.log(p1.getNationality());
  console.log(p1.getmaritalStatus());