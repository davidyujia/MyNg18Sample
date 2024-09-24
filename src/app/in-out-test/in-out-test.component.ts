import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-in-out-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './in-out-test.component.html',
  styleUrl: './in-out-test.component.scss'
})
export class InOutTestComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  onChange(s: string) {
    this.valueChange.emit(s);
  }
}
