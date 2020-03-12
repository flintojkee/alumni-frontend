import { InviteStatus } from '../alumni-invite-status.model';

export class AlumniFilterForm {
  bachelor_faculty: string;
  bachelor_speciality: string;
  bachelor_entry_year: number;
  bachelor_finish_year: number;
  master_faculty: number;
  master_speciality: number;
  master_entry_year: number;
  master_finish_year: number;
  invite_status?: InviteStatus;
  constructor() {
    this.bachelor_faculty = null;
    this.bachelor_speciality = null;
    this.bachelor_entry_year = null;
    this.bachelor_finish_year = null;
    this.master_faculty = null;
    this.master_speciality = null;
    this.master_entry_year = null;
    this.master_finish_year = null;
    this.invite_status = null;
  }


}
