describe("Ícones de redirecionamento para redes sociais", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });


  
  it("Valida o redirecionamento para o Facebook", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ivmnr9")
      .should("be.visible")
      .and("have.attr", "href", "https://www.facebook.com/CanalRubeus")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para o linkedin", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ixax8x")
      .should("be.visible")
      .and("have.attr", "href", "https://www.linkedin.com/company/rubeus/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para o Youtube", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ic6rdi")
      .should("be.visible")
      .and("have.attr", "href", "https://www.youtube.com/@Rubeus")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para o Instagram", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ilnvjq")
      .should("be.visible")
      .and("have.attr", "href", "https://www.instagram.com/canalrubeus/")
      .and("have.attr", "target", "_blank");
  });
});
