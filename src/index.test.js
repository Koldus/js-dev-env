import {expect} from 'chai'
import {JSDOM} from 'jsdom'
import fs from 'fs'

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  })
})

describe('index.html', () => {
  it('should have h1 that sais users', (done) => {
    // File to virtual DOM
    const index = fs.readFileSync('./src/index.html', "utf-8")
    const dom = new JSDOM(index)

    // Extract and evaluate important info
    const h1 = dom.window.document.getElementsByTagName('h1')[0]
    expect(h1.innerHTML).to.equal("Users")
    done() // for asynchronous calls

    // Clean memory
    dom.window.close()
  })
})
