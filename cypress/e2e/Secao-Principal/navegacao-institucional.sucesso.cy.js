describe("Redirecionamento para página da Rubeus", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("Valida o redirecionamento para a página Inicial referente a 'INSTITUCIONAL'", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ilmc2")
      .should("be.visible")
      .and("have.attr", "href", "https://rubeus.com.br/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para a página Base de conhecimento referente a 'BIBLIOTECA'", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ier16")
      .should("be.visible")
      .and("have.attr", "href", "https://crmrubeus.zendesk.com/hc/pt-br")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para a página Sobre A Rubeus referente a 'NOSSOS DIFERENCIAIS'", () => {
    //Valida os atributos do link e se está visível
    cy.contains("a", "NOSSOS DIFERENCIAIS")
      .should("be.visible")
      .and("have.attr", "href", "https://rubeus.com.br/sobre-a-rubeus/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para a página de Formação Analista Rubeus referente a ''EVENTOS", () => {
    //Valida os atributos do link e se está visível
    cy.contains("a", "EVENTOS")
      .should("be.visible")
      .and("have.attr", "href", "https://cursos.rubeus.com.br/analista-rubeus/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para Cases de sucesso referente a 'DEPOIMENTOS'", () => {
    //Valida os atributos do link e se está visível
    cy.contains("a", "DEPOIMENTOS")
      .should("be.visible")
      .and("have.attr", "href", "https://rubeus.com.br/cases-de-sucesso/")
      .and("have.attr", "target", "_blank");
  });
});
