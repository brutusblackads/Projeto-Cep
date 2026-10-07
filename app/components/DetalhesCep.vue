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
    class="mt-8 rounded-2xl border border-cola-line bg-cola-white p-6 shadow-sm"
    aria-labelledby="detalhes-cep-titulo"
  >
    <h2 id="detalhes-cep-titulo" class="text-xl font-semibold text-cola-dark">
      Detalhes do CEP
    </h2>

    <p v-if="!cep" class="mt-4 text-cola-muted">
      Digite o cep acima
    </p>

    <dl v-else class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <dt class="text-sm font-medium text-slate-500">CEP</dt>
        <dd class="mt-1">
          <button
            type="button"
            class="font-medium text-cola-red underline decoration-cola-blush underline-offset-2 hover:text-cola-deeper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cola-red"
            :aria-label="`Adicionar CEP ${cep.cep} ao histórico`"
            @click="$emit('adicionarAoHistorico', cep)"
          >
            {{ cep.cep || '—' }}
          </button>
        </dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">Logradouro</dt>
        <dd class="mt-1 text-cola-text">{{ cep.logradouro || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">Complemento</dt>
        <dd class="mt-1 text-cola-text">{{ cep.complemento || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">Unidade</dt>
        <dd class="mt-1 text-cola-text">{{ cep.unidade || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">Bairro</dt>
        <dd class="mt-1 text-cola-text">{{ cep.bairro || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">Localidade</dt>
        <dd class="mt-1 text-cola-text">{{ cep.localidade || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">UF</dt>
        <dd class="mt-1 text-cola-text">{{ cep.uf || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">Estado</dt>
        <dd class="mt-1 text-cola-text">{{ cep.estado || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">Região</dt>
        <dd class="mt-1 text-cola-text">{{ cep.regiao || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">IBGE</dt>
        <dd class="mt-1 text-cola-text">{{ cep.ibge || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">GIA</dt>
        <dd class="mt-1 text-cola-text">{{ cep.gia || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">DDD</dt>
        <dd class="mt-1 text-cola-text">{{ cep.ddd || '—' }}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-cola-muted">SIAFI</dt>
        <dd class="mt-1 text-cola-text">{{ cep.siafi || '—' }}</dd>
      </div>
    </dl>
  </section>
</template>
