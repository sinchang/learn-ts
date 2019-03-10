// boolean
let isDone: boolean = false

// number
let decimal: number = 1

// string
let color: string = 'red'

// array
let list1: number[] = [1, 2, 3]
let list2: Array<number> = ([] = [12, 3, 4])

// tuple
let x: [string, number]
x = ['hello', 2]
// x = [2, 'hello'] // error
console.log(x)

// enum
enum Color {
  Green = 1,
  Red,
  Blue
}
let c: Color = Color.Red // 2
let colorName: string = Color[2] // Red
console.log(c)
console.log(colorName)

// any
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // okay, definitely a boolean

let list3: any[] = [1, true, 'free']

list3[1] = 100

// void
function warnUser(): void {
  console.log('This is my warning message')
}

let unusable: void = undefined // Declaring variables of type void is not useful because you can only assign undefined or null to them

// null undefined

// never
function error(message: string): never {
  throw new Error(message)
}

// object
declare function create(o: object | null): void

create({ prop: 0 }) // OK
create(null) // OK
create(42) // Error
create('string') // Error
create(false) // Error
create(undefined) // Error
