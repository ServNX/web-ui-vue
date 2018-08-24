<template>
  <v-container grid-list-xl>
    <v-layout row wrap align-center>

      <v-flex xs12 md4>

        <v-card class="elevation-0 transparent">

          <v-card-text class="text-xs-center">
            <v-icon x-large color="accent">color_lens</v-icon>
          </v-card-text>

          <v-card-title primary-title class="c2a_section justify-center">
            <div class="headline text-xs-center">UI</div>
          </v-card-title>

          <v-card-text class="text-xs-center">

            <p>
              Are you a frontend designer and/or developer ? Almost every project requires
              some level of UI rather it be <strong>CLI, GUI, Website</strong> or a
              <strong>Web Application</strong>!
            </p>

            <v-btn outline color="accent">Frontend Projects</v-btn>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card class="elevation-0 transparent">
          <v-card-text class="text-xs-center">
            <v-icon x-large color="accent">flash_on</v-icon>
          </v-card-text>
          <v-card-title primary-title class="c2a_section justify-center">
            <div class="headline">Frameworks</div>
          </v-card-title>
          <v-card-text class="text-xs-center">
            <p>
              Most developers now days use frameworks for rapid development.
              <strong>React, Laravel, VueJS, Symfony, etc ...</strong> are only a few
              popular ones.
            </p>

            <v-btn outline color="accent">Framework Projects</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card class="elevation-0 transparent">
          <v-card-text class="text-xs-center">
            <v-icon x-large color="accent">code</v-icon>
          </v-card-text>
          <v-card-title primary-title class="c2a_section justify-center">
            <div class="headline text-xs-center">Beginners</div>
          </v-card-title>
          <v-card-text class="text-xs-center">

            <p>
              Maybe you are just getting started and you have no idea how to
              collaborate with a team. No worries, we have you covered!
            </p>

            <v-btn outline color="accent">Beginner Projects</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'nx-popular-searches',
  };
</script>
