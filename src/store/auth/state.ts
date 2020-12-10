export const state: any = {
  auth: false,
  user: {
    name: "",
    email: ""
  },
  error: null
};

export type State = typeof state;
