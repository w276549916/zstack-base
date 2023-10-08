import { formatStorageNumberToObj } from '../src/index'

test("formatStorageNumberToObj(1024, 0) => { number: 1, unit: 'KB' }", () => {
  expect(formatStorageNumberToObj(1024, 0)).toEqual({ number: 1, unit: 'KB' })
})

test("formatStorageNumberToObj(1248576, 2) => { number: 1, unit: 'MB' }", () => {
  expect(formatStorageNumberToObj(1048576, 2)).toEqual({
    number: 1,
    unit: 'MB'
  })
})

test("formatStorageNumberToObj(1248576, 2) => { number: 1.19, unit: 'MB' }", () => {
  expect(formatStorageNumberToObj(1248576, 2)).toEqual({
    number: 1.19,
    unit: 'MB'
  })
})

test("formatStorageNumberToObj(1235899909892624, 2) => { number: 1124.04, unit: 'TB' }", () => {
  expect(formatStorageNumberToObj(1235899909892624, 2)).toEqual({
    number: 1124.04,
    unit: 'TB'
  })
})
