import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpack_config from './../webpack.config.dev'

/* eslint-disable no-console */

const port = 3000
const app = express()

// Use webpack compiler
const compiler = webpack(webpack_config)
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo : true,
  publicPath : webpack_config.output.publicPath
}))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('Listening on: http://localhost:' + port)
  }
})
