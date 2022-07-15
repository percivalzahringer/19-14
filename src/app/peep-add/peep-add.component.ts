import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-peep-add',
  templateUrl: './peep-add.component.html',
  styleUrls: ['./peep-add.component.css']
})
export class PeepAddComponent implements OnInit {

  user: User = {
    id: 0,
    name: null!,
    act: null!,

  };
  users: User[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveUser() {
    this.users = JSON.parse(localStorage.getItem('users') as string);
    if (
      this.users?.length != 0 &&
      this.users[this.users.length - 1].hasOwnProperty('id')
    )
      this.user.id = this.users[this.users.length - 1].id + 1;
    else this.user.id = 0;

    this.users.push(this.user);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.router.navigate(['/Peepol']);
  }
}
