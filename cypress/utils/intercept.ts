import { BASE_URL as USER_BASE_URL, Endpoints as UserEndpoints } from '../../services/user';
import {
  BASE_URL as COMPANY_BASE_URL,
  Endpoints as CompanyEndpoints,
} from '../../services/company';
import {
  BASE_URL as ACCOUNT_BASE_URL,
  Endpoints as AccountEndpoints,
} from '../../services/account';

export enum Alias {
  USER = '@user',
  COMPANY = '@company',
  ACCOUNTS = '@accounts',
}

export const User = () =>
  cy.intercept(`${USER_BASE_URL}/${UserEndpoints.USER}**`).as(Alias.USER.slice(1));

export const Company = () =>
  cy.intercept(`${COMPANY_BASE_URL}/${CompanyEndpoints.COMPANY}**`).as(Alias.COMPANY.slice(1));

export const Accounts = () =>
  cy.intercept(`${ACCOUNT_BASE_URL}/${AccountEndpoints.ACCOUNTS}**`).as(Alias.ACCOUNTS.slice(1));
