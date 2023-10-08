type Unit = 'B' | 'KB' | 'MB' | 'GB' | 'TB'

interface IStorage {
  number: number
  unit: Unit
}

export function formatStorageNumberToObj(
  size: number,
  decimal: number = 0
): IStorage {
  let number: number = size
  let unit: Unit = 'B'
  let count: number = 0

  while (number >= 1024 && count < 4) {
    number = number / 1024
    count++
  }

  switch (count) {
    case 0:
      unit = 'B'
      break
    case 1:
      unit = 'KB'
      break
    case 2:
      unit = 'MB'
      break
    case 3:
      unit = 'GB'
      break
    case 4:
      unit = 'TB'
      break
    default:
      unit = 'TB'
  }

  return {
    number: Number(number.toFixed(decimal)),
    unit
  }
}
