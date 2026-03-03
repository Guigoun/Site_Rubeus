describe("Redirecionamento para págida da Rubeus", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("Valida o redirecionamento para página de Formação Analista Rubeus", () => {
    //Valida se o ícone está visível, clicável e redireciona para a página
    cy.get("#i6b9dk")
      .should("be.visible")
      .and("have.attr", "href", "https://cursos.rubeus.com.br/analista-rubeus/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para página de Formação Analista Rubeus", () => {
    //Valida se o ícone está visível, clicável e redireciona para a página
    cy.get("#iwmzne")
      .should("be.visible")
      .and("have.attr", "href", "https://cursos.rubeus.com.br/analista-rubeus/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para página de Formação Analista Rubeus", () => {
    //Valida se o ícone está visível, clicável e redireciona para a página
    cy.get("#izq1hh")
      .should("be.visible")
      .and("have.attr", "href", "https://cursos.rubeus.com.br/analista-rubeus/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para página de Formação Analista Rubeus", () => {
    //Valida se o ícone está visível, clicável e redireciona para a página
    cy.get("#itzwfq")
      .should("be.visible")
      .and("have.attr", "href", "https://cursos.rubeus.com.br/analista-rubeus/")
      .and("have.attr", "target", "_blank");
  });
});
