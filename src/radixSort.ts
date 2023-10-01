export default function radixSort (array: number[]): void {
  let max = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i]
  }

  let exp = 1
  while (max / exp > 0) {
    countingSort(array, exp)
    exp *= 10
  }
}

function countingSort (array: number[], exp: number): void {
  const count = new Array(10).fill(0)
  const output = new Array(array.length).fill(0)

  for (let i = 0; i < array.length; i++) {
    count[Math.floor(array[i] / exp) % 10]++
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1]
  }

  for (let i = array.length - 1; i >= 0; i--) {
    output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i]
    count[Math.floor(array[i] / exp) % 10]--
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = output[i]
  }
}
