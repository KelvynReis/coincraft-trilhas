export type Gender = 'masculino | feminino | outro';

export type User = {
  name: string;
  email: string;
  cidade: string
  dataDeNascimento: Date | string;
  genero: Gender;
  senha: string;
//   confirmarSenha: string;  
};
// Validações 

type Error = {
  [key: string] : string
}

export const validate = (data: User) => {
  const errors: Error = {};

  if(!data.name) {
    errors["name"] = "Campo nome é obrigatório";
  }

  if(!data.email) {
    errors["email"] = "Campo e-mail é obrigatório";
  }

  if(!data.cidade) {
    errors["cidade"] = "Campo cidade é obrigatório";
  }

  if(data.dataDeNascimento > new Date()) {
    errors["dataDeNascimento"] = "A data de nascimento deve ser menor que a data atual.";
  }

  if(!data.senha || data.senha.length < 8) {
    errors["senha"] = "A senha deve ter pelo menos 8 caracteres.";
  }

  return errors;
}