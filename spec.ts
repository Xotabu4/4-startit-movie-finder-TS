import { browser, element, By, $ } from 'protractor'

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

// Примеры разных селекторов
describe('Selectors', function () {
    /*
        +By.buttonText
        +By.className
        +By.css
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

    it('by linktext', function () {
        let actionsLink = element(By.linkText('Action'))

        expect(actionsLink.isDisplayed()).toBeTruthy()
        expect(actionsLink.getText()).toEqual('Action')
    })

    it('by partialLinkText', function () {
        let tvMovieLink = element(By.partialLinkText('TV'))

        expect(tvMovieLink.isDisplayed()).toBeTruthy()
        expect(tvMovieLink.getText()).toEqual('TV Movie')
    })

    it('by name', function () {
        let seachField = element(By.name('searchStr'))

        expect(seachField.isDisplayed()).toBeTruthy()
        expect(seachField.getAttribute('name')).toEqual('searchStr')
    })

    it('by tagName', function () {
        let inputElem = element(By.tagName('input'))

        expect(inputElem.getTagName()).toEqual('input')
    })

    it('by css - long form', function () {
        let searchField = element(By.css('input.form-control[name="searchStr"]'))

        expect(searchField.getAttribute('placeholder')).toBe('Search for movies...')
    }) 

    it('by css - short form', function () {
        // не забывайте про импорт $ если вы используете typescript
        let searchField = $('input.form-control[name="searchStr"]')

        expect(searchField.getAttribute('placeholder')).toBe('Search for movies...')
    })

    it('by classname', function () {
        let navbar = element(By.className('navbar-fixed-top'))
        expect(navbar.isDisplayed()).toBeTruthy()
    })


    it('by xpath', function () {
        // Warning will be here: 
        // W/element - more than one element found for locator By(xpath, //movie-card//h4/a) - the first result will be used
        let link = element(By.xpath('//movie-card//h4/a'))

        expect(link.getTagName()).toBe('a')
    })

    it('searching for element collection', function () {
        // add .all to return all elements found by this locator.
        let movieCards = element.all(By.css('movie-card'))

        let firstCard = movieCards.get(0) //or movieCards.first()
        
        // Not really stable, since first movie can be changed.
        expect(firstCard.getText()).toContain('Dilwale Dulhania')
    }) 

    it('searching for element collection 2', function () {
        // add .all to return all elements found by this locator.
        let movieCards = element.all(By.css('movie-card'))

        movieCards.each(function (elem, indx) {
            console.log('Doing assertion for element with index - ', indx)
            expect(elem.getText()).not.toContain('ERROR!')
        })
    }) 
})