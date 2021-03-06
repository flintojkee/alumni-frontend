export interface UpdateFormRequest {
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
}
