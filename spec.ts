import { browser, element, By } from 'protractor'

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


describe('selectors', function () {
    /*
        +By.buttonText
        +By.className
        By.css
        By.cssContainingText
        +By.linkText
        +By.name
        +By.partialButtonText
        +By.partialLinkText
        +By.tagName
    */

    it('by buttonText', function () {
        browser.get('')

        expect(element(By.buttonText('Go!')).isDisplayed()).toBeTruthy()
    })

    it('by partialButtonText', function () {
        let goButton = element(By.partialButtonText('Go'))
        expect(goButton.isDisplayed()).toBeTruthy()
        expect(goButton.getText()).toEqual('Go!')
    })

    it('by classname', function () {

        expect(element(By.className('navbar-fixed-top')).isDisplayed()).toBeTruthy()
    })

    it('by linktext', function () {
        let actionsLink = element(By.linkText('Action'))

        expect(actionsLink.isDisplayed()).toBeTruthy()
        expect(actionsLink.getText()).toEqual('Action')
    })

    it('by partialLinkText', function () {
        let actionsLink = element(By.partialLinkText('TV'))

        expect(actionsLink.isDisplayed()).toBeTruthy()
        expect(actionsLink.getText()).toEqual('TV Movie')
    })

    it('by name', function () {
        let seachField = element(By.name('searchStr'))

        expect(seachField.isDisplayed()).toBeTruthy()
        expect(seachField.getAttribute('name')).toEqual('seachField')
    })

    it('by tagName', function () {
        let inputElem = element(By.tagName('input'))

        expect(inputElem.getTagName()).toEqual('input')
    })

})