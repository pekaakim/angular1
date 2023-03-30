import {Injectable} from '@angular/core';
import {IUser} from "../../models/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersStorage: IUser[] = [];
  constructor() {
  }

  checkUsers(user: IUser): boolean {
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);

    const isUserLocalStorage = localStorage.getItem('User: '+`${user.login}`);

    let userInStore: IUser = <IUser>{};

    if(isUserLocalStorage){
      userInStore = JSON.parse(isUserLocalStorage);
    }

    if (isUserExists) {
      return isUserExists.psw === user.psw;

    } else if(userInStore){
      return userInStore.psw === user.psw;
    }
    return false;
  }

  setUsers(user: IUser): void {
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);
    if (!isUserExists && user?.login) {
      this.usersStorage.push(user)
    }
  }

  // idUser(user:IUsers): string{
  //   const idUserIndex = this.usersStorage.indexOf(user);
  //   return String(idUserIndex);
  // }

  isUserExist(user: IUser): boolean {
    const isUserExists = this.usersStorage.find((el) => el.login === user.login);
    return !!isUserExists;
  }
}
