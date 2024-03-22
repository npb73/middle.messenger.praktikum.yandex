import { ChatsApi, IAddUsers, ICreateChat, IDeleteChat } from '../api/ChatsApi';
import { store } from '../utils/Store';
import MessageController from './MessageController';
// import { store } from '../utils/Store';

class ChatsController {
  private api = new ChatsApi();

  async createChat(data: ICreateChat) {
    try {
      await this.api.createChat(data);
      this.getChats();
      // add
    } catch (error) {
      console.log(error);
    }
  }

  async deleteChat(data: IDeleteChat) {
    try {
      await this.api.deleteChat(data);
      await this.getChats();
    } catch (error) {
      console.log(error);
    }
  }

  async getChats() {
    try {
      const chats = await this.api.getChats();
      chats.map(async chat => {
        const token = await this.getToken(chat.id)!;

        await MessageController.connect(chat.id, token);
      });
      store.set('chats', chats);
      // add
    } catch (error) {
      console.log(error);
    }
  }

  async addUsers(data: IAddUsers) {
    try {
      await this.api.addUsers(data);
      const { chatId } = data;
      await this.api.getUser(chatId);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUsers(data: IAddUsers) {
    try {
      await this.api.deleteUsers(data);
      const { chatId } = data;
      await this.api.getUser(chatId);

      // add
    } catch (error) {
      console.log(error);
    }
  }

  getToken(id: number) {
    try {
      return this.api.getToken(id);
    } catch (e) {
      throw new Error();
    }
  }
}

export default new ChatsController();
