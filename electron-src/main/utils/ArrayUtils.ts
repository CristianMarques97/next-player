export default class ArrayUtils {
  static shufflePlaylist = (playlist: any[]) => {
    const p = playlist
    for (let i = p.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[p[i], p[j]] = [p[j], p[i]]
    }
    return p
  }

  // Example output
  // input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  // output: [1,4,7,2,5,8,3,6,9]
  static joinArrays(arr: any) {
    const array = Array.from(
      {
        length: Math.max(...arr.map((o: any) => o.length)), // find the maximum length
      },
      (_, i) => arr.map((r: any) => r[i] ?? null) // create a new row from all items in same column or substitute with null
    ).flat()

    return array.filter((a) => a?.id)
  }

  static removeRepeatedItens(array: any[], field: any) {
    return array.filter(
      (value, index, self) =>
        index === self.findIndex((m) => m[field] === value[field])
    )
  }
}
