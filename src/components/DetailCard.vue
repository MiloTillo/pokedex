<template>
  <div>
    <h1>{{ pokemon.name }}</h1>
    <p>{{ pokemon.description }}</p>

    <img :src="pokemon.images.front" />
    <img :src="pokemon.images.back" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { DetailThumbnail } from "../api/models";

export default defineComponent({
  props: {
    pokemon: {
      type: Object as PropType<DetailThumbnail>,
      required: true,
    },
  },
});
</script>
