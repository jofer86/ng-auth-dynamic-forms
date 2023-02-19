import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from 'src/app/state/auth/auth.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.login('test@test.com', 'password');
  }



}