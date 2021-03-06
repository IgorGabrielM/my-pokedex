export class PokemonDetailModel {
  id: number;
  order: number;
  name: string;
  height: number;
  abilities: Ability[];
  spices: Species;
  types: Type[];
  weight: number;
  sprites: Sprite;
  base_experience: number;
  stats: Stat[];

  constructor() {
    this.abilities  = [];
    this.types = [];
  }
}

class Ability  {
  ability: {
    name: string;
  }

  constructor() {

  }
}

class Species {
  url: string;
}

class Type {
  slot: number;
  type: {
    name: string;
  }
}

class Sprite {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
}

class Stat {
  base_stat: number;
  stat: {
    name: string;
  }
}
