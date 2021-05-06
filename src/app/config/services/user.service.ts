import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.host + 'user';
  constructor(private http:HttpClient) { }

  getAll(){

    return this.http.get(this.url);
  }
  add(user:User){

    return this.http.post(this.url,user);
  }
  getById(id:any){
     const url = `${this.url}/${id}`;
    return this.http.get(url);

  }
  edit(user:User){
    const url = `${this.url}/${user.id}`;
    return this.http.put(url,user);
  }
  delete(id:any){
    const url = `${this.url}/${id}`;
   return this.http.delete(url);

 }
}
