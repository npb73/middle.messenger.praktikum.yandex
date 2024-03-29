import { Routes } from '../../main';
import { IChangePasswordData, IChangeProfileData, UsersApi } from '../api/UsersApi';
import Router from '../utils/Router';
import AuthController from './AuthController';

class UsersController {
  private api = new UsersApi();

  async changeProfile(data: IChangeProfileData) {
    try {
      await this.api.changeProfile(data);

      await AuthController.fetchUser();

      Router.go(Routes.ProfileRoure);
    } catch (error) {
      console.log(error);
    }
  }

  async changeProfileAvatar(data: FormData) {
    try {
      await this.api.changeProfileAvatar(data);

      AuthController.fetchUser();

      Router.go(Routes.ProfileRoure);
    } catch (error) {
      console.log(error);
    }
  }

  async changePassword(data: IChangePasswordData) {
    try {
      await this.api.changePassword(data);

      Router.go(Routes.ProfileRoure);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UsersController();
