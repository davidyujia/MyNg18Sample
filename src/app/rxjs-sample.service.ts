import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsSampleService {
  subject?: Subject<any> = new Subject<string>();

  send(v: any) {
    this.subject?.next(v);
  }

  subscribe() {
    this.subject?.subscribe({
      next: v => {
        console.log(v);
      },
      error: e => {
        console.error(e);
      },
      complete: () => {
        console.log('subject completed.');
      }
    })
  }
}
