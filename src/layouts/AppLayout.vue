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

        <v-list-tile @click="route('/admin/link')">
          <v-list-tile-action>
            <v-icon>rounded_corner</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              Services
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <nx-admin-service-menu v-for="service in services"
                               :key="service.driver"
                               :item="service"/>

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
          <router-view :key="$route.fullPath"></router-view>
      </v-container>
    </v-content>

    <v-footer color="white" app>
      <span>&copy; ServNX, LLC 2018-2019</span>
    </v-footer>

  </v-app>
</template>

<style lang="scss" scoped>
  .v-content__wrap > .container > section {
    width: 100%;
    height: 100%;
  }

  .v-footer.white {
    border-top: 2px #0dc8df solid !important;
  }
</style>
<script>
  import { mapActions } from 'vuex';
  import NxAdminServiceMenu from '../components/Admin/ServiceMenu';

  export default {
    name: 'app-layout',
    components: { NxAdminServiceMenu },
    data() {
      return {
        drawer: null,
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
    computed: {
      services() {
        return this.$store.getters.services;
      },
    },
    mounted() {
      this.storeAccount();
    },
  };
</script>
