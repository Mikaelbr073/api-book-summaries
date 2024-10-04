import { User } from "@/Models/user"
import { HttpResponse } from "@/controllers/protocols"

export interface IGetUserController {
  handle(): Promise<HttpResponse<User[]>>
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>
}
