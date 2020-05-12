import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Company, Alumni } from '../..';
import { Observable } from 'rxjs';
import { CompanyService } from '@alm/app/core/services/company.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'alm-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit, OnDestroy {
  companies: Company[];
  @Input() user: Alumni;
  @Input() isAdmin: boolean;
  @Output() inittedFormGroup = new EventEmitter<FormGroup>();
  filteredCompanies: Observable<Company[]>;
  formGroup: FormGroup;
  isCompanyError: boolean;

  constructor(private formBuilder: FormBuilder, private companyService: CompanyService) {}

  ngOnInit() {
    this.initJobFormGroup();
    this.companyService
      .getCompanies()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.companies = res;
      });
    this.filteredCompanies = this.formGroup.controls.jobName.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );

    this.jobName.valueChanges.subscribe((res) => {
      const c = this.companies.find((c) => c.name === res);
      const jobId = c ? c.id : -1;
      this.jobId.setValue(jobId);

      if (jobId === -1 && this.isAdmin) {
        this.jobId.setValidators(Validators.min(0));
        this.isCompanyError = true;
      } else {
        this.jobId.setValidators([]);
        this.isCompanyError = false;
      }
    });
  }

  ngOnDestroy() {}

  private _filter(value: string): Company[] {
    const filterValue = value.toLowerCase();
    return this.companies.filter(
      (company) => company.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  initJobFormGroup() {
    this.formGroup = this.formBuilder.group({
      jobName: [null],
      position: [this.user.function || null],
      jobId: []
    });
    this.inittedFormGroup.next(this.formGroup);
  }
  get jobName() {
    return this.formGroup.controls.jobName;
  }
  get position() {
    return this.formGroup.controls.position;
  }
  get jobId() {
    return this.formGroup.controls.jobId;
  }
}
