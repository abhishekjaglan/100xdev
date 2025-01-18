import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: async (id) => {
    return TODOS.find(x =>  x.id === id)
  },
});