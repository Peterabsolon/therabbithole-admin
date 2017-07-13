/* eslint-disable */
const dotenv = require('dotenv')
const fs = require('fs')
const env = process.env.NODE_ENV
let envFile = '.env'

if (env) {
  envFile = `.env.${env}`
}
const envConfig = dotenv.parse(fs.readFileSync(envFile))

console.log('config', envConfig)
for (const k in envConfig) {
  process.env[k] = envConfig[k]
}
