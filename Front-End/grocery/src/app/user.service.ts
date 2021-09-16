import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(public http:HttpClient) { }

  editUserProfile(user:User):Observable<any>{
    return this.http.put("http://localhost:9090/api/user/editProfile",user,
    {responseType:'text'});
  }

  showUserFunds():Observable<any>{
    return this.http.get("http://localhost:9090/api/user/showFunds");
  }

  addUserFunds(user:User):Observable<any>{
    return this.http.put("http://localhost:9090/api/user/addFunds", user,
    {responseType:'text'});
  }

}
