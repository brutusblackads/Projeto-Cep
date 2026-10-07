<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  {
    type: 'button',
    disabled: false,
  },
)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="shrink-0 rounded-lg bg-cola-red px-5 py-3 font-semibold text-cola-white transition hover:bg-cola-dark focus:outline-none focus:ring-2 focus:ring-cola-red focus:ring-offset-2 focus:ring-offset-cola-canvas disabled:cursor-not-allowed disabled:opacity-50"
  >
    <slot />
  </button>
</template>
