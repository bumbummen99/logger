import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import Logger from '../src/index.js'

describe('Logger', function() {

  this.beforeEach(function() {
    this.stub = sinon.stub(global.console, 'log')
  })

  this.afterEach(function() {
    this.stub.restore()
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
