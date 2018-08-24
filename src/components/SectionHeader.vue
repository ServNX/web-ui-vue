<template>
  <v-layout column align-center justify-center>
    <h1 class="section-header">{{ text }}</h1>
  </v-layout>
</template>

<style lang="scss" scoped>
  .section-header {
    font-size: 35px;
    font-family: 'Cinzel', serif;
    padding-bottom: 9px;
    margin: 40px 0 20px;
    border-bottom: 5px solid #b1b1b1;
    border-bottom-right-radius: 50% 20%;
    border-bottom-left-radius: 50% 20%;
  }
</style>

<script>
  export default {
    name: 'nx-section-header',
    props: {
      text: { type: String, required: true },
    },
  };
</script>
