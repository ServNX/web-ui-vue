<template>
  <div id="app">
    <main-header></main-header>

    <router-view/>

  </div>
</template>

<style lang="scss">

</style>
<script>
  import MainHeader from './components/MainHeader';

  export default {
    name: 'App',
    components: {
      MainHeader,
    },
  };
</script>
