<template>
  <div>
    <NavBar />
    <div class="main">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import NavBar from "@/components/Nav/Nav";

@Component({
  components: {
    NavBar
  }
})
export default class Template extends Vue {}
</script>

<style lang="scss">
.main {
  margin-top: 30px;
}
</style>
