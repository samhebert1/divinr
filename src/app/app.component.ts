import { Component } from '@angular/core';
import * as build from '../build-version.json';

@Component({
  selector: 'divinr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Divinr';
  // Use .default for Webpack/Angular JSON imports if present
  buildData: any = (build as any).default || build;
}
