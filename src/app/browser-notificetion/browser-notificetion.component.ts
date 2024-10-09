import { Component } from '@angular/core';

@Component({
  selector: 'app-browser-notificetion',
  standalone: true,
  imports: [],
  templateUrl: './browser-notificetion.component.html',
  styleUrl: './browser-notificetion.component.scss'
})
export class BrowserNotificetionComponent {
  ngAfterContentInit() {

    if (!('Notification' in window)) {
      console.error('This browser does not support notification');
    } else {
      console.log(`Notification permission: ${Notification.permission}`);
      Notification.requestPermission().then((result) => {
        if (result == 'granted') {
          let notify = new Notification("New Notification", { body: 'message content', tag: 'Notification', icon: '/favicon.ico' });
          notify.onclick = (e) => {
            e.preventDefault(); // prevent the browser from focusing the Notification's tab
            window.focus();
            notify.close();
          }
        }
      });
    }
  }
}
