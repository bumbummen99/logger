import { jest } from '@jest/globals';
import Logger from '../src/index';

jest.mock('chalk')

test('should log not to the console if verbosity is too low', async () => {
  const chalk = await import('chalk');
  const mock = jest.fn();
  console.log = mock;

  Logger.setVerboseness('Test', 4);
  Logger.verbose('Test', 3, 'Hello, World!');

  expect(mock.mock.calls.length).toBeTruthy();
  expect(mock.mock.lastCall[0]).toBe(
    `[${chalk.white('Test')}][3] Hello, World!`
  );
});

test('should log not to the console if verbosity is too low', () => {
  const mock = jest.fn();
  console.log = mock;

  Logger.setVerboseness('Test', 1);
  Logger.verbose('Test', 3, 'Hello, World!');

  expect(mock.mock.calls.length).toBeFalsy();
});
