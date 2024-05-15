class RegistrationForm {
  fillInTheForm(username, password, message) {
    cy.get('#userNameOnRegister').type(username);
    cy.get('#passwordOnRegister').type(password);
    cy.get('#register').click();
    cy.get('#errorMessageOnRegister').should('have.text', message);
  }
}

export default RegistrationForm;
