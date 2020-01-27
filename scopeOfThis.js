function test() {
  console.log("A function: " + this);
}

var test2 = {
  example: function() {
    (function() {
      console.log("Anonymous function inside a function on a object: " + this);
    })();

    (function(scope) {
      this.self = scope;
      console.log(
        "Anonymous function inside a function on a object with this passed as argument: " +
          self
      );
    })(this);

    console.log("Function inside a object: " + this);
  }
};

test();

test2.example();

// RESULT
// A function: [object global]
// Anonymous function inside a function on a object: [object global]
// Anonymous function inside a function on a object with this passed as argument: [object Object]
// Function inside a object: [object Object]
