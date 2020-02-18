import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumni } from './shared';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alumni-frontend';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {}
}
