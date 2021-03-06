import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, startWith, filter } from 'rxjs/operators';
import { Company, Alumni } from '../..';
import { Observable } from 'rxjs';
import { CompanyService } from '@alm/app/core/services/company.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'alm-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit, OnDestroy, OnChanges {
  companies: Company[] = [];
  @Input() user: Alumni;
  @Input() isAdmin = false;
  @Output() inittedFormGroup = new EventEmitter<FormGroup>();
  filteredCompanies: Observable<Company[]>;
  formGroup: FormGroup;
  isCompanyError: boolean;
  @Input() editable: boolean;
  constructor(private formBuilder: FormBuilder, private companyService: CompanyService) {}

  ngOnInit() {
    this.initJobFormGroup();
    this.companyService
      .getCompanies()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.companies = res;
        this.jobName.valueChanges.pipe(filter((val) => !!val)).subscribe((res) => {
          const c = this.companies.find((c) => c.name === res);
          const jobId = c ? c.id : -1;
          this.jobId.setValue(jobId);

          if (jobId === -1 && this.isAdmin) {
            this.jobId.setValidators(Validators.min(0));
            this.jobId.updateValueAndValidity();
            this.isCompanyError = true;
          } else {
            this.jobId.setValidators([]);
            this.jobId.updateValueAndValidity();
            this.isCompanyError = false;
          }
        });
        this.user.company_name && this.jobName.setValue(this.user.company_name);
      });
    this.filteredCompanies = this.formGroup.controls.jobName.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );

    this.toggleFormGroup();
  }

  ngOnChanges() {
    this.toggleFormGroup();
  }

  ngOnDestroy() {}

  private _filter(value: string): Company[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.companies.filter(
        (company) => company.name.toLowerCase().indexOf(filterValue) === 0
      );
    }
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

  toggleFormGroup() {
    if (this.formGroup) {
      this.editable ? this.formGroup.enable() : this.formGroup.disable();
    }
  }
}
