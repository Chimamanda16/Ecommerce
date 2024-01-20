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
        const fileUrl = `file://${process.cwd()}/payment.html`;
        await page.goto(fileUrl);

        const htmlContent = await page.content();
        const $ = cheerio.load(htmlContent);
        const cart = $("div.cart-content").html();
        console.log(cart);
        await page.goto(filePath);
        const paymentPage = await page.content();
        res.send(paymentPage);

        const modifiedHtml = $.html();
        await browser.close();
            
    })();
      






    
});

module.exports = payRouter;