function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Type of argument must be number");
    } else if (denominator === 0) {
        throw new Error("Value cannot be 0");
    }
    return numerator / denominator;
}

try {
    console.log(divide(10, 2));
} catch (error) {
    console.log(`${error.message}`);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(6, 0));
} catch (error) {
    console.log(`${error.message}`);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, "c"));
} catch (error) {
    console.log(`${error.message}`);
} finally {
    console.log("Робота завершена");
}
