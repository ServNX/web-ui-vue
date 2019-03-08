<template>
  <v-app>
    <main-header></main-header>

    <router-view/>

    <nx-footer/>
  </v-app>
</template>

<script>
  import MainHeader from '../components/MainHeader';
  import NxFooter from '../components/Footer';

  export default {
    name: 'site-layout',
    components: {
      MainHeader,
      NxFooter,
    },
  };
</script>
