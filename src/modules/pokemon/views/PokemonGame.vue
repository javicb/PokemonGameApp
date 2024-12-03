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
    <div>
      <button
        v-if="gameStatus !== GameStatus.Playing"
        @click="getNextRound(4)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Jugar de nuevo
      </button>
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
  getNextRound,
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
  @apply text-blue-500 text-5xl m-5 z-10;
}

button {
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
