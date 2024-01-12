// Les variables
const myFloat = 3.14;
const myNumber = 42;
const myString = "Hello World";
const myBoolean = true;

const nullVariable = null;
const undefinedVariable = undefined;

const text = "Hello World";
const text2 = "Hello World";

if (text === text2) {
  console.log("text === text2");
}

const symbol = Symbol("foo");
const symbol2 = Symbol("foo");

if (symbol !== symbol2) {
  console.log("symbol !== symbol2");
}

// Les opérateurs

// Les opérateurs arithmétiques

const addition = 1 + 1;
const soustraction = 1 - 1;
const multiplication = 1 * 1;
const division = 1 / 1;
const modulo = 1 % 1;

// Les opérateurs de comparaison
const egalite = 1 === 1;
const inegalite = 1 !== 1;
const superieur = 1 > 1;
const superieurOuEgal = 1 >= 1;
const inferieur = 1 < 1;
const inferieurOuEgal = 1 <= 1;

// Les opérateurs logiques

const et = true && true;
const ou = true || false;
const non = !true;

// Les opérateurs d'affectation

let myVariable = 1;
myVariable += 1;
myVariable -= 1;
myVariable *= 1;
myVariable /= 1;
myVariable %= 1;

// Les opérateurs de concaténation

const myConcatenation = "Hello" + "World";
const myConcatenation2 = "Hello" + 42;
const myConcatenation3 = "Hello" + true;
const myConcatenation4 = "Hello" + null;
const myConcatenation5 = "Hello" + undefined;
const myConcatenation6 = "Hello" + Symbol("foo");

const myConcatenation7 = `Hello ${myVariable}`;

// Les opérateurs de type

const myType = typeof 42;
const myType2 = typeof "Hello";
const myType3 = typeof true;
const myType4 = typeof null;
const myType5 = typeof undefined;

console.log(myType);

// Les opérateurs de conversion

const myNumber2 = Number("42");
const myString2 = String(42);
const myBoolean2 = Boolean(42);
const myBoolean3 = Boolean(0);
const myBoolean4 = Boolean("");
const myBoolean5 = Boolean(null);
const myBoolean6 = Boolean(undefined);

// Les structures de contrôle

// Les conditions

if (true) {
  console.log("Hello World");
  if (true) {
    console.log("Hello World");
    if (true) {
      console.log("Hello World");
      const myFunction = () => {
        console.log("Hello World");
      };
    }
  }
}

if (true) {
  console.log("Hello World");
} else if (true) {
  console.log("Hello World");
} else {
  console.log("Hello World");
}

// Les boucles

for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (true) {
  console.log("Hello World");
}

do {
  console.log("Hello World");
} while (true);

const array = ["pascal", "pascal", "pascal", "pascal", "pascal", "pascal"];

array.map((element) => {

  const lastName = " legrand";
  return element + lastName;

});


// Les fonctions

function myFunction() {}

const myFunction2 = function () {};

const myFunction3 = () => {};

// Les tableaux

const monChiffre = 42;
const myArray = [];
const myArray2 = [1, 2, 3];
const myArray3 = ["Hello", "World"];
const myArray4 = [true, false];
const myArray5 = [null, undefined];
const myArray6 = [Symbol("foo"), Symbol("bar")];
const myArray7 = [1, "Hello", true, null, undefined, Symbol("foo")];

myArray.push(1);
myArray.pop();

// Les objets

const myObject = {};
const myObject2 = {
  foo: "bar",
  bar: "foo",
};
const myObject3 = {
  foo: 1,
  bar: 2,
};

// Les classes

class MyClass {
  foo = "bar";
  constructor(name) {
    this.name = name;
  }
}

// Les méthodes

class MyClass2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  myMethod() {
    console.log("Hello World");
  }
}

// Les propriétés

class MyClass3 {
  myProperty = "Hello World";
}

// Les paramètres

class MyClass4 {
  myMethod(myParameter) {
    console.log(myParameter);
  }
}

// Les constructeurs

class MyClass5 {
  constructor(myParameter) {}

  myMethod() {
    console.log("Hello World");
  }
}

// Les héritages

class MyClass6 extends MyClass5 {
  constructor(myParameter) {
    super(myParameter);
  }

  myMethod() {
    console.log("Hello bonsoir");
    super.myMethod();
  }
}

new MyClass6("Hello World").myMethod();
