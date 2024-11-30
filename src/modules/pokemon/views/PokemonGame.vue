<template>
  <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>

  <section v-else class="relative flex flex-col justify-center items-center w-screen h-screen">
    <div class="flex w-full">
      <PokemonPicture class="md:ml-[22rem] ml-10 flex-shrink-0" />
    </div>
    <div class="flex w-full">
      <PokemonOptions class="md:ml-[30rem] ml-36 flex-shrink-0" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'
</script>
