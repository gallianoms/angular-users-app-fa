import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [
    new User(1, 'Salvado J', 'Galliano M', 'spantesting777@gmail.com'),
    new User(2, 'test 1', 'test 1', 'spantesting777@gmail.com'),
    new User(3, 'test 2', 'test 2', 'spantesting777@gmail.com'),
  ]

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.getUsers();
  }

  getUsers() {
    // this.userService.getUsers()
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => console.log(err)
    //   );
  }

  createUser(user: User) {
    // console.log(user);
    this.users.push(user);
  }

  deleteUser(user: User) {
    if (confirm('Are you sure to delete it?')) {
      const i = this.users.indexOf(user);
      this.users.splice(i, 1);
    }
  }

  editUser(users) {
      console.log(users);
      const i = this.users.indexOf(users.original);
      this.users[i] = users.edited;
  }

}
