describe("Redirecionamento INCORRETO do 'Institucional'", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });
  
  it("Valida o redirecionamento INCORRETO ao clicar em 'Institucional'", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ij9km7")
      .should("be.visible")
      .and("have.attr", "href", "https://rubeus.com.br/sobre-a-rubeus/")
      .and("have.attr", "target", "_blank");
  });

})