<template>
  <button
    :type="type"
    class="btn"
    :class="[getButtonStyle, { 'is-block': block }]"
    :disabled="disabled"
    @click="onPress"
  >
    <slot />
  </button>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

const ButtonProps = Vue.extend({
  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "md"
    },
    buttonType: {
      type: String,
      default: ""
    },
    onPress: {
      type: Function,
      default: () => ({})
    }
  }
});

@Component
export default class Button extends ButtonProps {
  get getButtonStyle() {
    const style = [];

    if (this.size) {
      style.push(`btn-${this.size}`);
    }

    if (this.buttonType) {
      style.push(`btn-${this.buttonType}`);
    }

    return style.join(" ");
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 12px 35px;
  font-family: inherit;
  font-size: inherit;
  color: $color-primary;
  background: $color-gray-3;
  border: 1px solid $color-gray-3;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: $color-primary;
    color: $color-gray-3;
  }
  &:disabled {
    pointer-events: none;
  }

  svg {
    margin-right: 10px;
  }
}

.is-block {
  width: 100% !important;
}

.btn-primary {
  color: $color-white;
  background: $color-primary;
  &:hover {
    color: $color-primary;
    background: $color-white;
  }
  &:focus {
    color: $color-white;
    background: $color-primary-focus;
  }
  &:disabled {
    color: $color-white;
    background: $color-primary-disabled;
  }
}

.btn-success {
  color: $color-white;
  background: $color-success;
  &:hover {
    color: $color-success;
    background: $color-white;
  }
  &:focus {
    color: $color-white;
    background: $color-success-focus;
  }
  &:disabled {
    color: $color-white;
    background: $color-success-disabled;
  }
}

.btn-warning {
  color: $color-white;
  background: $color-warning;
  &:hover {
    color: $color-warning;
    background: $color-white;
  }
  &:focus {
    color: $color-white;
    background: $color-warning-focus;
  }
  &:disabled {
    color: $color-white;
    background: $color-warning-disabled;
  }
}

.btn-danger {
  color: $color-white;
  background: $color-danger;
  &:hover {
    color: $color-danger;
    background: $color-white;
  }
  &:focus {
    color: $color-white;
    background: $color-danger-focus;
  }
  &:disabled {
    color: $color-white;
    background: $color-danger-disabled;
  }
}

.btn-info {
  color: $color-white;
  background: $color-info;
  &:hover {
    color: $color-info;
    background: $color-white;
  }
  &:focus {
    color: $color-white;
    background: $color-info-focus;
  }
  &:disabled {
    color: $color-white;
    background: $color-info-disabled;
  }
}
</style>
