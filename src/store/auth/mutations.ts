import { MutationTree } from "vuex";
import { State } from "./state";
import { MutationTypes, LoginSuccess, LoginFailure } from "./mutation-types";

export type Mutations<S = State> = {
  [MutationTypes.LOGIN_REQUEST](state: S): void;
  [MutationTypes.LOGIN_SUCCESS](state: S, payload: LoginSuccess): void;
  [MutationTypes.LOGIN_FAILURE](state: S, payload: LoginFailure): void;
  [MutationTypes.LOGOUT](state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.LOGIN_REQUEST](state) {
    state.auth = false;
    state.user = { name: "", email: "" };
    state.error = null;
  },

  [MutationTypes.LOGIN_SUCCESS](state, payload: LoginSuccess) {
    state.user = { name: payload.user.name, email: payload.user.email };
    state.auth = true;
  },
  [MutationTypes.LOGIN_FAILURE](state, { error }: LoginFailure) {
    state.error = error;
  },
  [MutationTypes.LOGOUT](state) {
    state.auth = false;
    state.user = { name: "", email: "" };
    state.error = null;
  }
};
