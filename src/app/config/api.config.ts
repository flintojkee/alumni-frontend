export enum AlumniUrls {
  alumni = 'alumni/',
  alumniGroupmates = 'alumni/{id}/groupmates',
  alumniUnregistered = 'alumni/unregistered',
  alumniRegistered = 'alumni/registered',
  register = 'register/',
  confirm = 'confirm/',
  login = 'login/',
  activeUpdateFormExists = 'alumni/{alumni_id}/active_update_form_exists'
}

export enum AdminUrls {
  registerLink = 'register_link/{id}',
  alumniInviteStatus = 'alumni_invite_status/',
  login = 'operator_login/',
  updateForm = 'update_form/',
  saveForm = 'update_form/{id}',
  updateFormStatus = 'update_form/{id}/status',
  confirmForm = 'update_form/{id}/confirm',
  deleteAlumni = 'alumni/{alumni_id}'
}

export enum ProfileUrls {
  updateForm = 'update_form/',
  updateFormHistory = 'update_form/history/{id}',
  updateFormById = 'update_form/{id}'
}

export enum CompanyUrls {
  companies = 'companies/'
}

export enum CountryUrls {
  countries = 'countries/'
}
