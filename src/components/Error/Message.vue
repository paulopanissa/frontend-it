<template>
  <span class="error-message mt-5 mb-5" v-if="message">
    {{ message }}
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["message"]
});
</script>

<style lang="scss">
.error-message {
  color: $color-danger;
}
</style>
