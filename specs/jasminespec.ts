// Docs: https://jasmine.github.io/edge/introduction

// Describe is like a test suite, but describes test for one feature
describe('Search should be', function () {
    beforeAll(function () {
        console.log('BEFORE ALL!')
    })

    beforeEach(function () {
        console.log('BEFORE EACH!')
    })

    afterEach(function () {
        console.log('AFTER EACH!')
    })

    afterAll(function () {
        console.log('AFTER ALL!')
    })

    // Nested describes allowed!
    describe('unsucessful', function () {

        it('when invalid movie name used', function () {
            console.log('passed!')
        })

    })

    it('successful when valid movie name used', function () {
        console.log('passed!')

        expect(true).toBeTruthy(`This is error message, that will be thrown if assertion fail`)
    })


    xdescribe('xdescribe - to mark block as SKIPPED', function () {
        it('this will not be executed', function () {
            console.log('you should never see this message in console!')
        })
    })

    xit('xit - is to mark "it" block as SKIPPED', function () {
        console.log('you should never see this message in console!')
    })
})

// fdescribe - to focus specific suite - only this suite will be executed
// fit - to focus specific it block - only this it block will be executed
