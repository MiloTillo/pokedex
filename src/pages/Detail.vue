<template>
  <div v-if="!thumb">Loading</div>
  <DetailCard v-else :pokemon="thumb" />
  <DetailEvolution :list="data" />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import DetailCard from "../components/DetailCard.vue";
import { usePokemonDetail } from "../services/pokemon-detail";
import { usePokemonEvolution } from "../services/pokemon-evolution";
import DetailEvolution from "../components/DetailEvolution.vue";

const route = useRoute();
const pokemon = route.params.pokemon as string;
const { thumb, fetchDetail } = usePokemonDetail();
const { data, fetchEvolution } = usePokemonEvolution();

const hydrate = async (pokemon: string) => {
  const id = await fetchDetail(pokemon);
  fetchEvolution(id);
};

watch(
  () => route.params.pokemon,
  (v) => hydrate(v as string)
);

onMounted(() => hydrate(pokemon));
</script>
