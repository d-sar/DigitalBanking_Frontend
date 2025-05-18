import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-template',
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './admin-template.component.html',
  standalone: true,
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

}
