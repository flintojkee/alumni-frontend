import { UpdateFormRequest } from './api/update-form.request';
import { UpdateFormStatus } from '../enums/update-form.enum';

export class UpdateAlumni implements UpdateFormRequest {
  name: string;
  birth_date: string;
  image_1920: string;
  contact_country: string;
  contact_city: string;
  mobile: string;
  skype: string;
  telegram: string;
  viber: string;
  facebook_link: string;
  linkedin_link: string;
  bachelor_degree: boolean;
  bachelor_faculty: string;
  bachelor_speciality: string;
  bachelor_year_in: string;
  bachelor_year_out: string;
  master_degree: boolean;
  master_faculty: string;
  master_speciality: string;
  master_year_in: string;
  master_year_out: string;
  parent_id: number;
  company_name: string;
  function: string;
  alumni_id: number;
  form_status: UpdateFormStatus;
  form_id: number;
  constructor(
    $name: string,
    $birth_date: string,
    $image_1920: string,
    $contact_country: string,
    $contact_city: string,
    $mobile: string,
    $skype: string,
    $telegram: string,
    $viber: string,
    $facebook_link: string,
    $linkedin_link: string,
    $bachelor_degree: boolean,
    $bachelor_faculty: string,
    $bachelor_speciality: string,
    $bachelor_year_in: string,
    $bachelor_year_out: string,
    $master_degree: boolean,
    $master_faculty: string,
    $master_speciality: string,
    $master_year_in: string,
    $master_year_out: string,
    $parent_id: number,
    $company_name: string,
    $function: string,
    $alumni_id: number
  ) {
    this.name = $name;
    this.birth_date = $birth_date;
    this.image_1920 = $image_1920;
    this.contact_country = $contact_country;
    this.contact_city = $contact_city;
    this.mobile = $mobile;
    this.skype = $skype;
    this.telegram = $telegram;
    this.viber = $viber;
    this.facebook_link = $facebook_link;
    this.linkedin_link = $linkedin_link;
    this.bachelor_degree = $bachelor_degree;
    this.bachelor_faculty = $bachelor_faculty;
    this.bachelor_speciality = $bachelor_speciality;
    this.bachelor_year_in = $bachelor_year_in;
    this.bachelor_year_out = $bachelor_year_out;
    this.master_degree = $master_degree;
    this.master_faculty = $master_faculty;
    this.master_speciality = $master_speciality;
    this.master_year_in = $master_year_in;
    this.master_year_out = $master_year_out;
    this.parent_id = $parent_id;
    this.company_name = $company_name;
    this.function = $function;
    this.alumni_id = $alumni_id;
  }
}
