import { ref } from "vue";
import { Evolvesto, PokemonThumbnail } from "../api/models";
import { PokemonClient } from "../api/PokemonClient";

export const usePokemonEvolution = () => {
  const data = ref<PokemonThumbnail[]>([]);
  const fetchEvolution = async (id: string) => {
    const evolutions: PokemonThumbnail[] = [];
    const getEvolvesTo = (e: Evolvesto) => {
      const urlItems = e.species.url.split("/");
      const num = urlItems[urlItems.length - 2];
      evolutions.push({
        name: e.species.name,
        number: num,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`,
      });
      if (e.evolves_to.length > 0) {
        e.evolves_to.forEach((i) => {
          getEvolvesTo(i);
        });
      }
    };
    const client = new PokemonClient();
    const response = await client.evolution(id);
    const results = response.data.chain.evolves_to;
    results.forEach(getEvolvesTo);
    data.value = evolutions;
  };
  return { data, fetchEvolution };
};
