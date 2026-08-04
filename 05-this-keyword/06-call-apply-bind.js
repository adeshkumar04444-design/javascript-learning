/*
=========================================
call(), apply() and bind()
=========================================

These methods allow us
to manually set "this".
*/

const person = {
  name: "Sachin",
  };

  function introduce(city, country) {
    console.log(
        `Hi, I'm ${this.name} from ${city}, ${country}`
          );
          }

          /*
          call()

          Arguments are passed separately.
          */

          introduce.call(person, "Delhi", "India");

          /*
          Output

          Hi, I'm Sachin from Delhi, India
          */

          /*
          apply()

          Arguments are passed
          inside an array.
          */

          introduce.apply(person, ["Lucknow", "India"]);

          /*
          Output

          Hi, I'm Sachin from Lucknow, India
          */

          /*
          bind()

          Returns a NEW function.

          It does NOT execute immediately.
          */

          const intro = introduce.bind(person, "Prayagraj", "India");

          intro();

          /*
          Output

          Hi, I'm Sachin from Prayagraj, India
          */

          /*
          Summary

          call()

          Immediately executes.

          apply()

          Immediately executes.

          bind()

          Returns a new function.
          */