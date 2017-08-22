import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<app-menu></app-menu>
            <div class="container body-content">
               <router-outlet></router-outlet>
            </div>
            `,
})
export class AppComponent {    
}
