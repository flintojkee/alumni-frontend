import { AlumniInviteStatus, InviteStatus } from './alumni-invite-status.model';

export interface Alumni {
  id: number;
  name: string;
  email: string;
  function: string;
  parent_id: Array<any>;
  contact_city: boolean | string;
  contact_country: boolean | string;
  birth_date: string;
  facebook_link: boolean | string;
  linkedin_link: boolean | string;
  skype: boolean | string;
  telegram: boolean | string;
  viber: boolean | string;
  mobile: boolean | string;
  diploma_naukma: boolean;
  is_alumni: boolean;
  bachelor_degree: boolean | string;
  bachelor_faculty: boolean | string;
  bachelor_speciality: boolean | string;
  bachelor_year_in: boolean | string;
  bachelor_year_out: boolean | string;
  master_degree: boolean | string;
  master_faculty: boolean | string;
  master_speciality: boolean | string;
  master_year_in: boolean | string;
  master_year_out: boolean | string;
  image_1920: string;
  alumni_id: number;
  alumni_email: string;
  alumni_uuid: string;
  user_confirmed: boolean;
  allow_show_contacts: boolean;
  alumni_status?: InviteStatus;
  company_name?: string;
}
