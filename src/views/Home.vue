<template>
  <div class="home" style="min-height: 900px">
    <section class="white">
      <v-layout class="section grad-cool-blues" column align-center justify-center fill-height>

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
            Contributing to projects through this platform leads to a higher chance of being
            recruited to an organization.
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
                <v-card-title primary-title class="layout justify-center">
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
                <v-card-title primary-title class="layout justify-center">
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
      </v-flex>
    </v-layout>

    <nx-featured-project :color="featured.color"
                         :logo="featured.logo"
                         :description="featured.description"
                         :actions="featured.actions"
    />
  </div>
</template>

<script>
  import NxFeaturedProject from '@/components/FeaturedProject';

  export default {
    name: 'Home',

    components: {
      NxFeaturedProject,
    },

    data() {
      return {
        featured: {
          color: 'grad-expresso',
          logo: 'https://indiehd.com/images/shell/logo.svg',
          description: 'A simple, do-it-yourself platform for selling music to fans, digitally.',
          actions: [
            {
              value: 'GitHub',
              url: 'https://github.com/indiehd',
              icon: ['fab', 'github'],
            },
            {
              value: 'Read More',
              url: 'https://github.com/indiehd',
            },
          ],
        },
      };
    },

  };
</script>
