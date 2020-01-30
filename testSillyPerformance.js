// This is a very silly test to see if there would be any lost of
// performance just by adding a function in the process of a simple sum

function testSumWithtoutFunction(sumToMake) {
  var start = new Date();

  for (i = 0; i < sumToMake; i++) {
    100 + 200;
  }

  var end = new Date() - start;
  console.info("Execution time without function: %dms", end);
}

function testSumWithFunction(sumToMake) {
  var start = new Date();

  for (i = 0; i < sumToMake; i++) {
    sum();
  }

  function sum() {
    100 + 200;
  }

  var end = new Date() - start;
  console.info("Execution time with function: %dms", end);
}

var timesToSum = 1000000000;

testSumWithtoutFunction(timesToSum);
testSumWithFunction(timesToSum);

// RESULT
// Execution time without function: 1874ms
// Execution time with function: 1890ms
