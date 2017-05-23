

console.log('########')
describe('1: ', function () {
    console.log('inside describe')

    beforeAll(function () {
        console.log('BEFORE ALL!')
    })

    beforeEach(function () {
        console.log('BEFORE EACH!')
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

    describe('INVALID ', function () {
        if (true) {
            beforeEach(function () {
                console.log('invalid before each')
            })
        }
        let condition = false
        if (condition) {
            beforeEach(function () {
                console.log('invalid before each')
            })
        }


        it('3', function () {
            console.log('Test 3 !')
        })

    })

    let mytest = function () {
        console.log('Test 1 !')
    }

    let myTestName = '1'

    it(myTestName, mytest)

    it('2', function () {
        console.log('Test 2 !')

        let myText = 'Some text'
        expect(true).toBeTruthy(`My nice element should ${myText}`)
    })

    console.log('inside describe, after declaring it')
})
