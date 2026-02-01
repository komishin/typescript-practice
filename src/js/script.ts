import '../css/style.css'

let greet = 'Hello World'
console.log(greet)

let isOpen: boolean = true
console.log(isOpen)

let decimal: number = 6
let float: number = 1.11
console.log(decimal)
console.log(float)

let color: string = 'blue'
let greeting: string = `Hello, ${color}`

console.log(color)
console.log(greeting)

let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

console.log(list)
console.log(list2)

let notSure: any = 4 //「any」は、何でも入れられる
notSure = 'hoge'
console.log(notSure)

let u: undefined = undefined
let n: null = null

console.log(u)
console.log(n)

let message = 'Hello, TypeScript'

console.log(message)

type UserID = number //UserID型とする
let userId: UserID = 501

console.log(userId)

type Point = {
  x: number
  y: number
}
let coord: Point = { x: 100, y: 200 }

console.log(coord)

type Response = 'yes' | 'no' | 'maybe'
let answer: Response = 'yes'

console.log(answer)

type User = {
  name: string
  age?: number //?をつけることで、変数を定義しなくて良くなる
}

let user: User = {
  name: 'Alice',
}

console.log(user)

const add = (x: number, y: number) => {
  return x + y
}
console.log(add(1, 2))

type Point1 = {
  x: number
  y: number
}

const PrintCoord = (pt: Point1): void => {
  console.log(`座標のｘ値は ${pt.x} 、y値は ${pt.y} です`)
}

PrintCoord({ x: 100, y: 100 })

type UserInfo = {
  userId?: number | null
  userName?: string
  userEmail?: string
  isAdmin?: boolean
}

const createUser = ({
  userId,
  userName = 'shibata',
  userEmail = 'shibata@google.com',
  isAdmin = false,
}: UserInfo) => {
  console.log(`User ID: ${userId}`)
  console.log(`User name: ${userName}`)
  console.log(`User Email: ${userEmail}`)
  console.log(`Is Admin: ${isAdmin}`)
}
createUser({ userId: 1, userName: 'John Doe' })
createUser({
  userId: null,
  userName: 'Jane Doe',
  userEmail: 'jane@example.com',
  isAdmin: true,
})
