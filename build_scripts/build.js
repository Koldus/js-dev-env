/* eslint-disable no-console, no-unused-vars */

import webpack from 'webpack'
import webpackConfig from './../webpack.config.prod'
import chalk from 'chalk'

process.env.NODE_ENV = 'production'
console.log(chalk.blue("Generating minified bundle for production..."))

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err))
    return 1
  }

  const jsonStats = stats.toJson()

  if(jsonStats.hasErrors) {
    console.log(chalk.red("Production build was terminated with these errors: "))
    return jsonStats.errors.map( error => console.log(chalk.red(error)) )
  }

  if(jsonStats.hasErrors) {
    console.log(chalk.yellow("Webpack generated some warnings during the production build: "))
    jsonStats.warnings.map( warning => console.log(chalk.yellow(warning)) )
  }

  console.log(`Webpack stats: ${stats}`)

  console.log(chalk.green("Production build was completed. the code can be found under /dist"))

  return 0
})
