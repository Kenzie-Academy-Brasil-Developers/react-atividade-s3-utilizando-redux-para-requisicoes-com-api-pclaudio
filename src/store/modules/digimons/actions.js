import { ADD_DIGIMONS } from "./actionsType";

export const addDigimon = (digimon) => ({
  type: ADD_DIGIMONS,
  digimon,
});
