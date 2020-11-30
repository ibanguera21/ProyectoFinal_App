import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid:string
  constructor( public afAuth: AngularFireAuth,
    ) { }

   setUid(_uid:string){
    this.uid = _uid;
    console.log(_uid);
  }

  getUid(){
    return this.uid;
  }
  async resetPassword(email: string, ): Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch (error){
      console.log('Error=>',error);
    }
  }

 
}
