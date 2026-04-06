import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private subject: Subject<string>;

  constructor() {
    this.subject = new Subject<string>();
  }

  notify(message: string) {
    this.subject.next(message);
  }

  getMessages() {
    return this.subject.asObservable();
  }
}
