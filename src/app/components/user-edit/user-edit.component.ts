import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {User} from '../../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() user: User;
  @Output() editUserEvent = new EventEmitter();

  userEdit: User = new User();

  constructor() { }

  ngOnInit() {
    Object.assign(this.editUser, this.user);
  }

  editUser() {
    this.userEdit.editable = false;
    this.editUserEvent.emit({
      original: this.user,
      edited: this.editUser
    });

  }

}
