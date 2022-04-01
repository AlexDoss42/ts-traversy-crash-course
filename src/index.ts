// basic types

let id: number = 5;
let company: string = 'Doss Capital';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number

x = true
age = 30

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,2,'hello world']

// Tuple
let person: [number, string, boolean] = [1, 'bob', true]

//  Tuple Array 

let employee: [number, string][]

employee = [
    [1, 'jane'],
    [2, 'jill'],
    [3, 'jack'],
    [4, 'john'],
]

let ssid: string | number = 22
ssid = '22'

// Enum

enum Dircetion1 {
    Up = 1,
    Down,
    Left,
    Right
}

// objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Jacob'
}

// Type Assertion

let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}