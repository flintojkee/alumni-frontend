import { Operator } from '../operator.model';

export interface LoginAdminResponse {
  operator: Operator;
  access_token: string;
  refresh_token: string;
}
