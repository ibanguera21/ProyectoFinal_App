import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  itemRef: any;
  contacts=[];
  uid:string;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase) {this.uid = localStorage.getItem("uid");}

    ngOnInit() {
      this.itemRef = this.db.object('list/'+ this.uid);
      console.log(this.uid);
      this.itemRef.snapshotChanges().subscribe(action => {
        let data = action.payload.val()
        this.contacts = [];
        for (let k in data){
          console.log("===>",data[k].destino.split(":")[1]);
          let user = data[k];
          user.route = "/" + data[k].destino.split(":")[1].toLowerCase().replace(" ","");
          user.key = k;
          this.contacts.push(user)
        }
      });    
    }
    delete(key){
      this.db.database.ref('list/' + this.uid + '/' + key).remove();
    }

  logout(){
    this.auth.signOut().then (()=>{
          localStorage.removeItem('uid')
          this.router.navigateByUrl('/login', {replaceUrl : true});     
    }).catch(e =>{
      console.log(e);
    })
  }
}
