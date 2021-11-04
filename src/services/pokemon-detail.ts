import { ref } from "vue";
import { DetailThumbnail } from "../api/models";
import { PokemonClient } from "../api/PokemonClient";

export const usePokemonDetail = () => {
  const thumb = ref<DetailThumbnail>();
  const fetchDetail = async (pokemon: string) => {
    const client = new PokemonClient();
    const responses = await Promise.all([
      client.details(pokemon),
      client.species(pokemon),
    ]);
    const detail = responses[0].data;
    const species = responses[1].data;
    thumb.value = {
      name: detail.name,
      description: species.flavor_text_entries[0].flavor_text,
      images: {
        front: detail.sprites.front_default,
        back: detail.sprites.back_default,
      },
    };
    const chainId = species.evolution_chain.url.split("/");
    return chainId[chainId.length - 2];
  };
  return { thumb, fetchDetail };
};
