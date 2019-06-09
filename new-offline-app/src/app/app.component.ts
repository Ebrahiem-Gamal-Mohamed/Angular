import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { PwaServiceService } from './pwa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-offline-app';

  constructor(private swUpdate: SwUpdate, public Pwa: PwaServiceService) {
    swUpdate.available.subscribe(event => {
      if (event) {
        this.swUpdate.activateUpdate().then(() => window.location.reload());
      }
    });
  }

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

}
