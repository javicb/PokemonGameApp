<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>

  <section
    v-else
    class="absolute flex flex-col items-center justify-center space-y-4 lg:top-[50%] lg:left-[25%] lg:translate-x-[-25%] lg:translate-y-[-50%]"
  >
    <div>
      <PokemonPicture
        :pokemon-id="randomPokemon.id"
        :show-pokemon="gameStatus !== GameStatus.Playing"
      />
    </div>
    <div>
      <h3 class="text-center text-xl font-bold">{{ gameStatus }}</h3>
    </div>
    <div>
      <PokemonOptions
        :options="options"
        :block-selection="gameStatus !== GameStatus.Playing"
        :correct-answer="randomPokemon.id"
        @select-option="checkAnswer"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'
import { usePokemonGame } from '../composables/usePokemonGame'
import { GameStatus } from '../interfaces'

const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonOptions: options,
  checkAnswer,
} = usePokemonGame()
</script>

<style scoped>
h3 {
  font-family: 'Pokemon Solid';
  color: white;
  text-shadow:
    2px 2px 0 #ffcb05,
    -2px -2px 0 #ffcb05,
    2px -2px 0 #ffcb05,
    -2px 2px 0 #ffcb05;
  @apply text-blue-500 text-3xl m-5 z-10;
}
</style>
