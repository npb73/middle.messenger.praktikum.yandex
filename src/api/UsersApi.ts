import { API } from './api';

export type IChangePasswordData = {
  oldPassword: string;
  newPassword: string;
};

export type IChangeProfileData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export class UsersApi extends API {
  constructor() {
    super('/user');
  }

  changeProfile(data: IChangeProfileData): Promise<void> {
    return this.http.put('/profile', data);
  }

  changeProfileAvatar(data: FormData): Promise<void> {
    return this.http.put('/profile/avatar', data);
  }

  changePassword(data: IChangePasswordData): Promise<void> {
    return this.http.put('/password', data);
  }
}
