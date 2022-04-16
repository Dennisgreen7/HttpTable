import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get('https://fakestoreapi.com/users');
  }
  getSingaleUser(id:number) {
    return this.http.get(`https://fakestoreapi.com/users/${id}`);
  }
}
