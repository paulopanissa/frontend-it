<template>
  <div class="wrapper">
    <div class="form-content">
      <img class="brand-logo" src="@/assets/logo.png" alt="Logo ImageTech" />
      <form
        @submit.prevent="handleSubmit"
        @keypress.enter.prevent="handleSubmit"
        class="form-wrapper"
      >
        <div class="form-row">
          <ErrorMessage :message="watchErrorMessage" />
        </div>
        <div class="form-row">
          <Input
            type="email"
            rules="required|email"
            placeholder="Informe seu e-mail"
            v-model="auth.login"
            @error="handleError($event, 'login')"
          />
        </div>

        <div class="form-row">
          <Input
            type="password"
            rules="required|min:8|password_verify"
            placeholder="*********"
            v-model="auth.password"
            @error="handleError($event, 'password')"
          />
        </div>
        <div class="form-row">
          <Button type="submit" :disabled="getDisabled" button-type="primary"
            >Login</Button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Action, Getter } from "vuex-class";
import Component from "vue-class-component";
import Input from "@/components/Form/Input";
import Button from "@/components/Button/Button";
import ErrorMessage from "@/components/Error/Message";

@Component({
  components: {
    Input,
    Button,
    ErrorMessage
  }
})
export default class Login extends Vue {
  @Action("auth/LOGIN") Login;

  @Getter("auth/isAuth") isAuth: boolean;
  @Getter("auth/onError") onError;

  auth = {
    login: "admin@admin.com",
    password: "Admin@123",
    submitted: false
  };

  error: string | null = null;

  get getDisabled() {
    return this.auth.submitted || this.error !== null;
  }

  get watchErrorMessage() {
    return this.onError || this.error;
  }

  handleError(e: string | null): void {
    this.error = e;
  }

  async handleSubmit(e: Event) {
    e.stopPropagation();
    try {
      if (this.watchErrorMessage) {
        console.log(this.watchErrorMessage);
        return;
      }
      this.auth.submitted = true;
      const { login, password } = this.auth;
      await this.Login({ login, password });
      if (this.isAuth) {
        this.$router.push("/");
      }
    } catch (e) {
      throw new Error(e);
    } finally {
      this.auth.submitted = false;
    }
  }

  mounted() {
    this.$nextTick(() => {
      if (this.isAuth) {
        this.$router.push("/");
      }
    });
  }
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  & .form-content {
    padding: 20px;
    width: 340px;
    min-height: 440px;

    background-color: $color-white;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(121, 121, 121, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .brand-logo {
      object-fit: contain;
      width: 100%;
      height: 120px;
    }
    .form-wrapper {
      padding: 30px 20px;
      width: 100%;
      height: auto;
      .form-row {
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
