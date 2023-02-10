import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {User} from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users;
  @Output() deleteUserEvent = new EventEmitter();
  @Output() editUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteUser(user: User) {
    this.deleteUserEvent.emit(user);
  }

  editUser(users) {
    this.editUserEvent.emit(users);
  }

}
