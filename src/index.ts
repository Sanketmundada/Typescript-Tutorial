/*
 * BASIC TYPES
 */

// Any
let basic: any = 3;
basic = "string";
basic = true;

// Boolean
let basic1: boolean = true;
//basic1 = "string"; /* basic1 of type boolean */

// String
const basic2: string = "string";

// Number
const basic3: number = 3;

// Array
const basic4: string[] = ["hey", "high"];

// Tuple
const basic5: [string, number] = ["hey", 4];

// undefined, null
const basic6: undefined = undefined;
const basic7: null = null;

//unknown

let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

/* Difference between unknown and any */

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
//strictlyTyped.toFixed();     // Object is of type 'unknown'.

// we can't assign unknown type variable to any variable

let unknownFoo: unknown = "string";
let anyFoo: any = "string";

const var1: string = anyFoo; // Allowed because any
//const var2: string = unknownFoo	// Not allowed, we dont know the type (Typesafe form of any)

/********************************************************************* */

/*
 * Typecasting
 */

// Implicit assumptions
const foo = "gg string"; // foo is by default string
let tooAny; // tooAny is any

// Type assertions (Type casting)

let foo1: any = "my string";
// Lets say you want to use it as string
const strLength: number = (foo1 as string).length;

/*************************************************************************/
/*
 * INTERFACES - (focuses on the shape that values have, does not have the actual implementation)
 */

interface SquareConfig {
  width: number;
  color?: string;
}
// ? -> for optional values

let newSquare: SquareConfig = { width: 100 };

/***************************************************************************/

/*
 * UNION  - |
 */

let union1: string | number; // union1 can store a string as well as a number
union1 = 100;
union1 = "Union example";
// union1=false; -> not allowed as union1 of type string | number

// union with interface

interface Foo1 {
  x: number;
  y: string;
  z: boolean;
  f?: string;
}

interface Too1 {
  h: number;
  k: string;
  z: boolean;
}

let footoo1: Foo1 | Too1 = { h: 3, k: "string", z: true, x: 3, y: "string" }; // Works

/*
let footoo2: Foo1 | Too1 = { 
	h: 3,
	y: 3,
	z: true,
}*/
// Error, Any 1 of the Foo | Goo, partial not allowed

let footoo = {} as Foo1 | Too1;

// footoo -> will contain all the elements present in BOTH.

let b = footoo.z;
// let c = footoo.k; -> this will give error // Only available in one of the two possible types

/************************************************************************* */

/*
 *   Intersection
 */

interface Hoo {
  x: number;
  k: string;
}

interface Shoo {
  h: number;
  y: number;
  z: boolean;
}

let hoo: Hoo & Shoo = {
  h: 3,
  x: 1,
  y: 1,
  z: true,
  k: "string",
}; // Just combine all the propertypes

/************************************************************************* */

/* 
    FUNCTIONS
*/
const add = (x: number, y: number): number => x + y; // No need to mention return type number
// inferred automatically by TS
const add1: (x: number, y: number) => number = (x, y) => x + y;

type AddFunc = (x: number, y: number) => number; // function explicit type
const add2: AddFunc = (x, y) => x + y; // Assigning AddFunc type to add2 which is an arrow function

/************************************************************************* */

/* 
    TYPE ALIASES  -> Create a new name for a type.
*/

type myBool = boolean | 0 | 1;

type method = "get" | "put" | "post" | "delete";

let tp: method = "get";
// let tp2 : method = "Something else";

/*********************************************************************** */

/*
    Generics
*/

//To start off, let’s do the “hello world” of generics: the identity function.
//The identity function is a function that will return back whatever is passed in.
//we could describe the identity function using the any type:

function identity1(arg: any): any {
  return arg;
}

// let s=identity1("hello");
// s.

//While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg,
//we actually are losing the information about what that type was when the function returns.

function identity2<T>(arg: T): T {
  return arg;
}

// let s=identity2("hello");
// s.                           -> autocomplete

//We’ve now added a type variable T to the identity function.
//This T allows us to capture the type the user provides (e.g. number), so that we can use that information later.
//Here, we use T again as the return type.

/****************************************************************************** */

/*
 * Extends
 */

// Extends keyword

interface Base {
  x: number;
  y: number;
}

interface Extended extends Base {
  z: number;
}

const aoo = {} as Extended;

aoo.x + aoo.y + aoo.z;

/************************************************************************ */
