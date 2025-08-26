exports.config = {
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost:3000",
      show: true,
      windowSize: "1200x900",
    },
  },
  include: {
    I: "./steps_file",

    homePage: "./pages/home.ts",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: ["./step_definitions/home_steps.ts"],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    eachElement: {
      enabled: true,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./*_test.ts",
  name: "testes-e2e",
};