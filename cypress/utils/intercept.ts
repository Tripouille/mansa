import { BASE_URL as USER_BASE_URL, Endpoints as UserEndpoints } from '../../services/user';

export enum Alias {
  USER = '@user',
}

export const User = () =>
  cy.intercept(`${USER_BASE_URL}/${UserEndpoints.USER}**`).as(Alias.USER.slice(1));
