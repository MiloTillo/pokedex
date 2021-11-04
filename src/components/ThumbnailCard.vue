<template>
  <div>
    <img :src="pokemon.image" />
    <p>{{ pokemon.name }}</p>
    <p>{{ pokemon.number }}</p>
  </div>
</template>



<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PokemonThumbnail } from "../api/models";

export default defineComponent({
  props: {
    pokemon: {
      type: Object as PropType<PokemonThumbnail>,
      required: true,
    },
  },
});
</script>
