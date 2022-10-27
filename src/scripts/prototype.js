// We can share properties among objects of the same type

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return 'Woof'
  }
}



const dog1 = new Dog('Agui');
const dog2 = new Dog('Berta');

Dog.prototype.play = () => "I'm playing";


