describe("Redirecionamento para o WhatsApp", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("Valida o redirecionamento para o WhatsApp", () => {
    //Valida se o ícone está visível, clicável e redireciona para a página
    cy.get("#iks3g")
      .should("be.visible")
      .and("have.attr", "href", "https://web.whatsapp.com/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento para o WhatsApp para falar com um Consultor", () => {
    //Valida se o ícone está visível, clicável e redireciona para a página
    cy.get("#iopirr")
      .should("be.visible")
      .and("have.attr", "href", "https://web.whatsapp.com/")
      .and("have.attr", "target", "_blank");
  });
});
