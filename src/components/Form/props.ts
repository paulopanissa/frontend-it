import Vue from "vue";

const InputProps = Vue.extend({
  props: {
    type: {
      type: String,
      default: "text",
      validator: function(value) {
        return ["text", "password", "email"].indexOf(value) !== -1;
      }
    },
    isError: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    rules: {
      type: String
    },
    value: {
      type: [String, Object, Array, Number, Boolean],
      default: null
    }
  }
});

export default InputProps;
