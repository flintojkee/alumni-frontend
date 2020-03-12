import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { Alumni } from '@alm/app/shared';

@Component({
  templateUrl: './alumni-registered.component.html',
  styleUrls: ['./alumni-registered.component.scss']
})
export class AlumniRegisteredComponent implements OnInit {
  registeredAlumni$: Observable<Alumni[]>;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.registeredAlumni$ = this.adminService.getAlumniRegistered();
  }

}
