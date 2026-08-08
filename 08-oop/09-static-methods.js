/*
=========================================
JavaScript Static Methods
=========================================

Definition:

Static methods belong to the class itself.

They cannot be called
using object instances.

Syntax

static methodName() {}
*/

class MathHelper {
  static add(a, b) {
      return a + b;
        }

          static multiply(a, b) {
              return a * b;
                }
                }

                console.log(MathHelper.add(10, 20));

                console.log(MathHelper.multiply(5, 4));

                /*
                Output

                30
                20
                */

                // Wrong

                // const math = new MathHelper();
                // math.add(10,20);

                /*
                Correct

                MathHelper.add()

                MathHelper.multiply()

                Real Example

                Math.random()

                Math.max()

                Math.min()

                These are all Static Methods.
                */