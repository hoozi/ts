/*interface man {
    name: string,
    age: number
}

function Person(person: man) {
    console.log(person.name,person.age);
}

Person({
    name:'hoozi',
    age: 28
})*/

/*interface SquareConfig {
    width?: number,
    height?: number,
    color?: string,
    [propName: string]: any
};

function createSquare(config: SquareConfig): {area: number, color: string} {
    var height: number = 20,
        area: number;
    if(config.width) {
        area = config.width*height;
    } 
    return {
        area: area,
        color: config.color
    }
}

createSquare({
    opacity: 0.5,
    opacity1: 0.5,
    width: 30,
    color: 'red'
})*/

interface Plus {
    (x: number, y: number): number
}

var plus: Plus = (a: number, b: number) => a+b;
var res: number = plus(1,2);
console.log(res)
/*class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog!
interface NotOkay {
    [x: string]: Animal;
    [d: number]: Dog;
}*/

/*interface ClockConstructor {
    currentTime: Date;
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}*/

/*enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
var a:any = Direction.Up;
console.log(a)*/
/*type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;*/

/*var $:{[s:string]:number} = {};

$.acc = 2;*/


/*interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};*/

import * as m from 'V';



