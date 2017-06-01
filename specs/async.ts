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

    it('async', function () {

        $('div').getText().then((text) => {
            console.log('#####', text)
        })

        $('input').getAttribute('placeholder')
            .then((placeholder) => {
                console.log('#####', placeholder)
            })

    })


    it('async', function () {
        let text;
        $('div').getText().then((txt) => {
            text = txt
        })
        console.log(text)

        $('').getText().catch((err)=> {
        })

        $('').getText().then(undefined, (err)=> {
        })

        new Promise(function (resolve, reject){}).catch

    })

})