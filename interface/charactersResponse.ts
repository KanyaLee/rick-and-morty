import { Character } from "./character";
import { Info } from "./info";

export interface CharactersResponse {
    info: Info;
    results: Character[];
}

