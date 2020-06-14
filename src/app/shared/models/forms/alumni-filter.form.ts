import { InviteStatus } from '../alumni-invite-status.model';

export class AlumniFilterForm {
  bachelor_faculty: string;
  bachelor_speciality: string;
  bachelor_year_in: number;
  bachelor_year_out: number;
  master_faculty: number;
  master_speciality: number;
  master_year_in: number;
  master_year_out: number;
  invite_status?: InviteStatus;
  user_confirmed?: boolean;
  constructor() {
    this.bachelor_faculty = null;
    this.bachelor_speciality = null;
    this.bachelor_year_in = null;
    this.bachelor_year_out = null;
    this.master_faculty = null;
    this.master_speciality = null;
    this.master_year_in = null;
    this.master_year_out = null;
    this.invite_status = null;
    this.user_confirmed = null;
  }


}
