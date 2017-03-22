function add(x: number, y: number): number {
    return x+y;
}

function add2(x: number, y:number): number {
    return x*y;
}

add(1,2);


var a: any = "2";
var b:string = <string> a;
console.log(typeof b);