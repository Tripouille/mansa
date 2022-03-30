import { BASE_URL as USER_BASE_URL, Endpoints as UserEndpoints } from '../../services/user';
import {
  BASE_URL as COMPANY_BASE_URL,
  Endpoints as CompanyEndpoints,
} from '../../services/company';

export enum Alias {
  USER = '@user',
  COMPANY = '@company',
}

export const User = () =>
  cy.intercept(`${USER_BASE_URL}/${UserEndpoints.USER}**`).as(Alias.USER.slice(1));

export const Company = () =>
  cy.intercept(`${COMPANY_BASE_URL}/${CompanyEndpoints.COMPANY}**`).as(Alias.COMPANY.slice(1));
