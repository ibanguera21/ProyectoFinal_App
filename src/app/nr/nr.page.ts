import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nr',
  templateUrl: './nr.page.html',
  styleUrls: ['./nr.page.scss'],
})
export class NrPage implements OnInit {
  time: BehaviorSubject <string> = new BehaviorSubject('00:00');
  timer: number;
  interval;

  itemRef: any;
  contacts=[];
  uid:string;
  
  constructor(private db: AngularFireDatabase,
    private user: UserService,
    private alert: AlertController,
    ){
      this.uid = localStorage.getItem("uid");

    }
    ngOnInit() {
      this.itemRef = this.db.object('nuevaruta/'+ this.uid);
      console.log(this.uid);
      this.itemRef.snapshotChanges().subscribe(action => {
        let data = action.payload.val()
        this.contacts = [];
        for (let k in data){
          console.log(" ===> ",data[k])
          let user = data[k];
          user.key = k;
          this.contacts.push(user)
        }
      }); 
    }
    delete(key){
      this.db.database.ref('nuevaruta/' + this.uid + '/' + key).remove();
    }
  
    startTimer(duration: number){
      clearInterval(this.interval);
      this.timer = duration *60;
      this.interval = setInterval( () =>{
        this.updateTimeValue();
      }, 1000);
    }
    updateTimeValue() {  
      let minutes: any = this.timer / 60;
      let seconds: any = this.timer % 60;
  
      minutes = String('0'+ Math.floor(minutes)).slice(-2);
      seconds = String('0'+ Math.floor(seconds)).slice(-2);
  
       const text = minutes + ':' + seconds;
       this.time.next(text);
  
       --this.timer;
        
       if(this.timer < 0 ){
         this.startTimer(30)
       }
    }

}
