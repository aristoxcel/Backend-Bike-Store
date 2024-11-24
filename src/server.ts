import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function server() {
  try {
    await mongoose.connect(config.database_url as string)

    const port = config.port
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
// console.log(config)
server()
