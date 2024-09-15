function checkOrder (available, ordered) {
    if (available < ordered) {
        return ("Your order is too large, we do not have enough goods.");
    } else if (ordered === 0) {
        return ("Your order is empty");
    } else {
        return ("Your order is accepted");
    }
}
console.log(checkOrder(400,450))
console.log(checkOrder(400,0))
console.log(checkOrder(1000,450))