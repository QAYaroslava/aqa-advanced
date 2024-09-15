function checkOrder (available, ordered) {
    if (available < ordered) {
        console.log("Your order is too large, we do not have enough goods.");
        return;
    } else if (ordered === 0) {
        console.log("Your order is empty");
        return;
    } else {
        console.log("Your order is accepted");
    }
}
checkOrder(400,450)
checkOrder(400, 0)
checkOrder(1000, 450)