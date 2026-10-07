<script setup lang="ts">
import type { Cep } from '../types/cep'

defineProps<{
  ceps: Cep[]
}>()
</script>

<template>
  <section
    class="mt-8 rounded-2xl border border-cola-line bg-cola-white p-6 shadow-sm"
    aria-labelledby="lista-ceps-titulo"
  >
    <h2 id="lista-ceps-titulo" class="text-xl font-semibold text-cola-dark">
      Histórico de CEPs
    </h2>

    <p v-if="ceps.length === 0" class="mt-4 text-cola-muted">
      Clique em um CEP nos detalhes para adicioná-lo ao histórico.
    </p>

    <ul v-else class="mt-4 divide-y divide-cola-light">
      <li
        v-for="(cep, indice) in ceps"
        :key="`${cep.cep}-${indice}`"
        class="py-3 first:pt-0 last:pb-0"
      >
        <p class="font-medium text-cola-red">{{ cep.cep }}</p>
        <p class="mt-1 text-sm text-cola-muted">
          {{ cep.logradouro || cep.bairro || 'Endereço não informado' }}
          <span v-if="cep.localidade || cep.uf">
            — {{ [cep.localidade, cep.uf].filter(Boolean).join('/') }}
          </span>
        </p>
      </li>
    </ul>
  </section>
</template>
