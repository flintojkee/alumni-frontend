import { AlumniInviteStatus } from './alumni-invite-status.model';

export interface Alumni {
  id: number;
  name: string;
  email: string;
  function: string;
  parent_id: Array<any>;
  facebook_link: boolean | string;
  linkedin_link: boolean | string;
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
  image_1920: boolean | string;
  alumni_status?: AlumniInviteStatus;
}
