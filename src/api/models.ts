export interface ListResponse {
  count: number;
  next: string;
  previous?: any;
  results: Thumbnail[];
}

export interface Thumbnail {
  name: string;
  url: string;
}

export interface PokemonThumbnail {
  name: string;
  number: string;
  image: string;
}
export interface DetailThumbnail {
  name: string;
  description: string;
  images: {
    front: string;
    back: string;
  };
}

export interface DetailResponse {
  abilities: Ability[];
  base_experience: number;
  forms: AbilityDetail[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: AbilityDetail;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Type {
  slot: number;
  type: AbilityDetail;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: AbilityDetail;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

export interface Versions {
  "generation-i": Generationi;
  "generation-ii": Generationii;
  "generation-iii": Generationiii;
  "generation-iv": Generationiv;
  "generation-v": Generationv;
  "generation-vi": Generationvi;
  "generation-vii": Generationvii;
  "generation-viii": Generationviii;
}

export interface Generationviii {
  icons: Dreamworld;
}

export interface Generationvii {
  icons: Dreamworld;
  "ultra-sun-ultra-moon": Home;
}

export interface Generationvi {
  "omegaruby-alphasapphire": Home;
  "x-y": Home;
}

export interface Generationv {
  "black-white": Blackwhite;
}

export interface Blackwhite {
  animated: Diamondpearl;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generationiv {
  "diamond-pearl": Diamondpearl;
  "heartgold-soulsilver": Diamondpearl;
  platinum: Diamondpearl;
}

export interface Diamondpearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generationiii {
  emerald: Emerald;
  "firered-leafgreen": Crystal;
  "ruby-sapphire": Crystal;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface Generationii {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Generationi {
  "red-blue": Redblue;
  yellow: Redblue;
}

export interface Redblue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface Other {
  dream_world: Dreamworld;
  home: Home;
  "official-artwork": Officialartwork;
}

export interface Officialartwork {
  front_default: string;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Dreamworld {
  front_default: string;
  front_female?: any;
}

export interface Move {
  move: AbilityDetail;
  version_group_details: Versiongroupdetail[];
}

export interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: AbilityDetail;
  version_group: AbilityDetail;
}

export interface HeldItem {
  item: AbilityDetail;
  version_details: Versiondetail[];
}

export interface Versiondetail {
  rarity: number;
  version: AbilityDetail;
}

export interface GameIndex {
  game_index: number;
  version: AbilityDetail;
}

export interface Ability {
  ability: AbilityDetail;
  is_hidden: boolean;
  slot: number;
}

export interface AbilityDetail {
  name: string;
  url: string;
}
export interface SpeciesResponse {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: Color[];
  evolution_chain: Evolutionchain;
  evolves_from_species?: any;
  flavor_text_entries: Flavortextentry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: Color;
  growth_rate: Color;
  habitat: Color;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: Palparkencounter[];
  pokedex_numbers: Pokedexnumber[];
  shape: Color;
  varieties: Variety[];
}

export interface Variety {
  is_default: boolean;
  pokemon: Color;
}

export interface Pokedexnumber {
  entry_number: number;
  pokedex: Color;
}

export interface Palparkencounter {
  area: Color;
  base_score: number;
  rate: number;
}

export interface Name {
  language: Color;
  name: string;
}

export interface Genus {
  genus: string;
  language: Color;
}

export interface Flavortextentry {
  flavor_text: string;
  language: Color;
  version: Color;
}

export interface Evolutionchain {
  url: string;
}

export interface Color {
  name: string;
  url: string;
}
export interface EvolutionResponse {
  id: number;
  baby_trigger_item?: any;
  chain: Chain;
}

export interface Chain {
  is_baby: boolean;
  species: Species;
  evolution_details?: any;
  evolves_to: Evolvesto[];
}

export interface Evolvesto {
  is_baby: boolean;
  species: Species;
  evolution_details: Evolutiondetail[];
  evolves_to: any[];
}

export interface Evolutiondetail {
  item?: any;
  trigger: Species;
  gender?: any;
  held_item?: any;
  known_move?: any;
  known_move_type?: any;
  location?: any;
  min_level: number;
  min_happiness?: any;
  min_beauty?: any;
  min_affection?: any;
  needs_overworld_rain: boolean;
  party_species?: any;
  party_type?: any;
  relative_physical_stats?: any;
  time_of_day: string;
  trade_species?: any;
  turn_upside_down: boolean;
}

export interface Species {
  name: string;
  url: string;
}
