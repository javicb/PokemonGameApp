<template>
  <section class="mt-5">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@font-face {
  font-family: 'Pokemon Hollow';
  src: url('/src/assets/fonts/Pokemon Hollow.ttf') format('truetype');
}
li {
  font-family: 'Pokemon Hollow';
  color: white;
  text-shadow:
    2px 2px 0 #3b5da8,
    -2px -2px 0 #3b5da8,
    2px -2px 0 #3b5da8,
    -2px 2px 0 #3b5da8;
  @apply bg-[#df1c18] text-yellow-200 shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-[#f34c3c];
}
</style>
