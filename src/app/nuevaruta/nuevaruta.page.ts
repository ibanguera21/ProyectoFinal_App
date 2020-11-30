import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nuevaruta',
  templateUrl: './nuevaruta.page.html',
  styleUrls: ['./nuevaruta.page.scss'],
})
export class NuevarutaPage  {

  destino:string;

  uid: string;
  contactId: string;

  constructor(private db:AngularFireDatabase, 
    private user:UserService, 
    private active:ActivatedRoute, 
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    ){
      this.uid = localStorage.getItem('uid');

      active.params.subscribe(key=>{
        console.log(key);
        if(key.id!=null){
          this.contactId = key.id;
          db.database.ref('nuevaruta/'+this.uid+"/"+key.id).once('value', (snap)=>{
            console.log(snap.val());
           
            this.destino = snap.val().destino
            
          })
        }
      })
    }

   async save(){
   if (this.formValidation()){
    let loader = this.loadingCtrl.create({
      message: "Espere por favor..."
    });
    (await loader).present();
     try{
      this.db.database.ref('nuevaruta/'+ this.uid).push({destino:this.destino  }).then(()=>{
        
        this.destino="";   
     }) 
     } catch(e){
      this.showToast(e);
    }
    (await loader).dismiss();

    this.navCtrl.navigateRoot("nr");
   }
  }
 
  formValidation(){
   
    if(!this.destino){
      this.showToast("Ingrese Nuevo Destino");
      return false;}
    return true;
  }
  showToast (message: string){
    this.toastCtrl
       .create({
         message: message,
         duration: 3000
       })
       .then(toastData => toastData.present());
  }

}

