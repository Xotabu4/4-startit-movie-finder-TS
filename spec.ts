import {browser, element, By} from 'protractor'

describe('Test', function () {
    it('1 test', function () {
        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(10000)
        expect(browser.getCurrentUrl()).toEqual(URL);
        expect(browser.getTitle()).toEqual('Movies Finder')
    })

    it('2 test', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)

        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(10000)

        expect(searchField.isPresent()).toBeTruthy()
        expect(searchField.isDisplayed()).toBeTruthy()
    })

    it('3 test', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)

        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(10000) 

        expect(searchField.getAttribute('placeholder')).toEqual('Search for movies...')
    })

    it('4 test', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)

        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(3000) 

        searchField.sendKeys('HELLO WORLD')
        browser.sleep(10000)
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.sleep(10000)
    })

})