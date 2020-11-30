import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any ={};
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private alert:AlertController,
    private db:AngularFireDatabase
    ) { }

  ngOnInit() {
  }
   async register(){
    const alert = await this.alert.create({
      header: 'Listo!',
      message: 'El usuario ha sido creado correctamente',
      buttons: [
         {
          text: 'Eliminar',
          handler: () => {
            console.log('Confirm Okay');
    if (this.user.email && this.user.password){
      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((userData)=>{
         console.log(userData);
         localStorage.setItem("uid", userData.user.uid);
         this.db.database.ref('user/'+userData.user.uid).set({
           name: this.user.name,
           email: this.user.email,
           password: this.user.password,
           createdAt: Date.now(),
         }).then(() =>{
          this.router.navigateByUrl('/home')
         });
      }).catch(e =>{
         console.log(e);
      })
    }
  }
}
]
});

await alert.present();
}
}
  
  


