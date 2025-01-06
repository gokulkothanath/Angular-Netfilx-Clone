import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject=new Subject<number>()
  data$=this.dataSubject.asObservable()
  sendData(data:number){
     this.dataSubject.next(data)
  }
  constructor() { }
}
