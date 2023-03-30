import { Injectable } from '@angular/core';
import {IUser} from "../../models/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser;
  constructor() { }

  getUser(): IUser {
    return this.user;
    
  };
  setUser(user: IUser) {
    this.user = user;
    console.log(this.user)
    
  };
}