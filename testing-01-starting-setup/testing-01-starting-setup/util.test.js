const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Pratik", 19);
  expect(text).toBe("Pratik (19 years old)");
});

test("should generate valid  text output", () => {
  const text = checkAndGenerate("Pratik", 19);
  expect(text).toBe("Pratik (19 years old)");
});

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///E:/javascript%20revision%20in%20vacation/code/testing-01-starting-setup%20(1)/testing-01-starting-setup/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "Pratik");
  await page.click("input#age");
  await page.type("input#age", "19");
  await page.click("button#btnAddUser");

  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Pratik (19 years old)");
}, 10000);
