<template>
  <section class="flex flex-col mt-5">
    <div class="grid grid-cols-2 gap-4">
      <button
        v-for="{ name, id } in options"
        :key="id"
        @click="$emit('selectOption', id)"
        :disabled="blockSelection"
        :class="[
          'capitalize',
          {
            correct: id === correctAnswer && blockSelection,
          },
        ]"
      >
        {{ name }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces'

interface Props {
  options: Pokemon[]
  blockSelection: boolean
  correctAnswer: number
}

defineProps<Props>()

defineEmits<{
  selectOption: [id: number]
}>()
</script>

<style scoped>
@font-face {
  font-family: 'Pokemon Hollow';
  src: url('/src/assets/fonts/Pokemon Hollow.ttf') format('truetype');
}

button {
  /* font-family: 'Pokemon Hollow'; */
  letter-spacing: 0.05em;
  text-shadow:
    2px 2px 0 #3b5da8,
    -2px -2px 0 #3b5da8,
    2px -2px 0 #3b5da8,
    -2px 2px 0 #3b5da8;
  @apply bg-[#df1c18] text-yellow-200 shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-[#f34c3c];
  font-size: 0.875rem; /* Base size for small screens */
  margin: 4px;
  @screen sm {
    font-size: 1rem; /* Slightly larger for small screens (≥640px) */
    margin: 8px;
  }
  @screen md {
    font-size: 1.25rem; /* Default size for medium screens (≥768px) */
    margin: 10px;
  }
}

.correct {
  @apply bg-green-500;
}
</style>
