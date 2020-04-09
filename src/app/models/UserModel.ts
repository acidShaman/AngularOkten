import {PostModel} from './PostModel';

export class UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  posts: PostModel[] = []; // надо сразу создать обьетк, т.к. мы туда будем рушить ПОСТЫ!!!
}
