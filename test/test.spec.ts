import { jest } from '@jest/globals'
import Logger from '../src/index'

test('should log not to the console if verbosity is too low', () => {
  const mock = jest.fn()
  console.log = mock

  Logger.setVerboseness('Test', 4)
  Logger.verbose('Test', 3, 'Hello, World!')

  expect(mock.mock.calls.length).toBeTruthy()
  // @ts-ignore
  expect(mock.mock.lastCall[0]).toBe('[Test][3] Hello, World!')
})


test('should log not to the console if verbosity is too low', () => {
  const mock = jest.fn()
  console.log = mock

  Logger.setVerboseness('Test', 1)
  Logger.verbose('Test', 3, 'Hello, World!')

  expect(mock.mock.calls.length).toBeFalsy()
})