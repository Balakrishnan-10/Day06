// Question :1
// A. Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments,
//  and sets the respective class properties to these values.
class Movie{
  constructor(Title,Studio,PG){
    this.Title = Title
    this.Studio = Studio
    this.PG = PG
  }
}
  var M1 = new Movie("Toy Story","Pixer Animation","G");
  console.log(M1)

// c) Write a method getPG, which takes an array of base type Movie as its argument, 
// and returns a new array of only those movies in the input array with a rating of "PG". 
// You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie{
  constructor(Title,Studio,PG){
    this.Title = Title
    this.Studio = Studio
    this.PG = PG
  }
  getPG(){
    return `The movie rating is ${this.PG}`
  }
}
  var M1 = new Movie("Casino Royale","Eon Productions","PG13");
console.log(M1.getPG()); 

// C. Write a piece of code that creates an instance of the class Movie with
// the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie{
  constructor(Title,Studio,PG){
    this.Title = Title
    this.Studio = Studio
    this.PG = PG
  }
  getTitle(){
    return `The title of movie is ${this.Title}`
    }
  getStudio(){
  return `The studio of movie is ${this.Studio}`
  }
  getPG(){
    return `The movie rating is ${this.PG}`
  }
}
  var M1 = new Movie("Casino Royale","Eon Productions","PG13");
  console.log(M1.getTitle());
  console.log(M1.getStudio());
  console.log(M1.getPG());