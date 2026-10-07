export interface Cep {
  cep: string
  logradouro: string
  complemento: string
  unidade: string
  bairro: string
  localidade: string
  uf: string
  estado: string
  regiao: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export interface CepNaoEncontrado {
  erro: 'true'
}

export type RespostaViaCep = Cep | CepNaoEncontrado
