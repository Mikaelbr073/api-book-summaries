import express from "express"
import { Request, Response } from "express"
import { config } from "dotenv"
import { MongoGetUsersRepository } from "./repository/get-users/mongo-get-users"
import { GetUsersController } from "./controllers/get-users/get-users"

config()
const app = express()

app.get("/users", async (req: Request, res: Response) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepository)
  const {body, statusCode} = await getUsersController.handle();
  res.send(body).status(statusCode)
})

app.listen(process.env.PORT || 8000, () =>
  console.log(`listening on port ${process.env.PORT}`),
)
