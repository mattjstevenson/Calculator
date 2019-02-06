import Big from "big.js";

export default function operation(numOne, numTwo, operation) {
    const one = Big(numOne || "0");
    const two = Big(numTwo || "0");
    if (operation === "+") {
        return one.plus(two).toString();
    }
    if (operation === "-") {
        return one.minus(two).toString();
    }
    if (operation === "×") {
        return one.times(two).toString();
    }
    if (operation === "÷") {
        return one.div(two).toString();
    }
    throw Error(`Unknown Operation: '${operation}'`)
}