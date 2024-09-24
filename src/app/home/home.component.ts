import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppInputComponent } from "../app-input/app-input.component";

import { FormsModule } from '@angular/forms';
import { InOutTestComponent } from "../in-out-test/in-out-test.component";
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe, RouterOutlet, FormsModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, AppInputComponent, InOutTestComponent],
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
}
