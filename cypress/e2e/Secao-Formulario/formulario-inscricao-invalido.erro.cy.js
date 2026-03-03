describe("Preenchimento do formulário", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err) =>{
        if (err.message.includes("ActionsForm"))
            return false
    })
    //Acess o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("Valida o preenchimento do formulário com dados Válidos e visualização de mensagem de erro ", () => {
    //Valida se os campos nome, telefone e e-mail estão visíveis,habilitados e os preenche com dados inválidos
    cy.get('input[name="pessoa.nome"]')
      .should("be.visible")
      .and("be.enabled")
      .type("NCALCNAK3242335352LÇ*)()");

    cy.get('input[name="pessoa.emailPrincipal"]')
    .should("be.visible")
    .and("be.enabled")
      .type("ASDLN13L41¨%¨&#@JADFSAJ");

    cy.get('input[name="pessoa.telefonePrincipal"]')
    .should("be.visible")
    .and("be.enabled")
    .type("2183019RFHSAOU3KL42L"); 
      
    //Verifica se a menssagem de erro é exibida na tela
    cy.contains("Preencha este campo").should("be.visible");

    //Valida se o botão é habilitado após o preenchimento dos campos com dados válidos
    cy.get("#rbBtnNext")
    .should("be.disabled")
    

  });
});
