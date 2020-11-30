import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-coliseo',
  templateUrl: './coliseo.page.html',
  styleUrls: ['./coliseo.page.scss'],
})
export class ColiseoPage implements OnInit {

  time: BehaviorSubject <string> = new BehaviorSubject('00:00');
  timer: number;
  interval;

  constructor() { }

  ngOnInit() {
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
