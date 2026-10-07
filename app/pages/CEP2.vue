<script setup lang="ts">
import DetalhesCep from '../components/DetalhesCep.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import { useCep } from '../composables/useCep'

const inputValue = ref('')
const { cep, carregando, erro, buscarCep } = useCep()
</script>

<template>
  <main class="mx-auto min-h-screen max-w-4xl p-8 pt-16">
    <h1 class="mb-6 text-3xl font-bold text-slate-900">Buscar CEP</h1>

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

    <p v-if="carregando" class="mt-4 text-slate-600" role="status">
      Consultando o CEP...
    </p>
    <p v-if="erro" class="mt-4 text-red-700" role="alert">
      {{ erro }}
    </p>

    <DetalhesCep :cep="cep" />
  </main>
</template>
