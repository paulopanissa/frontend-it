<template>
  <div class="container">
    <div class="row mb-20">
      <div class="col-8">
        <div class="search-row" @keypress.enter.prevent="handleSearch">
          <Select
            v-model="search.type"
            :options="getSelectInfo"
            :block="false"
            :optionAdapter="
              value => ({
                id: value.value,
                label: value.name,
                value
              })
            "
          />
          <Input
            type="text"
            v-model="search.text"
            placeholder="Localize o usuário"
          />
        </div>
      </div>
      <div class="col-4">
        <div class="options">
          <Button button-type="success" :onPress="handleAdd">
            <plus-circle-icon size="1.5x" /> Adicionar
          </Button>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-lg-4 col-md-6 mb-10"
        v-for="user in users"
        :key="user.id"
      >
        <Card :user="user" :on-delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Card from "@/components/Card/Card.vue";
import NavBar from "@/components/Nav/Nav.vue";
import Input from "@/components/Form/Input.vue";
import Select from "@/components/Form/Select/Select.vue";
import Button from "@/components/Button/Button.vue";
import { PlusCircleIcon } from "vue-feather-icons";

import { objectID } from "@/utils/objectId";

interface UserFilter {
  key: string;
  value: string;
}

@Component({
  components: {
    NavBar,
    Input,
    Card,
    Select,
    Button,
    PlusCircleIcon
  }
})
export default class Home extends Vue {
  selectInfo = [
    { name: "Nome", value: "name" },
    { name: "Email", value: "email" }
  ];
  data = [];
  search = {
    text: "",
    type: "name"
  };

  get getSelectInfo() {
    return this.selectInfo;
  }

  get users() {
    return this.data;
  }

  handleSearch() {
    const { text, type } = this.search;

    const filter: UserFilter = { key: type, value: text };
    this.fetchUsers(filter);
  }

  handleAdd() {
    this.$router.push("/user");
  }

  handleDelete(id: string): void {
    const users = this.data.filter((user: { id: string }) => user.id !== id);

    this.data = users;
  }

  async postUser() {
    const user = {
      id: objectID(),
      name: "Paulo Panissa Filho",
      email: "p.panissa@gmail.com"
    };
    const response = await this.$api.post("users", user);
    console.log(response);
  }

  async fetchUsers(filter?: UserFilter) {
    const route = "users";
    const sortBy = "_sort=name";
    const orderBy = "&_order=asc";
    const search = filter?.value ? `${filter?.key}_like=${filter?.value}&` : "";
    const { data } = await this.$api.get(
      `${route}?${search}${sortBy}${orderBy}`
    );
    this.data = data;
  }

  mounted() {
    this.fetchUsers();
  }
}
</script>

<style lang="scss">
.main {
  margin-top: 30px;
  .search-row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    select {
      margin-right: 15px;
    }
  }

  .options {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
