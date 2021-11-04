<template>
  <h1>Home</h1>
  <div v-for="pokemon of data" :key="pokemon.number">
    <RouterLink :to="{ name: 'detail', params: { pokemon: pokemon.name } }">
      <ThumbnailCard :pokemon="pokemon" />
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import ThumbnailCard from "../components/ThumbnailCard.vue";
import { usePokemonList } from "../services/pokemon-list";

const { data, fetchList } = usePokemonList();

onMounted(fetchList);
</script>
