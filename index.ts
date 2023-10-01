import shuffle from './src/shuffle'
import radixSort from './src/radixSort'

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

shuffle(array)

console.log(`Shuffled array: ${array.join(', ')}`)

radixSort(array)

console.log(`Sorted array: ${array.join(', ')}`)
