function handleNum(number, handleEven, handleOdd) {
  if (number % 2 === 0) {
    console.log(handleEven());
  } else {
    console.log(handleOdd());
  }
}

function handleEven() {
  return "number is even";
}

function handleOdd() {
  return "number is odd";
}

handleNum(10, handleEven, handleOdd);
handleNum(11, handleEven, handleOdd);
