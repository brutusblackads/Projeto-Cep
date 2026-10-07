<script setup lang="ts">
const highlights = [
  {
    number: '01',
    title: 'Explore novas ideias',
    description: 'Descubra inspirações para tirar seus planos do papel.',
  },
  {
    number: '02',
    title: 'Organize seu caminho',
    description: 'Transforme objetivos grandes em passos simples e possíveis.',
  },
  {
    number: '03',
    title: 'Celebre cada avanço',
    description: 'Valorize o progresso e mantenha a motivação em movimento.',
  },
]
</script>

<template>
  <main class="min-h-screen bg-stone-50 text-slate-900">
    <header class="border-b border-slate-200/80 bg-white">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" class="text-xl font-bold tracking-tight text-indigo-700">
          horizonte<span class="text-amber-500">.</span>
        </a>
        <a
          href="#destaques"
          class="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-indigo-600 hover:text-indigo-700"
        >
          Conheça mais
        </a>
      </nav>
    </header>

    <section class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
      <div>
        <p class="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
          Um passo de cada vez
        </p>
        <h1 class="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Grandes ideias começam com
          <span class="text-indigo-700"> curiosidade.</span>
        </h1>
        <p class="mt-6 max-w-lg text-lg leading-8 text-slate-600">
          Um espaço para explorar possibilidades, organizar pensamentos e
          encontrar inspiração para o que vem pela frente.
        </p>
        <a
          href="#destaques"
          class="mt-8 inline-flex rounded-lg bg-indigo-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Começar a explorar
        </a>
      </div>

      <div class="relative mx-auto w-full max-w-md">
        <div class="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-amber-200/70 blur-2xl" />
        <div class="absolute -bottom-6 -left-5 h-32 w-32 rounded-full bg-indigo-200/80 blur-2xl" />
        <div class="relative rounded-3xl bg-indigo-700 p-8 text-white shadow-xl sm:p-10">
          <span class="text-sm font-medium text-indigo-200">Uma ideia para hoje</span>
          <p class="mt-8 text-3xl font-semibold leading-snug">
            “A melhor maneira de começar é começar.”
          </p>
          <div class="mt-10 flex items-center gap-3">
            <span class="h-px w-10 bg-amber-300" />
            <span class="text-sm text-indigo-200">Seu próximo capítulo</span>
          </div>
        </div>
      </div>
    </section>

    <section id="destaques" class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Por onde começar
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Um pouco de inspiração para seguir em frente.
          </h2>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-3">
          <article
            v-for="highlight in highlights"
            :key="highlight.number"
            class="rounded-2xl border border-slate-200 bg-stone-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span class="text-sm font-bold text-indigo-700">{{ highlight.number }}</span>
            <h3 class="mt-5 text-xl font-semibold">{{ highlight.title }}</h3>
            <p class="mt-3 leading-7 text-slate-600">{{ highlight.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <footer class="border-t border-slate-200 bg-stone-50 px-6 py-6 text-center text-sm text-slate-500">
      Feito para imaginar o que vem a seguir.
    </footer>
  </main>
</template>
