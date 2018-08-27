<template>
    <v-app>
        <component v-bind:is="layout"></component>
    </v-app>
</template>

<script>
  import AppLayout from './layouts/AppLayout';
  import SiteLayout from './layouts/SiteLayout';

  export default {
    name: 'App',
    computed: {
      layout() {
        return this.$store.getters.layout;
      },
    },
    components: {
      'app-layout': AppLayout,
      'site-layout': SiteLayout,
    },
  };
</script>
