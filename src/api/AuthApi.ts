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

export class AuthApi extends API {
  constructor() {
    super('/auth');
  }

  signin(data: ISignInData): Promise<void> {
    return this.http.post('/signin', data);
  }

  signup(data: ISignUpData): Promise<void> {
    return this.http.post('/signup', data);
  }

  getUser(): Promise<IUser> {
    return this.http.get('/user');
  }

  logout(): Promise<void> {
    return this.http.post('/logout');
  }
}
