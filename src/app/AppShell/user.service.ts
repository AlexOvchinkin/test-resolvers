import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$$: BehaviorSubject<any> = new BehaviorSubject({ name: '' });

  constructor() { }

}
