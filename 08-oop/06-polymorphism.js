/*
=========================================
JavaScript Polymorphism
=========================================

Definition:

Polymorphism means

"One Method,
Many Forms."

A child class can redefine
a method inherited from its parent.
*/

class Animal {
  sound() {
      console.log("Animal makes a sound");
        }
        }

        class Dog extends Animal {
          sound() {
              console.log("Dog barks");
                }
                }

                class Cat extends Animal {
                  sound() {
                      console.log("Cat meows");
                        }
                        }

                        const animal = new Animal();
                        const dog = new Dog();
                        const cat = new Cat();

                        animal.sound();
                        dog.sound();
                        cat.sound();

                        /*
                        Output

                        Animal makes a sound
                        Dog barks
                        Cat meows
                        */

                        /*
                        Same Method

                        sound()

                        Different Behaviour

                        Animal
                        Dog
                        Cat

                        This is Polymorphism.
                        */