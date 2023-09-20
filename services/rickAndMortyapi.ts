const BASE_URL = 'https://rickandmortyapi.com/api';

import { CharactersResponse } from "@/interface/charactersResponse";

export const getCharacters = async (page: number) => {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  const data: CharactersResponse = await response.json();
  return data;
};

