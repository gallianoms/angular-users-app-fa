import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css'],
})
export class UserNewComponent implements OnInit {

  @Output() createNewUserEvent = new EventEmitter();

  newUser = new User();

  constructor() { }

  ngOnInit() {
  }

  createUser() {
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }

}
