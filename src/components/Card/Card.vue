<template>
  <div class="card">
    <Avatar
      :src="`https://avatar.oxro.io/avatar.svg?name=${user.name}&length=1`"
    />
    <div class="card-content ml-20">
      <h3>{{ user.name }}</h3>
      <p class="mt-15 mb-15">{{ user.email }}</p>
      <div class="opts">
        <router-link
          :to="{ name: 'user.edit', params: { id: user.id } }"
          class="btn btn-warning"
        >
          <edit-icon size="1x" />
        </router-link>
        <a href="#" class="btn btn-danger" @click="onDelete(user.id)">
          <trash-icon size="1x" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Avatar from "@/components/Avatar/Avatar.vue";
import { EditIcon, TrashIcon } from "vue-feather-icons";

const CardProps = Vue.extend({
  props: {
    user: {
      type: Object,
      default: () => ({}),
      required: true
    },
    onDelete: {
      type: Function
    }
  }
});

@Component({
  components: {
    Avatar,
    TrashIcon,
    EditIcon
  }
})
export default class Card extends CardProps {}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 30px;
  background: $color-white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.01);
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.4s ease-in-out;
  user-select: none;
  &:hover {
    transform: scale(1.03);
  }

  & .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    h3 {
      font-weight: $font-weight-regular;
      color: $color-primary;
      font-size: $font-size-md;
    }
    p {
      font-weight: $font-weight-light;
      color: darken($color-gray-3, 40%);
      font-size: $font-size-sm;
    }
    & .opts {
      display: flex;
      justify-content: flex-end;
      .btn {
        padding: 5px;
        margin-right: 5px;
        height: auto;
        transition: all 3s ease-in-out;
        &:last-child {
          margin-right: 0;
        }
      }

      .btn-danger {
        color: $color-danger;
        &:hover {
          color: $color-danger-hover;
        }
      }

      .btn-warning {
        color: $color-warning;
        &:hover {
          color: $color-warning-hover;
        }
      }
    }
  }
}
</style>
