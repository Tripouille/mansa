export const UserInformations = () => cy.dataCy('user-informations');

export const CompanyInformations = () => cy.dataCy('company-informations');

export const Accounts = () => cy.dataCy('accounts');
export const AccountInformations = () => Accounts().findDataCy('account-informations');
