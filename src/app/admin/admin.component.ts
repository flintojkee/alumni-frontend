import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor() {}
  navLinks = [
    {
      path: 'alumni-registered',
      label: 'Зареєстровані випускники',
      isActive: true
    },
    {
      path: 'alumni-unregistered',
      label: 'Не зареєстровані випускники',
      isActive: false
    },


  ];
  ngOnInit() {}
}
