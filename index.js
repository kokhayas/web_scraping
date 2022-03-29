const puppeteer = require("puppeteer")

async function main() {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto("https://www.cnn.co.jp/");
	// await page.waitForResponse();
	const titles = await page.evaluate(() => {
		// document.querySelector("input").value = "@gmail.com"
		return Array.from(document.querySelectorAll("li .list-news-line")).map(e => e.textContent)
	});
	await page.goto("")
	console.log(titles);
}

main()
