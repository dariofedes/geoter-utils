const { expect } = require('chai')
const isValidEmail = require('./is-valid-email')

describe('isValidEmail', () => {
    it('should return true on valid email template', () => {
        const result = isValidEmail(`${Math.random().toString()}@somedomain.com`)
        expect(result).to.be.equal(true)
    })

    it('should return false on non valid email template', async () => {
        let result = isValidEmail(`${Math.random().toString()}@somedomain.111`)
        expect(result).to.be.equal(false)

        result = isValidEmail(`${Math.random().toString()}@somedomain`)
        expect(result).to.be.equal(false)

        result = isValidEmail(`${Math.random().toString()}somedomain.com`)
        expect(result).to.be.equal(false)

        result = isValidEmail(`${Math.random().toString()}somedomaincom`)
        expect(result).to.be.equal(false)
    })

    it('should return false on non string', async () => {
        let result = isValidEmail(1)
        expect(result).to.be.equal(false)

        result = isValidEmail(true)
        expect(result).to.be.equal(false)

        result = isValidEmail(undefined)
        expect(result).to.be.equal(false)

        result = isValidEmail(null)
        expect(result).to.be.equal(false)

        result = isValidEmail({ foo: 'bar' })
        expect(result).to.be.equal(false)

        result = isValidEmail(['foo'])
        expect(result).to.be.equal(false)
    })
})