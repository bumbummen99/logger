import { expect } from 'chai'
import Logger from '../src/index.js'
import 'mocha-sinon'

describe('Logger', function() {
  beforeEach(function() {
    this.sinon.stub(console, 'log')
  })

  it('should log to the console', function() {
    Logger.setVerboseness('Test', 4)
    Logger.verbose('Test', 3, 'Hello, World!')
    // @ts-ignore
    expect( console.log.calledOnce ).to.be.true
    // @ts-ignore
    expect( console.log.calledWith('[Test][3] Hello, World!') ).to.be.true;
  })

  it('should log not to the console if verbosity is too low', function() {
    Logger.setVerboseness('Test', 1)
    Logger.verbose('Test', 3, 'Hello, World!')
    // @ts-ignore
    expect( console.log.calledOnce ).to.be.false
  })
})
