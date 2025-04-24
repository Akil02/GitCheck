const { devices } = require("@playwright/test");

module.exports = {
  testDir: "./tests",
  timeout: 30000,
  retries: 2,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: "Chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    /*   {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "WebKit",
      use: { ...devices["Desktop Safari"] },
    },  */
  ],
};
