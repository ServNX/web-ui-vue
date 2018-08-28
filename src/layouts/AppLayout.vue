<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>

        <v-list-tile @click="route('/admin/dashboard')">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              Dashboard
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="route('/admin/services')">
          <v-list-tile-action>
            <v-icon>rounded_corner</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              Services
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar color="white" light fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img class="logo" :src="require('../assets/logo.png')"/>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer color="white" app>
      <span>&copy; ServNX, LLC 2018-2019</span>
    </v-footer>

  </v-app>
</template>

<style lang="scss" scoped>
  .v-footer.white {
    border-top: 2px #0dc8df solid !important;
  }
</style>
<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'app-layout',
    data() {
      return {
        drawer: null,
        services: [],
      };
    },
    methods: {
      ...mapActions([
        'storeAccount',
      ]),
      route($page) {
        this.$router.push($page);
      },
    },
    mounted() {
      this.storeAccount();
    },
  };
</script>
