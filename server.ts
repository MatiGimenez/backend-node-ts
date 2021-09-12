import "reflect-metadata";
import app from "./src/app";
import connection from './src/database'

const PORT: number = 3000;

const setUpServer = async () : Promise<void> => {
  try {
    await Promise.all([connection, app.listen(PORT)])
    
    console.log(
      `Server now running on localhost:${PORT}`,
      `Connected to database successfully at ${process.env.DB_NAME}`
    )
  } catch (error) {
    console.error(`Couldn't start the app: ${error}`)
  }
}

setUpServer()
