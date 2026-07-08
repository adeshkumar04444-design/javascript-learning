// this keyword

const user = {
  name: "John Wick",
  greet() {
    console.log(this.name);
  },
};

user.greet();

//'this' refers to the object that calls the method.
