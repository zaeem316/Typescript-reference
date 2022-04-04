/* Basic  */
let age: number = 27
let full_name: string = 'zaeem'
let is_male: boolean = true

/* Array  */
let arr: number[] = [1, 2, 3, 4]

/* Tuples  */
let bio: [string, number, boolean] = ['Zaeem', 27, true]

/* Tuple Array  */
let employee: [string, number][] = [
    ['zaeem', 27],
    ['hassan', 28],
    ['farhan', 34]
]


/* Union  */
let uid: string | number = 2


/* Enums  */
enum Direction {
    Up,
    Down,
    Left,
    Right
}


/* Objects  */
let user: {
    id: number,
    name: string
} = {
    id: 3,
    name: 'zaeem'
}


/* Custom types and refactoring object  */
type user = { id: number, name: string }

let user2: user = {
    id: 2,
    name: 'zaeem'
}


/* Type Assertion or Type Casting */
let unique_key: any = '33'
let key1 = <number>unique_key /* syntax 1 */
let key2 = unique_key as number /* syntax 2 */



/* Function  */
function addSum(x: number, y: number): number {
    return x + y
}


/* Interfaces  */
interface UserInterface {
    id: number,
    readonly name: string, /* readonly property */
    age?: number /* optional property */
}

let user3: UserInterface = {
    id: 3,
    name: 'zaeem',
    age: 27 /* optional property */
}



/* Interfaces in functions */
interface MathFunc {
    (x: number, y: number): number
}

let add: MathFunc = (x, y) => x + y



/* Classes */
class Person {
    constructor(id: number, name: string) {
        this.id = id,
            this.name = name
    }
    id: number
    name: string
}

const zaeem = new Person(4, 'zaeem')



/* Generics */
function reverseArr<T>(x: T, y: T, z: T): [T, T, T] {
    return ([z, y, x])
}

console.log(reverseArr<number>(1, 2, 6))
console.log(reverseArr<string>('zaeem', 'farhan', 'talha'))
console.log(reverseArr<boolean>(true, true, false))