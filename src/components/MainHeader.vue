<template>
  <div class="main-header">
    <v-toolbar class="grey lighten-5" light>
      <v-toolbar-title>
        <img class="logo" :src="require('../assets/logo.png')"/>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn @click="route('/')" flat>
          Home
        </v-btn>

        <v-btn @click="route('/projects')" flat>
          Projects
        </v-btn>

        <v-btn @click="route('/products')" flat>
          Products
        </v-btn>

        <v-btn @click="route('/services')" flat>
          Services
        </v-btn>

        <v-btn @click="route('/about')" flat>
          About
        </v-btn>

        <v-btn @click="route('/login')" flat>
          Login
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'MainHeader',
    methods: {
      route($page) {
        this.$router.push($page);
      },
    },
  };
</script>

<style scoped lang="scss">

</style>
