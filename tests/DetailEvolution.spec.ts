import { mount } from "@vue/test-utils";
import router from "../src/router";
import DetailEvolution from "../src/components/DetailEvolution.vue";
import ThumbnailCard from "../src/components/ThumbnailCard.vue";
import { PokemonThumbnail } from "../src/api/models";

const pokemon: PokemonThumbnail[] = [
  {
    name: "Charmander",
    number: "1",
    image: "https://example.com",
  },
  {
    name: "Charmilion",
    number: "2",
    image: "https://example.com",
  },
  {
    name: "Charizard",
    number: "3",
    image: "https://example.com",
  },
];
describe("DetailEvolution.vue", () => {
  test("it shows the list of thumbnails", () => {
    const wrappr = mount(DetailEvolution, {
      props: {
        list: pokemon,
      },
      global: {
        plugins: [router],
      },
    });
    const thumbs = wrappr.findAllComponents(ThumbnailCard);
    expect(thumbs.length).toBe(pokemon.length);
  });
  test("it shows a message when there are no evolution", () => {
    const wrappr = mount(DetailEvolution, {
      props: {
        list: [],
      },
      global: {
        plugins: [router],
      },
    });
    expect(wrappr.text()).toContain("This pokemon does not evolve.");
  });
});
