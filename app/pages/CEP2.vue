<script setup lang="ts">
import ListaCeps from '../components/ListaCeps.vue'
import DetalhesCep from '../components/DetalhesCep.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import { useCep } from '../composables/useCep'
import type { Cep } from '../types/cep'

const inputValue = ref('')
const { cep, carregando, erro, buscarCep } = useCep()
const historicoCeps = ref<Cep[]>([])
const erroHistorico = ref('')
const podePersistirHistorico = ref(true)
const chaveHistorico = 'historico-ceps'

function isCep(value: unknown): value is Cep {
  if (typeof value !== 'object' || value === null)
    return false

  const campos: (keyof Cep)[] = [
    'cep',
    'logradouro',
    'complemento',
    'unidade',
    'bairro',
    'localidade',
    'uf',
    'estado',
    'regiao',
    'ibge',
    'gia',
    'ddd',
    'siafi',
  ]

  return campos.every(campo => campo in value && typeof value[campo] === 'string')
}

onMounted(() => {
  let historicoSalvo: string | null

  try {
    historicoSalvo = localStorage.getItem(chaveHistorico)
  }
  catch {
    podePersistirHistorico.value = false
    erroHistorico.value = 'Não foi possível acessar o histórico salvo neste navegador.'
    return
  }

  if (!historicoSalvo)
    return

  try {
    const dados: unknown = JSON.parse(historicoSalvo)

    if (!Array.isArray(dados) || !dados.every(isCep))
      throw new Error('Formato de histórico inválido')

    historicoCeps.value = dados
  }
  catch {
    podePersistirHistorico.value = false
    erroHistorico.value = 'Não foi possível carregar o histórico salvo; os dados existentes foram preservados.'
  }
})

function adicionarAoHistorico(cepPesquisado: Cep) {
  historicoCeps.value = [cepPesquisado, ...historicoCeps.value]

  if (!podePersistirHistorico.value)
    return

  try {
    localStorage.setItem(chaveHistorico, JSON.stringify(historicoCeps.value))
    erroHistorico.value = ''
  }
  catch {
    podePersistirHistorico.value = false
    erroHistorico.value = 'Não foi possível salvar o histórico neste navegador; ele ficará disponível apenas nesta sessão.'
  }
}
</script>

<template>
  <main class="mx-auto min-h-screen max-w-4xl bg-cola-canvas p-8 pt-16">
    <h1 class="mb-6 text-3xl font-bold text-cola-dark">Buscar CEP</h1>

    <form
      class="flex items-center gap-4"
      @submit.prevent="buscarCep(inputValue)"
    >
      <BaseInput
        v-model="inputValue"
        placeholder="Digite um CEP..."
        aria-label="CEP"
        inputmode="numeric"
      />
      <BaseButton type="submit" :disabled="carregando">
        {{ carregando ? 'Buscando...' : 'Buscar' }}
      </BaseButton>
    </form>

    <p v-if="carregando" class="mt-4 text-cola-muted" role="status">
      Consultando o CEP...
    </p>
    <p v-if="erro" class="mt-4 text-cola-deeper" role="alert">
      {{ erro }}
    </p>

    <DetalhesCep :cep="cep" @adicionar-ao-historico="adicionarAoHistorico" />
    <p v-if="erroHistorico" class="mt-4 text-cola-deeper" role="alert">
      {{ erroHistorico }}
    </p>
    <ListaCeps :ceps="historicoCeps" />
  </main>
</template>
