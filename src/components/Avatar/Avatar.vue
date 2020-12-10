<template>
  <div class="avatar" :class="size">
    <img :src="src" alt="Avatar Profile" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const AvatarProps = Vue.extend({
  props: {
    size: {
      type: String,
      default: "default"
    },
    src: {
      type: String,
      required: true
    }
  }
});

@Component
export default class Avatar extends AvatarProps {}
</script>

<style lang="scss">
.avatar {
  height: 80px;
  width: 80px;
  & img {
    border-radius: 50%;
  }
}

.sm {
  height: 36px;
  width: 36px;
}
.default {
  height: 80px;
  width: 80px;
}
.md {
  height: 256px;
  width: 256px;
}
.lg {
  height: 512px;
  width: 512px;
}
</style>
