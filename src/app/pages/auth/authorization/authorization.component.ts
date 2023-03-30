import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {IUser} from "../../../models/users";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit, OnDestroy {
  loginText = 'Login';
  pswText = 'Password';
  login: string;
  psw: string;
  cardNumber: string;
  authTextButton: string;
  selectedValue: boolean;

  constructor(private messageService: MessageService,
              private authService: AuthService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.authTextButton = "Autorization";
  }

  ngOnDestroy() {
    console.log('Destroy')
  }

  vipStatusSelected(): void {
  }

  onAuth(ev: Event): void {
    const authUser: IUser = {
      psw: this.psw,
      login: this.login
    }
    if (!this.authService.checkUsers(authUser)) {
      this.messageService.add({severity: 'error', summary: 'Incorrect'});
    } else {
      this.userService.setUser(authUser);
      this.router.navigate(['tickets/tickets-list'])
    }
  }
}

