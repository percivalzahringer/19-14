import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-peep-edit',
  templateUrl: './peep-edit.component.html',
  styleUrls: ['./peep-edit.component.css']
})
export class PeepEditComponent implements OnInit {
  public myForm: FormGroup | undefined;
  user: User = {
    id: 0,
    name: null,
    act: null,
  };
  users: User[] = [];
  id = '';
  userAboutForm!: FormGroup;
  userIsExist = false;
  listOfData: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (this.id !== '' && this.checkUserExist(+this.id)) {
      this.userIsExist = true;
    }
    this.userAboutForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      act: [null, [Validators.required]]
    });

  }
  changeUser() {
    this.users.map((n) => (n.id === +this.id ? { ...this.user } : n));

    localStorage.setItem('users', JSON.stringify(this.users));
    this.router.navigate(['/Peepol']);
  }
  checkUserExist(id: number): Boolean {
    this.users = JSON.parse(localStorage.getItem('users') as string);

    var _user = this.users.find((user) => user.id === id);

    if (_user) {
      this.user = _user;
      return true;
    }
    return false;
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter((d: { id: string; }) => d.id !== id);
}
}
