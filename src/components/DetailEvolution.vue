<template>
  <div v-if="list.length > 0">
    <div v-for="pokemon of list" :key="pokemon.number">
      <RouterLink :to="{ name: 'detail', params: { pokemon: pokemon.name } }">
        <ThumbnailCard :pokemon="pokemon" />
      </RouterLink>
    </div>
  </div>
  <p v-else>This pokemon does not evolve.</p>
</template>

<script lang="ts">
import ThumbnailCard from "./ThumbnailCard.vue";

import { defineComponent, PropType } from "vue";
import { PokemonThumbnail } from "../api/models";

export default defineComponent({
  components: {
    ThumbnailCard,
  },
  props: {
    list: {
      type: Array as PropType<PokemonThumbnail[]>,
      required: true,
    },
  },
});
</script>
