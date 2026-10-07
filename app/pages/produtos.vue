<script setup lang="ts">
const products = [
  {
    name: 'Caderno Horizonte',
    category: 'Papelaria',
    description: 'Um lugar para registrar ideias, planos e pequenas descobertas.',
    price: 'R$ 39,90',
    initials: 'CH',
    color: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'Garrafa Aurora',
    category: 'Acessórios',
    description: 'Uma companheira leve para manter a hidratação durante o dia.',
    price: 'R$ 64,90',
    initials: 'GA',
    color: 'bg-sky-100 text-sky-800',
  },
  {
    name: 'Bolsa Caminho',
    category: 'Acessórios',
    description: 'Espaço prático para levar o essencial em novas jornadas.',
    price: 'R$ 129,90',
    initials: 'BC',
    color: 'bg-rose-100 text-rose-800',
  },
]
</script>

<template>
  <main class="min-h-screen bg-stone-50 text-slate-900">
    <header class="border-b border-slate-200/80 bg-white">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NuxtLink to="/" class="text-xl font-bold tracking-tight text-indigo-700">
          horizonte<span class="text-amber-500">.</span>
        </NuxtLink>
        <NuxtLink
          to="/"
          class="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-indigo-600 hover:text-indigo-700"
        >
          Voltar ao início
        </NuxtLink>
      </nav>
    </header>

    <section class="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
          Nossa seleção
        </p>
        <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Produtos para acompanhar suas ideias.
        </h1>
        <p class="mt-5 text-lg leading-8 text-slate-600">
          Itens escolhidos para deixar a rotina mais leve, organizada e cheia
          de inspiração.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="product in products"
          :key="product.name"
          class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="flex aspect-[4/3] items-center justify-center bg-stone-100">
            <span
              class="flex h-28 w-28 items-center justify-center rounded-3xl text-3xl font-bold shadow-sm"
              :class="product.color"
            >
              {{ product.initials }}
            </span>
          </div>
          <div class="p-6">
            <p class="text-xs font-semibold uppercase tracking-wider text-indigo-700">
              {{ product.category }}
            </p>
            <div class="mt-2 flex items-start justify-between gap-3">
              <h2 class="text-xl font-semibold">{{ product.name }}</h2>
              <span class="whitespace-nowrap font-semibold text-slate-900">
                {{ product.price }}
              </span>
            </div>
            <p class="mt-3 min-h-14 leading-7 text-slate-600">
              {{ product.description }}
            </p>
            <button
              type="button"
              class="mt-5 w-full rounded-lg bg-indigo-700 px-4 py-3 font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Ver produto
            </button>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
