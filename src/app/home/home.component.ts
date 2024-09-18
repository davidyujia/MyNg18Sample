import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppInputComponent } from "../app-input/app-input.component";

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, AppInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  model = '';
  ngOnInit() {
    console.log('init')
  }

  backValue: any = '';
  onSubmit(e: any) {
    this.backValue = e;
  }
}
