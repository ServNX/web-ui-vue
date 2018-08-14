<template>
  <div id="app">
    <v-app>
      <main-header></main-header>

      <router-view/>

      <v-footer fixed dark height="auto">
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
            <strong class="subheading">Get connected with us on social networks!</strong>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
              <font-awesome-icon :icon="['fab', icon]" style="font-size: 24px"/>
            </v-btn>

          </v-card-title>

          <v-card-actions class="grey darken-3 justify-center">
            &copy;2018-2019 &nbsp;<strong>ServNX, LLC</strong>
          </v-card-actions>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader';

  export default {
    name: 'App',
    data() {
      return {
        icons: [
          'facebook',
          'twitter',
          'google-plus',
          'linkedin',
          'instagram',
        ],
      };
    },
    components: {
      MainHeader,
    },
  };
</script>
