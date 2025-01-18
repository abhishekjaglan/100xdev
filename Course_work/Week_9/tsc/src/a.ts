let a: number = 5;
console.log(a);

function helloWorld(firstName: string, lastName?: string):void{
    console.log(`Hello fellow coder ${firstName}`);
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
};

const user: User = {
    firstName:"abhishek",
    lastName:"jaglan",
    email:"abhishek@gmail.com",
    age: 24,
};

interface Person {
    name: string;
    age: number;
    greet(phrase:string):void;
};

class Employee implements Person{

    constructor(
        public name: string,
        public age: number        
        ){
            this.name = name;
            this.age = age;
    };

    public greet(phrase:string):void {
        console.log(`${phrase} - ${this.name}`)
    }
};

enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
};

type Input = number | string;

function getFirstEl<T>(arr: T[]){
    return arr[0];
}

const val = getFirstEl(['Abhishek','Jaglan']);
console.log(val);
const val2 = getFirstEl([1,2]);
console.log(val);

console.log(Direction.Up, Direction.Left);

const abhi = new Employee('Abhishek', 24);
console.log(abhi.greet('Hey wasssuuppppp'));

function isLegal(input: User):boolean{
    return input.age >= 18 ? true : false;
}

function runAfterOneSec(fn: () => void):void {
    setTimeout(fn, 1000);
};

runAfterOneSec(() => {
    console.log("Inside runAfterOneSec!");
})

console.log(isLegal(user));

helloWorld('abhishek');