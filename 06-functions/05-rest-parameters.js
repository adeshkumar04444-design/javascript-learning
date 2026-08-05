/*
=========================================
Rest Parameters
=========================================

Rest Parameter (...)

collects multiple arguments
into a single array.
*/

function sum(...numbers) {

  console.log(numbers);

    let total = 0;

      for(const number of numbers){
            total += number;
              }

                return total;

                }

                console.log(sum(10,20));

                console.log(sum(10,20,30));

                console.log(sum(10,20,30,40));

                /*
                Output

                [10,20]

                30

                [10,20,30]

                60

                [10,20,30,40]

                100
                */

                /*
                Difference

                Rest

                (...)

                Collects values.

                Spread

                (...)

                Expands values.
                */