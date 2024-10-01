import { Injectable } from '@angular/core';
import { filter, interval, map, scan, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  readonly subject = new Subject<any>();
  constructor() {
    interval(1000).subscribe({
      next: r => {
        this.subject.next(r);
      }
    });
  }
}
