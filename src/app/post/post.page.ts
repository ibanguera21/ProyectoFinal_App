import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  nombre:string='';
  tipo:string='';
  numero:string='';
  destino:string;
  fecha: string;
  uid: string;
  contactId: string;

  constructor(
    private db:AngularFireDatabase, 
    private user:UserService, 
    private active:ActivatedRoute, 
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController)

     { this.uid = localStorage.getItem('uid');
     active.params.subscribe(key=>{
      console.log(key);
      if(key.id!=null){
        this.contactId = key.id;
        db.database.ref('list/'+ this.uid + "/"+ key.id).once('value', (snap)=>{
          console.log(snap.val());
          this.nombre = snap.val().nombre
          this.tipo = snap.val().tipo
          this.numero = snap.val().numero
          this.destino = snap.val().destino
          this.fecha = snap.val().fecha })
      }
    })
  }
  ngOnInit() {
  }
  async save(){
    if (this.formValidation()){
     let loader = this.loadingCtrl.create({
       message: "Espere por favor..."
     });
     (await loader).present();
      try{
       this.db.database.ref('list/'+ this.uid).push({nombre:this.nombre,tipo:this.tipo, numero:this.numero ,destino:this.destino,fecha:this.fecha})
       .then(()=>{
         this.nombre="";
         this.tipo="";
         this.numero="";
         this.destino="";
         this.fecha="";
        });
        this.db.database.ref('datosweb/').push({nombre:this.nombre,tipo:this.tipo, numero:this.numero ,destino:this.destino,fecha:this.fecha})
        .then(()=>{
          this.nombre="";
          this.tipo="";
          this.numero="";
          this.destino="";
          this.fecha="";
         });
      } catch(e){
       this.showToast(e);}
     (await loader).dismiss();
 
     this.navCtrl.navigateRoot("home");
    }
  }
  async update(){
     if (this.formValidation()){
      let loader = this.loadingCtrl.create({
        message: "Espere por favor..."
      });
      (await loader).present();
       try{
         this.db.database.ref('list/'+ this.uid +'/'+ this.contactId)
         .set({nombre:this.nombre,tipo:this.tipo, numero:this.numero ,destino:this.destino,fecha:this.fecha})
         .then(()=>{
          this.nombre="";
          this.tipo="";
          this.numero="";
          this.destino="";
          this.fecha="";  
       })} catch(e){
        this.showToast(e);
      }
      (await loader).dismiss();
      this.navCtrl.navigateRoot("home");
     }   
  }
    
   formValidation(){
    if(!this.nombre){
      this.showToast("Ingrese su Nombre y Apellidos");
      return false;
    }
     if(!this.tipo){
       this.showToast("Ingrese tipo de Identificación");
       return false;
     }
     if(!this.numero){
       this.showToast("Ingrese Nº de Identificación");
       return false;
     }
     if(!this.destino){
       this.showToast("Ingrese Destino");
       return false;}
     if(!this.fecha){
       this.showToast("Ingrese Fecha");
       return false;
     }
     return true;
    }
   showToast (message: string){
     this.toastCtrl
        .create({
          message: message,
          duration: 3000
        })
        .then(toastData => toastData.present()); }
}
