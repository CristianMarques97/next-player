export default class ArrayUtils {
  static SplitTrayMenu(menu: any[]) {
    const result = []
    let tempArray = []

    menu.forEach((element) => {
      if (element?.isDivider === true) {
        result.push(tempArray)
        tempArray = []
      } else {
        tempArray.push(element)
      }
    })

    // Push the last collected array if there are any remaining elements
    if (tempArray.length > 0) {
      result.push(tempArray)
    }

    return result
  }

  static shuffleArray<T>(array: T[]): T[] {
    // Create a copy of the array to avoid mutating the original array
    const shuffledArray = array.slice()

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1))

      // Swap the elements at indices i and j
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }

    return shuffledArray
  }
}
