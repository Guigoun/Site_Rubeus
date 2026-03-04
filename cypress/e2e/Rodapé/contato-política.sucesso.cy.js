describe("Redirecionamento CORRETO de 'Fale Conosco' e 'Política de Privacidade'", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("Valida o redirecionamento CORRETO ao clicar em 'Fale Conosco' para WhatsApp", () => {
    //Valida os atributos do link e se está visível
    cy.get("#iwyjp1")
      .should("be.visible")
      .and("have.attr", "href", "https://web.whatsapp.com/")
      .and("have.attr", "target", "_blank");
  });

  it("Valida o redirecionamento CORRETO ao clicar no 'Política de Privacidade' para página respectiva da Rubeus", () => {
    //Valida os atributos do link e se está visível
    cy.get("#i1feng")
      .should("be.visible")
      .and("have.attr", "href", "https://rbacademy.apprbs.com.br/politica-de-privacidade",)
      .and("have.attr", "target", "_blank");
  });
});
