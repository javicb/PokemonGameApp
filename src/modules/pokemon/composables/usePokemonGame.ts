import { computed, onMounted, ref } from 'vue'
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces'
import { pokemonApi } from '../api/pokemonApi'

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  const pokemons = ref<Pokemon[]>([])
  const pokemonOptions = ref<Pokemon[]>([])

  const randomPokemon = computed(
    () => pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)],
  )
  const isLoading = computed(() => pokemons.value.length === 0)

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=1025')

    const pokemonArray = response.data.results.map((pokemon) => {
      return {
        id: +(pokemon.url.split('/').at(-2) || '0'),
        name: pokemon.name,
      }
    })

    return pokemonArray.sort(() => Math.random() - 0.5)
  }

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing
    pokemonOptions.value = pokemons.value.slice(0, howMany)
    pokemons.value = pokemons.value.slice(howMany)
  }

  const checkAnswer = (id: number) => {
    if (id === randomPokemon.value.id) {
      gameStatus.value = GameStatus.Win
    } else {
      gameStatus.value = GameStatus.Lose
    }
  }

  onMounted(async () => {
    pokemons.value = await getPokemons()
    getNextOptions()
  })

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,
    getNextOptions,
    checkAnswer,
  }
}
