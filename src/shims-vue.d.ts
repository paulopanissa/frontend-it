import ApiService from "./services/api";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  interface Vue {
    $api: ApiService;
  }
}

export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}
