import * as Visit from '../utils/visit';
import * as Intercept from '../utils/intercept';
import * as Select from '../utils/select';

describe('Home page', () => {
  before(() => {
    Visit.home();
  });

  it('should call user endpoint and mount user informations', () => {
    Intercept.User();
    cy.wait(Intercept.Alias.USER);
    Select.UserInformations().should('exist');
  });
});
