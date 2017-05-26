import { browser, element, By, $ } from 'protractor'
import { SearchPage } from '../pageObjects/searchPage'

describe('Search', function () {
    let searchPage = new SearchPage()

    beforeEach(() => {
        searchPage.open()
    })

    afterEach(() => {
        browser.manage().deleteAllCookies()
    })

    it('should have correct field placeholder', function () {
        expect(searchPage.getSearchFieldPlaceHolder()).toEqual('Search for movies...', 'Placeholder is not what was expected')
    })

    it('should be successful with valid search request', function () {
        searchPage.search('Matrix')
        browser.sleep(5000)
        expect(searchPage.searchResults.count()).not.toBe(0, 'Search results should not be empty')
        let firstSearchRes = searchPage.searchResults.first()
        expect(firstSearchRes.getText()).toContain('Matrix', 'First search result should contain search request')
    })
})