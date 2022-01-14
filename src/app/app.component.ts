import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  dataList: UserService = new UserService();
  data: User[] = this.dataList.list;
  currentUser: User = new User();

  constructor() {}

  selectUser(user: User): void {
    this.currentUser = user
  }

  updateUser(user: User): void {
    this.dataList.updateUser(user)
  }

  deleteUser(user: User): void {
    this.dataList.removeUser(user)
  }

}
