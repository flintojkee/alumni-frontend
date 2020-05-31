import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumni } from '../../models';
import { Countries } from '../../helpers/countries';

@Component({
  selector: 'alm-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit, OnChanges {
  @Input() user: Alumni;
  @Input() editable: boolean;
  @Output() inittedFormGroup = new EventEmitter<FormGroup>();
  formGroup: FormGroup;
  countries = Countries;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.user.image_1920) {
      this.user.image_1920 = !this.user.image_1920.includes('data:image')
        ? 'data:image/png;base64,' + this.user.image_1920
        : this.user.image_1920;
    }

    this.initFormGroup();
    this.toggleFormGroup();
  }

  ngOnChanges() {
    this.toggleFormGroup();
  }

  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      fullName: [this.user.name || null, Validators.required],
      dateOfBirth: [
        this.user.birth_date ? new Date(this.user.birth_date) : null,
        Validators.required
      ],
      country: [this.user.contact_country || null, Validators.required],
      city: [this.user.contact_city || null, Validators.required],
      mobile: [this.user.mobile || null, Validators.required],
      skype: [this.user.skype || null],
      telegram: [this.user.telegram || null],
      viber: [this.user.viber || null],
      facebook: [this.user.facebook_link || null],
      linkedIn: [this.user.linkedin_link || null],
      avatar: []
    });
    this.inittedFormGroup.next(this.formGroup);
  }

  changeAvatar(files: FileList) {
    const f = [];
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      f.push(element);
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      img.onload = () => {
        const maxW = 400;
        const maxH = 400;
        const iw = img.width;
        const ih = img.height;
        const scale = Math.min(maxW / iw, maxH / ih);
        const iwScaled = iw * scale;
        const ihScaled = ih * scale;
        canvas.width = iwScaled;
        canvas.height = ihScaled;
        ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
        this.user.image_1920 = canvas.toDataURL('image/jpeg', 1);
      };
      img.src = e.target['result'] as string;
    };
    reader.readAsDataURL(f[0]);
  }

  get fullName() {
    return this.formGroup.controls.fullName;
  }
  get dateOfBirth() {
    return this.formGroup.controls.dateOfBirth;
  }
  get country() {
    return this.formGroup.controls.country;
  }
  get city() {
    return this.formGroup.controls.city;
  }
  get mobile() {
    return this.formGroup.controls.mobile;
  }
  get skype() {
    return this.formGroup.controls.skype;
  }
  get telegram() {
    return this.formGroup.controls.telegram;
  }
  get viber() {
    return this.formGroup.controls.viber;
  }
  get facebook() {
    return this.formGroup.controls.facebook;
  }
  get linkedIn() {
    return this.formGroup.controls.linkedIn;
  }
  get avatar() {
    return this.formGroup.controls.avatar;
  }

  formatPhone() {
    this.formGroup.controls['mobile'].setValue(this.mobile.value.replace(/\D/g, ''));
  }

  filterBirthDate = (d: Date | null): boolean => {
    const currentYear = new Date().getFullYear();
    return currentYear - d.getFullYear() > 16;
  }

  toggleFormGroup() {
    if (this.formGroup) {
      console.log(this.editable);
      this.editable ? this.formGroup.enable() : this.formGroup.disable();
    }
  }
}
