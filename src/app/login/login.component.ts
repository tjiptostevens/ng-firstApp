import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
usr=""
pwd=""
errMsg=""
constructor(private auth: AuthService, private router: Router){}
ngOnInit():void{}
login(){
  if (this.usr.trim().length === 0) {
    this.errMsg = "Username is required"
  } else if (this.pwd.trim().length === 0) {
    this.errMsg = "Password is required"
  } else  {
    this.errMsg = ""
    let res = this.auth.login(this.usr, this.pwd)
    if (res === 200) {
      this.router.navigate(['home'])
    }
    if (res === 403) {
      this.errMsg = "Invalid Credential"
    }
  } 
}
}
