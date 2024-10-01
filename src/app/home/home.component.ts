import { Component } from '@angular/core';
import { Modules } from '../app.component';
import { EventService } from '../event.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: Modules,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  model = '';
  inOut = '';
  jsonObj = { name: 'a', value: 'b' }

  ngOnInit() {
    console.log('init')
  }

  backValue: any = '';
  onSubmit(e: any) {
    this.backValue = e;
  }

  constructor(private event: EventService) { }
  do() {
    this.event.subject.subscribe({ next: console.log });
  }
}
