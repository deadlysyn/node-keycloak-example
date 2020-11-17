const app = require('./app')

const port = parseInt(process.env.LISTEN_PORT, 10) || 3000
const host = process.env.LISTEN_HOST || '127.0.0.1'

app.listen(port, host, () => {
  console.log(`listening on port ${host}:${port}...`)
})
