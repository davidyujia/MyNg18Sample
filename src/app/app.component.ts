import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { AppInputComponent } from './app-input/app-input.component';
import { InOutTestComponent } from './in-out-test/in-out-test.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

export const Modules = [
  JsonPipe,
  RouterOutlet,
  FormsModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  AppInputComponent,
  InOutTestComponent
]
