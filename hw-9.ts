class Animal {
  name: string;
  static animalType: string = "dog";

  constructor(name: string) {
    this.name = name;
  }

  animalInfo(): void {
    console.log(`This is a ${Animal.animalType}. It's name is ${this.name}`);
  }
}

const theDog = new Animal("Judah");

theDog.animalInfo();