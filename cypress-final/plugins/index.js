const exerciseConfig = {
  baseUrl: 'http://localhost:3000',
  integrationFolder: 'cypress/e2e',
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  supportFile: 'cypress/support/index.js',
  pluginsFile: 'cypress/plugins/index.js',
  fixturesFolder: 'cypress/fixtures',
}

module.exports = (on, config) => {
  if (config.env.configFile === 'exercises') {
    Object.assign(config, exerciseConfig)
  }
  return config
}
