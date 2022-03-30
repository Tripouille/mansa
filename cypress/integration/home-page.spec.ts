import * as Visit from '../utils/visit';
import * as Intercept from '../utils/intercept';
import * as Select from '../utils/select';

describe('Home page', () => {
  beforeEach(() => {
    Intercept.User();
    Intercept.Company();
    Visit.home();
  });

  it('should call user endpoint and mount user informations', () => {
    cy.wait(Intercept.Alias.USER);
    Select.UserInformations().should('exist');
  });

  it('should call company endpoint and mount company informations', () => {
    cy.wait(Intercept.Alias.COMPANY);
    Select.CompanyInformations().should('exist');
  });
});
