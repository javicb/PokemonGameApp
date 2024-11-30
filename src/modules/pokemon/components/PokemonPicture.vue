<template>
  <section>
    <h1 class="block md:hidden">¿Cuál es este Pokemon?</h1>
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      alt="Pokemon"
      class="brightness-0 h-[400px]"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@font-face {
  font-family: 'Pokemon Solid';
  src: url('/src/assets/fonts/Pokemon Solid.ttf') format('truetype');
}

h1 {
  font-family: 'Pokemon Solid';
  color: white;
  text-shadow:
    2px 2px 0 #ffcb05,
    -2px -2px 0 #ffcb05,
    2px -2px 0 #ffcb05,
    -2px 2px 0 #ffcb05;
  @apply text-blue-500 text-3xl m-5 z-10;
}
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
