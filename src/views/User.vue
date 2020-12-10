<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Button :on-press="handleBack" button-type="info">Voltar</Button>
      </div>
    </div>
    <div class="row mt-40">
      <div class="col-12 offset-0 col-md-6 offset-md-3">
        <form
          class="form-user"
          @submit.prevent="handleSubmit"
          @keypress.enter.prevent="handleSubmit"
        >
          <div class="row">
            <div class="col-12">
              <h3>{{ getTitle }}</h3>
            </div>
          </div>
          <div class="row mt-20">
            <div class="col-12">
              <Input
                type="text"
                v-model="user.name"
                rules="required"
                placeholder="Informe nome do usuário"
              />
            </div>
          </div>
          <div class="row mt-20">
            <div class="col-12">
              <Input
                type="email"
                rules="required|email"
                placeholder="Informe email do usuário"
                v-model="user.email"
              />
            </div>
          </div>
          <div class="row mt-40">
            <div class="col-12 d-flex justify-content-end">
              <Button button-type="success" type="submit" block>
                <CheckCircleIcon size="1.5x" /> Salvar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Button from "@/components/Button/Button.vue";
import Input from "@/components/Form/Input.vue";
import { CheckCircleIcon } from "vue-feather-icons";
import { objectID } from "@/utils/objectId";

interface Usuario {
  id?: string;
  name: string;
  email: string;
}

@Component({
  components: {
    Button,
    Input,
    CheckCircleIcon
  }
})
export default class User extends Vue {
  user: Usuario = {
    id: null,
    name: "",
    email: ""
  };

  get getTitle() {
    return this.user.id ? "Editar Usuário" : "Adicionar Usuário";
  }

  /**
   * Methods
   */
  handleBack() {
    this.$router.push("/");
  }

  async fetchUser(id: string) {
    const { data } = await this.$api.get(`/users?id=${id}`);
    const [user] = data;

    this.user = user;
  }

  async storeUser(user: Usuario) {
    const id = objectID();
    const { status } = await this.$api.post("/users", { ...user, id });
    if (status === 201) {
      this.handleBack();
    }
  }

  async putUser(user: Usuario) {
    const { status } = await this.$api.put(`/users/${user.id}`, user);
    if (status === 200) {
      this.handleBack();
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    const { id } = this.user;
    if (id) {
      this.putUser(this.user);
    } else {
      this.storeUser(this.user);
    }
  }

  mounted() {
    this.$nextTick(() => {
      if (this.$route.params.id) {
        this.fetchUser(this.$route.params.id);
      }
    });
  }
  destroyed() {
    this.user = {
      name: "",
      email: "",
      id: null
    };
  }
}
</script>

<style lang="scss">
.form-user {
  width: 100%;
  height: auto;
  padding: 40px;
  background: $color-white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.01);
}
</style>
