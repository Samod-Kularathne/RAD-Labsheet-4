class Dog {
    constructor(breed, age, color) {
      this.breed = breed;
      this.age = age;
      this.color = color;
    }
  
    eat() {
      console.log(`${this.breed} is eating.`);
    }
  
    sleep() {
      console.log(`${this.breed} is sleeping.`);
    }
  
    sit() {
      console.log(`${this.breed} is sitting.`);
    }
  
    run() {
      console.log(`${this.breed} is running.`);
    }
  }
  
  // Create an instance of Dog
  const pug = new Dog("Pug", 3, "Fawn");
  
  // Access properties and call methods
  console.log(`Breed: ${pug.breed}`);
  pug.eat();
  