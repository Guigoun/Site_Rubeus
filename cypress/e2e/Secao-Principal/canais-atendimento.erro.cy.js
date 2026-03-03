describe("Redirecionamento INCORRETO do Atendimento para o WhatsApp", () => {
  beforeEach(() => {
    //Acess o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("Valida o redirecionamento INCORRETO para o WhatsApp", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ipkda")
      .should("be.visible")
      .and("have.attr", "href", "https://web.whatsapp.com/")
      .and("have.attr", "target", "_blank");
  });
});
