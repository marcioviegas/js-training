function redundant(str) {

    return function() {
        return str;
    }

}

const f1 = redundant("apple");
console.log(f1());

const f2 = redundant("pear");
console.log(f2());