import type { Cep, RespostaViaCep } from '../types/cep'

export function useCep() {
  const cep = ref<Cep | null>(null)
  const carregando = ref(false)
  const erro = ref('')

  const buscarCep = async (valor: string) => {
    const numeroCep = valor.replace(/\D/g, '')
    cep.value = null
    erro.value = ''

    if (!/^\d{8}$/.test(numeroCep)) {
      erro.value = 'Digite um CEP válido com 8 números.'
      return
    }

    carregando.value = true

    try {
      const resposta = await $fetch<RespostaViaCep>(
        `https://viacep.com.br/ws/${numeroCep}/json/`,
      )

      if ('erro' in resposta) {
        erro.value = 'CEP não encontrado.'
        return
      }

      cep.value = resposta
    }
    catch {
      erro.value = 'Não foi possível consultar o CEP. Verifique a conexão e tente novamente.'
    }
    finally {
      carregando.value = false
    }
  }

  return {
    cep,
    carregando,
    erro,
    buscarCep,
  }
}
