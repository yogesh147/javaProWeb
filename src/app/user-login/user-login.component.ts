import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-user-login',
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent implements OnInit {

  constructor() { }
  ngOnInit() {
   console.log('userLog', screen.height);
   
  }
}
