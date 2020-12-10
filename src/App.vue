<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const DEFAULT_TRANSITION = "slide-right";

@Component
export default class App extends Vue {
  transitionName = DEFAULT_TRANSITION;

  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName =
        to.meta.transitionName ||
        from.meta.transitionName ||
        DEFAULT_TRANSITION;
      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  }
}
</script>
