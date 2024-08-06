const prometheus = {
    name: "Elizabeth Shaw",
    age: 10000,
    species: "Engineer",
  };
  
  class Alien {
    constructor(name, homePlanet) {
      this.name = name;
      this.homePlanet = homePlanet;
    }
  }
  
  //1.
  // Check if the prometheus object has the property "species" and if it does, log "Prometheus is an Engineer".
  // hint use the .hasOwnProperty() method
  prometheus.hasOwnProperty("species") ? console.log("Prometheus is an Engineer") : console.log('No property found')
  
  //2.
  //  If the prometheus object does not have the method "homePlanet", add the method "homePlanet" and return Earth.
  //  hint use the .hasOwnProperty() method to check if the prometheus object has the method "homePlanet" and if it does not, add the method "homePlanet" and log "Earth".
  prometheus.hasOwnProperty("homePlanet") ? prometheus.homePlanet() : prometheus.homePlanet = function() {
  console.log("Earth")
  };
  prometheus.homePlanet();
  
  //3.
  // Write a class with constructor function that takes in the name, age, species, and homePlanet of the object and logs "Prometheus is an Engineer from Earth".
  // hint use the this keyword to access the properties of the object
  class newClass extends Alien {
    constructor (name, homePlanet, age, species) {
      super (name, homePlanet);
      this.age = age;
      this.species = species;
    }
    getInfo = function(){
      console.log(`Prometheus is an ${this.species} from ${this.homePlanet}`);
    }
  }
  let prometheus2 = new newClass("Elizabeth Shaw", "Earth",10000, "Engineer");
  prometheus2.getInfo();
  
  
  //4.
  // Modify existing class to add a method "speak" that logs "Hello, my name is Elizabeth" and call the method.
  // hint use the this keyword to access the properties of the object
  prometheus2.speak = function() {
    let first = this.name.split(' ')[0];
    console.log(`Hello, my name is ${first}`)
  };
  console.table(prometheus2);
  prometheus2.speak();