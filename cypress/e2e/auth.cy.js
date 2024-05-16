/// <reference types='cypress' />

import RegistrationForm from '../support/registrationPO';
import LoginForm from '../support/loginPO';

const registrationForm = new RegistrationForm();
const loginForm = new LoginForm();

describe.skip('Check-list for registration', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('#registerOnLogin').click();
  });

  it('Check opening of the registration form by clicking on the [Register] button', () => {
    cy.get('#registerForm').should('have.text', 'Registration').and('be.visible');
  });

  it('Check registration with valid username and password inputs (length of the inputs (21 and 14), password contains an uppercase and lowercase letters)', () => {
    registrationForm.fillInTheForm(
      'lorem ipsum dolor sit',
      'never_guess_!T',
      'Successfully registered! Please, click Back to return on login page'
    );
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

  it.skip('Check registration if the length of the username input is maximum + 1', () => {
    registrationForm.fillInTheForm(
      "BigMac's A BigMac, butTheyCallItLeBigMac.",
      'AAAAAAAAAAAAAAAAAAa',
      "Username can't exceed 40 characters" //max lenght of the input is 40
    );
  });

  it('Check registration if the length of the password input is minimum - 1', () => {
    registrationForm.fillInTheForm('helloThere', '$ecurE!', 'Password should contain at least 8 characters');
  });

  it.skip('Check registration if the length of the password input is maximum + 1', () => {
    registrationForm.fillInTheForm(
      'W0o0o0o0o0',
      "I'm singing inTheRain",
      "Password can't exceed 40 characters" //max lenght of the input is 20
    );
  });

  it("Check registration if a password input doesn't contain an uppercase letter", () => {
    registrationForm.fillInTheForm(
      '401 :(',
      'nooooooooo',
      'Password should contain at least one character in upper case'
    );
  });

  it("Check registration if a password input doesn't contain a lovercase letter", () => {
    registrationForm.fillInTheForm(
      '2o0 :)))',
      'YESSSSSSSSSS',
      'Password should contain at least one character in lower case'
    );
  });

  it('Check registration if a username input contains a prefix space', () => {
    registrationForm.fillInTheForm(' prefix', '!@#$%^&*Uu', 'Prefix and postfix spaces are not allowed is username');
  });

  it('Check registration if a username input contains a postfix space', () => {
    registrationForm.fillInTheForm('postfix ', '*()?>/|Tttt', 'Prefix and postfix spaces are not allowed is username');
  });

  it('Check registration if a username input contains only spaces', () => {
    registrationForm.fillInTheForm(
      '     ',
      'just$@feP@$$word',
      'Prefix and postfix spaces are not allowed is username'
    );
  });

  it('Check registration if a password input contains only spaces', () => {
    registrationForm.fillInTheForm('Try The Wine', '          ', 'Password is required');
  });

  it('Check that a username must be unique', () => {
    registrationForm.fillInTheForm(
      'Hi@',
      ' 123Qя! ',
      'Successfully registered! Please, click Back to return on login page'
    );
    registrationForm.fillInTheForm('{selectall}{backspace}Hi@', '{selectall}{backspace} 123Qя! ', 'Username is in use');
  });

  it('Check that the username field is required in the registration form', () => {
    registrationForm.fillInTheForm('{backspace}', '1357986420', 'Please, provide valid data');
  });

  it('Check that the username field is required in the registration form', () => {
    registrationForm.fillInTheForm('0  0', '{backspace}', 'Password is required');
  });
});

describe('Check-list for login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check opening of the login form by clicking on the [Back] button', () => {
    cy.get('#registerOnLogin').click();
    cy.get('#backOnRegister').click();
    cy.get('#loginForm').should('have.text', 'Login').and('be.visible');
  });

  it('Check opening of the login form by clicking on the [Back to login page] button', () => {
    cy.get('#registerOnLogin').click();
    registrationForm.fillInTheForm(
      'Hi@',
      ' 123Qя! ',
      'Successfully registered! Please, click Back to return on login page'
    );
    cy.get('#backOnRegister').click();
    loginForm.fillInTheForm('Hi@', ' 123Qя! ');
    cy.get('#successMessage').should('have.text', 'Hello, Hi@!').and('be.visible');
    cy.get('#backButton').click();
    cy.get('#loginForm').should('have.text', 'Login').and('be.visible');
  });

  it('Login with correct credentials', () => {
    cy.get('#registerOnLogin').click();
    registrationForm.fillInTheForm(
      'Здравствуйте дорогой Мартин Алексеич! Пи',
      '0987654321ЙЁЗьъWVzyd',
      'Successfully registered! Please, click Back to return on login page'
    );
    cy.get('#backOnRegister').click();
    loginForm.fillInTheForm('Здравствуйте дорогой Мартин Алексеич! Пи', '0987654321ЙЁЗьъWVzyd');
    cy.get('#successMessage').should('have.text', 'Hello, Здравствуйте дорогой Мартин Алексеич! Пи!').and('be.visible');
  });

  it('Login with the correct username and incorrect password', () => {
    cy.get('#registerOnLogin').click();
    registrationForm.fillInTheForm(
      'Здравствуйте дорогой Мартин Алексеич! Пи',
      '0987654321ЙЁЗьъWVzyd',
      'Successfully registered! Please, click Back to return on login page'
    );
    cy.get('#backOnRegister').click();
    loginForm.fillInTheForm('Здравствуйте дорогой Мартин Алексеич! Пи', '0987654321ЙЁЗьъWVzy', 'Invalid credentials');
  });

  it('Login with the incorrect username and correct password', () => {
    cy.get('#registerOnLogin').click();
    registrationForm.fillInTheForm(
      'Здравствуйте дорогой Мартин Алексеич! Пи',
      '0987654321ЙЁЗьъWVzyd',
      'Successfully registered! Please, click Back to return on login page'
    );
    cy.get('#backOnRegister').click();
    loginForm.fillInTheForm('Здравствуйте дорогой Мартин Алексеич!', '0987654321ЙЁЗьъWVzyd', 'Invalid credentials');
  });

  it('Check that the username field is required in the login form', () => {
    loginForm.fillInTheForm('{backspace}', 'someText', 'Username is required');
  });

  it.only('Check that the password field is required in the login form', () => {
    loginForm.fillInTheForm('TimeToTest', '{backspace}', 'Password is required');
  });
});
