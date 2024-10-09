import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-sample',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-sample.component.html',
  styleUrl: './rxjs-sample.component.scss'
})
export class RxjsSampleComponent {

  //new subject
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
