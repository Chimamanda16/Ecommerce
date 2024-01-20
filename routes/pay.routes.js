//Get request for the main page
const express = require('express');
const path = require("path");
const puppeteer = require('puppeteer');
const cheerio = require("cheerio");
const fs = require("fs");
const payRouter = express.Router();

payRouter.post('/pay', (req, res) =>{


    (async () => {
        const filePath = path.join(__dirname, '..', 'payment.html');
        const browser = await puppeteer.launch({
            headless: 'new'
        });
        const page = await browser.newPage();
        const fileUrl = `file://${process.cwd()}/index.html`;
        // await page.goto(fileUrl);
        // const htmlContent = await page.content();
        // console.log(htmlContent);

        // const $ = cheerio.load(htmlContent);
        // const cart = $("div.cart-content");
        res.sendFile(filePath);
        //     console.log(cart);

        // const modifiedHtml = $.html();
            
    })();
      






    
});

module.exports = payRouter;