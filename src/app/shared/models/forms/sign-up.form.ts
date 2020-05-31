export class SignUpForm {
  email: string;
  password: string;
  retypedPassword: string;
  allowShowContacts: boolean;
  constructor() {
    this.password = null;
    this.email = null;
    this.retypedPassword = null;
    this.allowShowContacts = null;
  }
}
