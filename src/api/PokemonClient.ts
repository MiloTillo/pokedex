import http from "./http";
import type {
  ListResponse,
  DetailResponse,
  SpeciesResponse,
  EvolutionResponse,
} from "./models";

export class PokemonClient {
  private readonly http = http;

  async list() {
    return this.http.get<ListResponse>("/pokemon");
  }
  async details(pokemon: string) {
    return this.http.get<DetailResponse>(`/pokemon/${pokemon}`);
  }
  async species(pokemon: string) {
    return this.http.get<SpeciesResponse>(`/pokemon-species/${pokemon}`);
  }
  async evolution(id: string) {
    return this.http.get<EvolutionResponse>(`/evolution-chain/${id}`);
  }
}
