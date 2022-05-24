import { expect } from 'chai'
import Logger from '../src/index'
import 'mocha-sinon'

describe('Logger', function() {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('should log to the console', function() {
    Logger.setVerbosity('Test', 4)
    Logger.verbose('Test', 3, 'Hello, World!')
    expect( console.log.calledOnce ).to.be.true
    expect( console.log.calledWith('[Test][3] Hello, World!') ).to.be.true;
  });

  it('should log not to the console if verbosity is too low', function() {
    Logger.setVerbosity('Test', 1)
    Logger.verbose('Test', 3, 'Hello, World!')
    expect( console.log.calledOnce ).to.be.false
  });
});
