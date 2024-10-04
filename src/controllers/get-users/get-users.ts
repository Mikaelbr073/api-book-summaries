import { IGetUserController, IGetUsersRepository } from "./protocols"

export class GetUsersController implements IGetUserController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers()
      return {
        statusCode: 200,
        body: users,
      }
    } catch (error) {
        const erroMessage = (error instanceof Error) ? error.message : 'unknown error';
      return {
        statusCode: 500,
        body: erroMessage
    }
        
    }
  }
}
