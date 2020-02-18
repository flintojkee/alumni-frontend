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
  alumnies: Alumni[];
  sortedAlumnies: Alumni[];
  constructor(private http: HttpClient) {
    this.http.get('https://alumni-service-api.herokuapp.com/api/v1/alumni/').subscribe((res: Alumni[]) => {
      this.alumnies = res.filter((a) => a.name);
      this.length = this.alumnies.length;
      this.sortedAlumnies = this.alumnies.slice(0, 10);
      console.log(res);
    });
  }
  length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  ngOnInit() {}
  setAlumni(e: PageEvent) {
    this.sortedAlumnies = this.alumnies.slice(
      e.pageIndex * e.pageSize,
      (e.pageIndex + 1) * this.pageSize
    );
  }
}
