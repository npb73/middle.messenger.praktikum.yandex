import { API } from './api';

export type ISignInData = {
  login: string;
  password: string;
};

export type ISignUpData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type IUser = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
};
export type ICreateChat = {
  title: string;
};
export type IDeleteChat = {
  chatId: number;
};

export type IGetChat = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: IUser;
    time: string;
    content: string;
  };
};
export type IAddUsers = { chatId: number; users: number[] };

export class ChatsApi extends API {
  constructor() {
    super('/chats');
  }

  createChat(data: ICreateChat): Promise<void> {
    return this.http.post('/', data);
  }

  deleteChat(data: IDeleteChat): Promise<void> {
    return this.http.delete('/', data);
  }

  getUser(id: number): Promise<Array<IUser & { role: string }>> {
    return this.http.get(`/${id}/users`);
  }

  getChats(): Promise<IGetChat[]> {
    return this.http.get('/');
  }

  addUsers(data: IAddUsers): Promise<void> {
    return this.http.put('/users', data);
  }

  deleteUsers(data: IAddUsers): Promise<void> {
    return this.http.delete('/users', data);
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }
}
