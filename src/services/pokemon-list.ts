import {  ref } from "vue";
import { PokemonThumbnail } from "../api/models";
import { PokemonClient } from "../api/PokemonClient";

export const usePokemonList = () => {
    const data = ref<PokemonThumbnail[]>([]);
    const fetchList = async () => {
      const client = new PokemonClient();
      const response = await client.list();
      const results = response.data.results;
      data.value = results.map((result) => {
        const urlItems = result.url.split("/");
        const num = urlItems[urlItems.length - 2];
        return {
          name: result.name,
          number: num,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`,
        };
      });
    };
    return {data, fetchList}
}