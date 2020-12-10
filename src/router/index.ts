import Vue from "vue";
import store from "../store";
import VueRouter, { RouteConfig } from "vue-router";
import Template from "@/components/Layout/Template.vue";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import PageNotFound from "../views/PageNotFound.vue";
import AuthLogin from "../views/Auth/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Template,
    meta: {
      auth: true,
      transitionName: "slide"
    },
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        meta: {
          auth: true
        }
      },
      {
        path: "/user",
        name: "user.create",
        component: User,
        meta: {
          auth: true
        }
      },
      {
        path: "/user/:id",
        name: "user.edit",
        component: User,
        meta: {
          auth: true
        }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AuthLogin
  },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  // mode: "history",
  routes
});

router.beforeEach((to, from_, next) => {
  const loggedIn = store.getters["auth/isAuth"];
  if (to.meta.auth && !loggedIn) {
    return next("/login");
  }
  next();
});

export default router;
