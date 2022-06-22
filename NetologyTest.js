const { chromium } = require("playwright");
const user = require('../jsaqa_7-03_02/user.js');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });

  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.fill('input[name="email"]', user.login);
  await page.fill('input[name="password"]', user.password);
  //await page.pause();
  await page.click("text=Войти");
  await expect(page.locator('h2')).toHaveText("Мои курсы и профессии");
  await browser.close();
})();
(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });

  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.fill('input[name="email"]', '12345@nest.ru');
  await page.fill('input[name="password"]', '1234567');
  //await page.pause();
  await expect(page.locator("text=Вы ввели неправильно логин или пароль")).toBeVisible();
  await browser.close();
})();