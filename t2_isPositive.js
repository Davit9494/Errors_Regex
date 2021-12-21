"use strict";
/*Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:
. If a is 0, throw an Error with message = Zero Error.
. If a is negative, throw an Error with message = Negative Error.*/
function isPositive(a) {
  try {
    if (a > 0) {
      console.log("YES");
    } else if (a === 0) {
      throw new Error("a = Zero Error");
    } else if (a < 0) {
      throw new Error("a = Negative Error");
    } else if (isNaN(a)) {
      throw new Error(`${a} is not a number`);
    }
  } catch (err) {
    return err.message;
  }
}
console.log(isPositive(-1));
