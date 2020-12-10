<template>
  <nav>
    <div class="container">
      <div class="nav-container">
        <router-link to="/">
          <img src="@/assets/logo-nav.png" alt="ImageTech" />
        </router-link>

        <div class="options">
          <div class="user-info">
            <div class="user-text">
              <strong>
                <user-icon size="1x" class="custom-class" />
                {{ user.name }}
              </strong>
            </div>
            <div class="user-text d-none d-md-block">
              <mail-icon size="1x" />
              {{ user.email }}
            </div>
            <div class="user-text">
              <a href="#" @click="handleLogout" class="logout">
                <log-out-icon size="1x" />Sair
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { Action, Getter } from "vuex-class";
import Component from "vue-class-component";
import { UserIcon, MailIcon, LogOutIcon } from "vue-feather-icons";

@Component({
  components: {
    UserIcon,
    MailIcon,
    LogOutIcon
  }
})
export default class Nav extends Vue {
  @Getter("auth/user") user;

  // Vuex: Actions
  @Action("auth/LOGOUT") Logout;

  async handleLogout() {
    await this.Logout();
    this.$router.push("/login");
  }
}
</script>

<style lang="scss">
nav {
  width: 100%;
  padding: 15px;
  background: $color-white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 00.1);
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 56px;
    }

    .user-info,
    .user-text {
      display: flex;
      align-items: center;
      .user-text {
        color: $color-primary;
        svg {
          margin-right: 5px;
        }
        &::after {
          content: "|";
          padding: 0 15px;
          color: $color-secondary;
        }
        &:last-child {
          &::after {
            display: none;
          }
        }

        .logout {
          color: $color-danger;
          text-decoration: none;
        }
      }
      & {
        strong {
          font-weight: $font-weight-bold;
        }
      }
    }
  }
}
</style>
