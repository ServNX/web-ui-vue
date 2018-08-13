<template>
  <section class="white">
    <v-layout class="grad-cool-blues" column align-center justify-center fill-height>

      <div class="headline white--text mb-3 text-xs-center">
        Project collaboration has never been easier
      </div>

      <h2 class="white--text">
        Kick-start your project today!
      </h2>

      <div class="mt-5">
        <v-btn outline class="mx-0 mr-3" large color="white">
          Start Recruiting
        </v-btn>

        <v-btn outline class="mx-0" large color="white">
          Start Contributing
        </v-btn>
      </div>

    </v-layout>
  </section>
</template>

<style lang="scss" scoped>
  .layout {
    height: 380px;

    .headline {
      font-size: 42px !important;
      text-shadow: 1px 1px #2c2c2c;
    }

    h1, h2 {
      text-shadow: 1px 1px #2c2c2c;
    }
  }
</style>

<script>
  export default {
    name: 'nx-call-to-action',
  };
</script>
