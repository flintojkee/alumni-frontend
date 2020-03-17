export class SignUpForm {
  email: string;
  password: string;
  retypedPassword: string;
  constructor() {
    this.password = null;
    this.email = null;
    this.retypedPassword = null;
  }
}
