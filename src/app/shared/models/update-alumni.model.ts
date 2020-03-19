import { UpdateFormRequest } from './api/update-form.request';

export class UpdateAlumni implements UpdateFormRequest {
  full_name_uk: string;
  date_of_birth: string;
  image: string;
  country: string;
  city: string;
  mobile: string;
  skype: string;
  telegram: string;
  viber: string;
  facebook: string;
  linkedin: string;
  is_bachelor: boolean;
  bachelor_faculty: string;
  bachelor_speciality: string;
  bachelor_entry_year: string;
  bachelor_finish_year: string;
  is_master: boolean;
  master_faculty: string;
  master_speciality: string;
  master_entry_year: string;
  master_finish_year: string;
  company: string;
  job_position: string;
  alumni_id: number;
  operator_id: number;
  email: string;
  constructor(
    full_name_uk: string,
    date_of_birth: string,
    image: string,
    country: string,
    city: string,
    mobile: string,
    skype: string,
    telegram: string,
    viber: string,
    facebook: string,
    linkedin: string,
    is_bachelor: boolean,
    bachelor_faculty: string,
    bachelor_speciality: string,
    bachelor_entry_year: string,
    bachelor_finish_year: string,
    is_master: boolean,
    master_faculty: string,
    master_speciality: string,
    master_entry_year: string,
    master_finish_year: string,
    company: string,
    job_position: string,
    alumni_id: number,
    email: string
  ) {
    this.full_name_uk = full_name_uk;
    this.date_of_birth = date_of_birth;
    this.image = image;
    this.country = country;
    this.city = city;
    this.mobile = mobile;
    this.skype = skype;
    this.telegram = telegram;
    this.viber = viber;
    this.facebook = facebook;
    this.linkedin = linkedin;
    this.is_bachelor = is_bachelor;
    this.bachelor_faculty = bachelor_faculty;
    this.bachelor_speciality = bachelor_speciality;
    this.bachelor_entry_year = bachelor_finish_year;
    this.bachelor_finish_year = bachelor_finish_year;
    this.is_master = is_master;
    this.master_faculty = master_faculty;
    this.master_speciality = master_speciality;
    this.master_entry_year = master_entry_year;
    this.master_finish_year = master_finish_year;
    this.company = company;
    this.job_position = job_position;
    this.alumni_id = alumni_id;
    this.email = email;
  }
}
