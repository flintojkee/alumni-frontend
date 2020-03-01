export enum InviteStatus {
  invited = 'invited',
  notInvited = 'not invited',
  rejected = 'rejected',
  noResponse = 'no response'
}

export interface AlumniInviteStatus {
  odoo_contact_id: string;
  invite_status: InviteStatus;
}
