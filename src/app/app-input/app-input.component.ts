import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-input',
  standalone: true,
  imports: [],
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.scss'
})
export class AppInputComponent {

  @Input() input = '';
  @Output() submit = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes['input']);

    this.submit.emit(changes['input'].currentValue);
  }
}
