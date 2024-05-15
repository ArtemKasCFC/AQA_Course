/// <reference types='cypress' />
import RegistrationForm from '../support/registrationPO';

describe('Check-list for registration', () => {
  const registrationForm = new RegistrationForm();

  beforeEach(() => {
    cy.visit('/');

    cy.get('#registerOnLogin').click();
  });

  it('Check opening of the registration form by clicking on the [Register] button', () => {
    cy.get('#registerForm').should('have.text', 'Registration').and('be.visible');
  });

  it('Check registration with valid username and password inputs (length of the inputs is minimum (3 and 8), password contains an uppercase and lowercase letters)', () => {
    registrationForm.fillInTheForm(
      'Hi@',
      ' 123Qя! ',
      'Successfully registered! Please, click Back to return on login page'
    );
  });

  it('Check registration with valid username and password inputs (length of the inputs is maximum (40 and 20), password contains an uppercase and lowercase letters)', () => {
    registrationForm.fillInTheForm(
      'Здравствуйте дорогой Мартин Алексеич! Пи',
      '0987654321ЙЁЗьъWVzyd',
      'Successfully registered! Please, click Back to return on login page'
    );
  });

  it('Check registration if the length of the username input is minimum - 1', () => {
    registrationForm.fillInTheForm(':(', '&^%^-=+****//Aq', 'Username should contain at least 3 characters');
  });

  it.only('Check registration if the length of the username input is maximum + 1', () => {
    registrationForm.fillInTheForm(
      "BigMac's A BigMac, butTheyCallItLeBigMac. ......                                .",
      'AAAAAAAAAAAAAAAAAAa',
      "Username can't exceed 40 characters" //max lenght is 40
    );
  });
});
