function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}
f([1, 2])

let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}

let { a, b }: { a: string; b: number } = o
