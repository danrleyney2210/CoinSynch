describe("Login with user and key", () => {
  it("", () => {
    cy.visit("http://127.0.0.1:5173/");

    cy.contains("Sign in").click();
    cy.get("#email").type("eu@asynch.com");

    cy.get("#password").type("123");
    cy.contains("button", "Sign in").click();
  });
});
