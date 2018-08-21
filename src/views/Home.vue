<template>
  <div class="home" style="min-height: 900px">
    <main-carousel></main-carousel>

    <v-card class="flex" flat tile>

      <v-card-title class="white" light>
        <strong class="subheading">Get involved with our community!</strong>

        <v-spacer></v-spacer>

        <v-btn outline class="mx-0" large color="accent">
          <font-awesome-icon class="mr-2" :icon="['fab', 'discord']" style="font-size: 24px"/>
          Join Our
          Discord Now!
        </v-btn>

      </v-card-title>

    </v-card>

    <v-layout
        column
        wrap
        class="my-5"
        align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">

          <h2 class="headline">The best way to start developing</h2>

          <span class="subheading">
            Find your project today!
          </span>
        </div>
      </v-flex>

      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large color="accent">color_lens</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">UI Design</div>
                </v-card-title>
                <v-card-text>
                  <p>
                    Frontend designers and developers are always needed in almost every project.
                    We can help you find the perfect project for you to contribute to.
                  </p>

                  <p>
                  Contributing to a project through a referral here leads to a higher
                  chance of being recruited as a organization team member.
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
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Rapid Development</div>
                </v-card-title>
                <v-card-text>
                  <p>
                    Some developers just prefer to use framworks for rapid development.
                    Frameworks like <strong>React, Laravel, VueJS, Symfony, etc ...</strong>
                    are only a few popular ones.
                  </p>

                  <p>
                    We can help you find the right project for your framework of choice.
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
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Beginners</div>
                </v-card-title>
                <v-card-text>
                  <p>
                    Maybe you are just getting started and you have no idea how to
                    collaborate with a team. No worries, we have you covered!
                  </p>

                  <p>
                    Learn while collaborating with project managers directly. These projects are
                    specifically designed to help you learn how to work with a team!
                  </p>

                  <v-btn outline color="accent">Beginner Projects</v-btn>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import MainCarousel from '../components/MainCarousel';

  export default {
    name: 'Home',
    components: {
      MainCarousel,
    },
  };
</script>
