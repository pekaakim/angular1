import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {AuthService} from "../../../services/auth/auth.service";
import {IUser} from "../../../models/users";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // id: string;
  login: string;
  psw: string;
  pswRepeat: string;
  email: string;
  cardNumber: string;
  selectedValue: boolean;

  constructor(private messageService: MessageService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  registration(ev: Event): void | boolean {
    if (this.psw !== this.pswRepeat) {
      this.messageService.add({severity: 'error', summary: 'Password do not match'});
      return false
    }

    const userObj: IUser = {
      // id: this.id,
      psw: this.psw,
      login: this.login,
      cardNumber: this.cardNumber,
      email: this.email
    }

    if (!this.authService.isUserExist(userObj) && this.selectedValue) {

      this.authService.setUsers(userObj);

     //const idUserInd = this.authService.idUser(userObj);

      this.messageService.add({severity: 'success', summary: 'Success'});

      const jsObj = JSON.stringify(userObj);

      localStorage.setItem('User: '+`${userObj.login}`, jsObj); 


    } else if (!this.authService.isUserExist(userObj) && !this.selectedValue) {

      this.authService.setUsers(userObj);

      this.messageService.add({severity: 'success', summary: 'Success'});

    } else {
      this.messageService.add({severity: 'warn', summary: 'Already registered'});
    }
  }

  saveUserInLS(): void {
  }

}
