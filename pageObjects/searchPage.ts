import { browser, element, By, $, $$ } from 'protractor'
import { BasePage } from './basePage'

export class SearchPage extends BasePage {
    public searchResults = $$('movies>.jumbotron+div movie-card')
    public searchField = $('input.form-control')
    public URL = ''

    search(text: string) {
        this.typeIntoSearchField(text)
        browser.sleep(1500)
        $('span.input-group-btn button.btn.btn-primary').click()
    }

    typeIntoSearchField(text: string) {
        this.searchField.sendKeys(text)
    }

    submitSearch() {
        this.searchField.submit()
    }

    getSearchFieldPlaceHolder() {
        return this.searchField.getAttribute('placeholder')
    }
}