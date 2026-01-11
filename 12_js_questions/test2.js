//complete this code
class Animal {
  constructor(species) {
    this.species = species;
  }

  getter() {
    return this.species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }
  bark() {
    console.log(`woof`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }
  purr() {
    console.log(`purr`);
  }
}

const dog = new Dog("dogerman");
dog.bark();
