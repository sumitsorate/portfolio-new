import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IntroComponent } from './intro/intro.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AboutComponent, WorksComponent, ContactsComponent, IntroComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-portfolio';
  currentYear: number = new Date().getFullYear();
}
