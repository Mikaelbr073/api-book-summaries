import { IGetUsersRepository } from "@/controllers/get-users/protocols"
import { User } from "@/Models/user"

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Mikael",
        lastName: "Carvalho",
        email: "mikaelcarvalho@gmail.com",
        password: "Mikaelbr@073",
      },
    ]
  }
}
