import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage 
 {

  constructor(
    private userSvc: UserService, 
    private router:Router) { }

  async reset(email){
    try{
      await this.userSvc.resetPassword(email.value);
      this.router.navigate(['/login']);
    }catch(error){
      console.log('Error=>', error);
    }
  }

}
