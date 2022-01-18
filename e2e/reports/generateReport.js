const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: `reports/${process.env.PLATFORM}.json`,
  output: `reports/${process.env.PLATFORM}.html`,
  name: 'REPORT WEBMOTORS APP',
  brandTitle: 'Smoke Tests',
  scenarioTimestamp: true,
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);