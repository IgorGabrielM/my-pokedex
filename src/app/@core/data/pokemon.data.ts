export class IPokemonModel{
    abilities: [];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    past_types: [];
    species: {name: string, url: string,
    sprites: ISpritesModel;
    stats: [],
    types: ITypesModel;
    weight: number;
}

export class ITypesModel{
    slot: number;
    type: {
        name: string,
        url: string
    }
}

export class ISpritesModel{
    back_default?: string
    back_female?: string
    back_shiny ?: string
    back_shiny_female?: string
    front_default ?: string
    front_female ?: string
    front_shiny ?: string
    front_shiny_female ?: string
}