<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    placeholder?: string
    type?: string
  }>(),
  {
    placeholder: '',
    type: 'text',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="min-w-0 rounded-lg border border-cola-line bg-cola-white px-4 py-3 text-cola-text outline-none transition placeholder:text-cola-muted focus:border-cola-red focus:ring-2 focus:ring-cola-red/20"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>
