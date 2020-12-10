import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  isAuth(state: State): boolean;
  user(state: State): Record<string, string>;
  onError(state: State): string | null;
};

export const getters: GetterTree<State, State> & Getters = {
  isAuth: state => state.auth,
  user: state => state.user,
  onError: state => state.error
};
