<template>
  <section>
    <v-card class="flex" flat tile>

      <v-card-title class="white" light>
        <strong class="subheading">Get involved with our community!</strong>

        <v-spacer></v-spacer>

        <v-btn outline
               large
               class="mx-0"
               color="accent"
               href="https://discord.gg/9BJZW9a"
               target="_blank"
        >
          <font-awesome-icon class="mr-2" :icon="['fab', 'discord']" style="font-size: 24px"/>
          Join Our
          Discord Now!
        </v-btn>

      </v-card-title>

    </v-card>
  </section>
</template>

<script>
  export default {
    name: 'nx-discord-bar',
  };
</script>
