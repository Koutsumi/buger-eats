import signup from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";

describe("signup", () => {
  // beforeEach(function(){
  //     cy.fixture('deliver').then(function(d){
  //         // ! d abreviação de deliver
  //         this.deliver = d;
  //     });
  // });

  it("the user should be deliver", function () {
    var deliver = signupFactory.deliver();

    signup.go();
    //signup.fillForm(this.deliver.signup);
    signup.fillForm(deliver);
    signup.submit();
    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShouldBe(expectedMessage);
  });

  it("invalid CPF format", function () {
    var deliver = signupFactory.deliver();

    deliver.cpf = "000000141AA";

    signup.go();
    //signup.fillForm(this.deliver.cpf_inv);
    signup.fillForm(deliver);
    signup.submit();
    const expectedMessage = "Oops! CPF inválido";
    signup.alertMessageShouldBe(expectedMessage);
  });

  it("invalid email format", function () {
    var deliver = signupFactory.deliver();

    deliver.email = "emailformatoinvalido.com.br";

    signup.go();
    //signup.fillForm(this.deliver.email_inv);
    signup.fillForm(deliver);
    signup.submit();
    const expectedMessage = "Oops! Email com formato inválido.";
    signup.alertMessageShouldBe(expectedMessage);
  });

  context("riquired fields", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

    before(function () {
      signup.go();
      signup.submit();
    });

    messages.forEach(function(msg){
        it(`${msg.field} is riquired`, function(){
            signup.alertMessageShouldBe(msg.output);
        });  
    });
  });
});
