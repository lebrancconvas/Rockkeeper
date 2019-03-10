import cheerio from 'cheerio'
import rp from 'request-promise'

rp({
    uri: `https://futureforwardparty.org/about-fwp/our-team`,
    transform: body => {
        return cheerio.load(body)
    }
}).then($ => {
    console.log(`ผมเลือก ${$('#post-1452 > div > div.info > header > a > h2').text()}`)
}).catch(e => {
    console.error(e)
})