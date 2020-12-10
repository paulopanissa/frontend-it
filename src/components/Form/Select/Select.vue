<template>
  <select :class="getClassStyle" @change="$emit('input', $event.target.value)">
    <template v-if="!!adapterOptions">
      <option
        v-for="(option, idx) in adapterOptions"
        :key="idx"
        :value="option.id"
        >{{ option.label }}</option
      >
    </template>
    <template v-else>
      <option disabled>Informe os dados</option>
    </template>
  </select>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const SelectProps = Vue.extend({
  props: {
    options: {
      type: Array,
      default: () => []
    },
    optionAdapter: {
      type: Function,
      default: value => ({
        id: value,
        label: value,
        value
      })
    },
    block: {
      type: Boolean,
      default: true
    }
  }
});

@Component
export default class Select extends SelectProps {
  get adapterOptions() {
    return this.options.map(x => this.optionAdapter(x));
  }

  get getClassStyle() {
    const style = ["select"];

    if (this.block) {
      style.push("block");
    }
    return style.join(" ");
  }
}
</script>

<style lang="scss" scoped>
.select {
  font-family: $font-default;
  color: $color-primary;
  border-radius: 3px;
  border: 1px solid $color-primary;
  height: 50px;
  width: 130px;
  padding: 10px;
  option {
    font-size: $font-size-default;
  }
}

.block {
  width: 100%;
}
</style>
