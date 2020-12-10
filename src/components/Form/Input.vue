<template>
  <ValidationObserver
    tag="form"
    ref="input"
    @keyup="handleUpdate"
    class="inherit"
  >
    <ValidationProvider :rules="rules">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        class="input"
        :class="[classNames, { 'input-error': isError }]"
      />
    </ValidationProvider>
  </ValidationObserver>
</template>

<script lang="ts">
import InputProps from "./props";
import Component from "vue-class-component";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { delay } from "@/utils/delay";
import { required, min, max, email } from "vee-validate/dist/rules";
import { passwordVerify } from "./rules";

extend("required", required);
extend("email", email);
extend("min", min);
extend("max", max);
extend("password_verify", passwordVerify);

@Component({
  components: {
    ValidationProvider,
    ValidationObserver
  }
})
export default class Input extends InputProps {
  $refs!: {
    input: HTMLFormElement;
    validationProviderRef: InstanceType<typeof ValidationProvider>;
    validationObserverRef: InstanceType<typeof ValidationObserver>;
  };
  get classNames(): string {
    const _class = [];

    _class.push(`input-${this.size}`);

    return _class.join(" ");
  }

  async handleUpdate(e: Event) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm = this;

    delay(async function() {
      const v = await vm.$refs.input.validate();
      if (!v) {
        vm.$emit("error", "Senha inválido");
      } else {
        vm.$emit("error", null);
      }
    }, 800);
    const { value } = e.target;
    vm.$emit("input", value);
  }
}
</script>

<style lang="scss">
.inherit {
  width: inherit;
}

.input {
  font-family: $font-default;
  color: $color-primary;
  width: 100%;
  border-radius: 3px;
  border: 1px solid $color-primary;
  & :hover {
    color: $color-primary-hover;
    border: 1px solid $color-primary-hover;
  }

  & :focus {
    color: $color-primary-focus;
    border: 1px solid $color-primary-focus;
  }

  &:disabled {
    color: $color-primary-disabled;
  }
  &::placeholder {
    color: lighten($color-primary, 20%);
  }
}

.input-sm {
  padding: 8px 15px;
  height: 35px;
  font-size: $font-size-sm;
}

.input-md {
  padding: 10px 15px;
  height: 50px;
  font-size: $font-size-default;
}

.input-lg {
  padding: 10px 15px;
  height: 75px;
  font-size: $font-size-md;
}

.success {
  color: $color-success;
  transition: all 0.3s ease-in-out;
  border: 1px solid $color-success;
  & :hover {
    color: $color-success-hover;
    border: 1px solid $color-success-hover;
  }

  & :focus {
    color: $color-success-focus;
    border: 1px solid $color-success-focus;
  }

  &:disabled {
    color: $color-success-disabled;
  }
  &::placeholder {
    color: lighten($color-success, 20%);
  }
}

.input-error {
  color: $color-danger;
  transition: all 0.3s ease-in-out;
  border: 1px solid $color-danger;
  & :hover {
    color: $color-danger-hover;
    border: 1px solid $color-danger-hover;
  }

  & :focus {
    color: $color-danger-focus;
    border: 1px solid $color-danger-focus;
  }

  &:disabled {
    color: $color-danger-disabled;
  }
  &::placeholder {
    color: lighten($color-danger, 20%);
  }
}
</style>
