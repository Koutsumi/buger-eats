var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {
  deliver: function () {

    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '11 940028922',
      adress: {
        postalcode: '18705-300',
        street: 'Rua Manoel Joaquim Garcia',
        number: '43',
        adress_detail: 'Apto 23',
        district: 'Jardim América',
        city_state: 'Avaré/SP',
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg',
    };
    return data;
  },
};
