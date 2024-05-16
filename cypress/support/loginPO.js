class LoginForm {
  fillInTheForm(username, password, message) {
    cy.get('#userName').type(username);
    cy.get('#password').type(password);
    cy.get('#submit').click();
    if (message) cy.get('#errorMessage').should('have.text', message);
  }
}

export default LoginForm;
