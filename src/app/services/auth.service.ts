import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  login (usr:string,pwd:String){
    if (usr === 'root' && pwd === 'admin') {
      return 200
    } else {
      return 403
    }
  }
  logout(){
    this.router.navigate(['login'])
  }
}
