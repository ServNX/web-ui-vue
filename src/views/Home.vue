<template>
  <div class="home">
    <nx-call-to-action/>
    <nx-discord-bar/>

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
            Contributing to projects will increase your chances of being recruited full-time!
          </span>
        </div>
      </v-flex>

      <v-flex xs12>
        <nx-popular-searches/>
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
  import NxCallToAction from '../components/Home/CallToAction';
  import NxDiscordBar from '../components/Home/DiscordBar';
  import NxFeaturedProject from '../components/Home/FeaturedProject';
  import NxPopularSearches from '../components/Home/PopularSearches';

  export default {
    name: 'Home',
    components: {
      NxPopularSearches,
      NxCallToAction,
      NxDiscordBar,
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
