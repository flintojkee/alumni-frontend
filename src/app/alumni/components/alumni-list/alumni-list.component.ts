import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Alumni } from '@alm/app/shared';
import { Observable} from 'rxjs';

@Component({
  selector: 'alm-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlumniListComponent implements OnInit {
  @Input() alumni$: Observable<Alumni>;
  @Output() upload = new EventEmitter();
  ngOnInit() {}

  onScroll() {
    console.log('scroll')
  }
}
