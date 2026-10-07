<script setup lang="ts">
import type { Cep } from '../types/cep'

defineProps<{
  cep: Cep | null
}>()

defineEmits<{
  adicionarAoHistorico: [cep: Cep]
}>()
</script>

<template>
  <section
    class="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    aria-labelledby="detalhes-cep-titulo"
  >
    <h2 id="detalhes-cep-titulo" class="text-xl font-semibold text-slate-900">
      Detalhes do CEP
    </h2>

    <p v-if="!cep" class="mt-4 text-slate-500">
      Digite o cep acima
    </p>

    <dl v-else class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <dt class="text-sm font-medium text-slate-500">CEP</dt>
        <dd class="mt-1">
          <button
            type="button"
            class="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            :aria-label="`Adicionar CEP ${cep.cep} ao histórico`"
            @click="$emit('adicionarAoHistorico', cep)"
          >
            {{ cep.cep || '—' }}
          </button>
        </dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">Logradouro</dt>
        <dd class="mt-1 text-slate-900">{{ cep.logradouro || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">Complemento</dt>
        <dd class="mt-1 text-slate-900">{{ cep.complemento || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">Unidade</dt>
        <dd class="mt-1 text-slate-900">{{ cep.unidade || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">Bairro</dt>
        <dd class="mt-1 text-slate-900">{{ cep.bairro || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">Localidade</dt>
        <dd class="mt-1 text-slate-900">{{ cep.localidade || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">UF</dt>
        <dd class="mt-1 text-slate-900">{{ cep.uf || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">Estado</dt>
        <dd class="mt-1 text-slate-900">{{ cep.estado || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">Região</dt>
        <dd class="mt-1 text-slate-900">{{ cep.regiao || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">IBGE</dt>
        <dd class="mt-1 text-slate-900">{{ cep.ibge || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">GIA</dt>
        <dd class="mt-1 text-slate-900">{{ cep.gia || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">DDD</dt>
        <dd class="mt-1 text-slate-900">{{ cep.ddd || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-slate-500">SIAFI</dt>
        <dd class="mt-1 text-slate-900">{{ cep.siafi || '—' }}</dd>
      </div>
    </dl>
  </section>
</template>
