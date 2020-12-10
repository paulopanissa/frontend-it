import VueInstance from "@/main";
import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { Mutations } from "./mutations";
import { ActionTypes, PayloadLogin } from "./action-types";
import { LoginSuccess, MutationTypes } from "./mutation-types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.CHECK_USER](
    { commit }: AugmentedActionContext,
    payload: PayloadLogin
  ): void;
  [ActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
    payload: PayloadLogin
  ): Promise<void>;
  [ActionTypes.LOGOUT]({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.CHECK_USER]({ commit }, payload: any): void {
    const { name, email } = payload;
    const user: any = {
      name,
      email
    };
    commit(MutationTypes.LOGIN_REQUEST, { user });
  },
  async [ActionTypes.LOGIN]({ commit }, payload: PayloadLogin): Promise<void> {
    try {
      const { login, password } = payload;
      commit(MutationTypes.LOGIN_REQUEST);
      const { data } = await VueInstance.$api.get(`/login?email=${login}`);
      const [authenticate] = data;
      if (!authenticate && !authenticate.email) {
        throw "Não foi possível localizar este usuário";
      }

      if (!authenticate.active) {
        throw "Usuário desabilitado.";
      }

      if (authenticate.password !== password) {
        throw "Senha inválida.";
      }

      const user = {
        name: authenticate.name,
        email: authenticate.email
      };

      const stringDecode = JSON.stringify(user);

      VueInstance.$cookies.set("user", stringDecode, {
        expires: "1h"
      });
      commit(MutationTypes.LOGIN_SUCCESS, { user });
    } catch (e) {
      commit(MutationTypes.LOGIN_FAILURE, { error: e });
    }
  },
  [ActionTypes.LOGOUT]({ commit }): void {
    VueInstance.$cookies.remove("user");
    commit(MutationTypes.LOGOUT);
  }
};
