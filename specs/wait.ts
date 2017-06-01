import { browser, element, By, $, ExpectedConditions as EC, protractor } from 'protractor'

describe('Wait example', () => {

    xit('browser sleep and control flow execute', () => {
        browser.get('')
        browser.controlFlow().execute(() => {
            console.log('SLEEP FINISHED')
        })
        browser.sleep(5000).then(() => {
            console.log('THEN CALLBACK')
        })
        browser.controlFlow().execute(() => {
            console.log('SLEEP FINISHED')
        })
    })

    xit('implicit wait', () => {

        browser.get('').then(() => {
            console.log('before search')
        })
        $('NONEXIST').click().then(undefined, () => {
            console.log('CANNOT FIND ELEMENT')
        })

        browser.manage().timeouts().implicitlyWait(5000)
        $('NONEXIST').click().then(undefined, () => {
            console.log('CANNOT FIND ELEMENT')
        })
    })

    xit('explicit wait', () => {
        browser.get('')

        browser.wait(() => {
            return $('movie-card').isDisplayed()
                .then(undefined, err => false)
        }, 5000, 'Error message')

        $('movie-card').getText().then(console.log)
    })

    xit('explicit wait', () => {
        browser.get('')
        let moviecard = $('movie-card')
        browser.wait(EC.visibilityOf(moviecard),
            5000, 'Error message')

        moviecard.getText().then(console.log)

        browser.wait(EC.and(
            EC.not(EC.titleContains('asdf')),
            EC.urlContains('http'),
        ), 5000, 'Error message')
    })

    xit('explicit wait and implicit wait', () => {
        //browser.manage().timeouts().implicitlyWait(4000)
        browser.get('')

        browser.wait(() => {
            console.log('triggered EC ', new Date().valueOf())
            return EC.visibilityOf($('NONEXIST'))()
        }, 5000, 'Error message')
    })


    xit('browser actions', () => {
        browser.get('')
        let button = $('span.input-group-btn button.btn.btn-primary')

        browser.actions()
            .mouseMove(button)
            .perform()
        browser.sleep(10000)

    })
})