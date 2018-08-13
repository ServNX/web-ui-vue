<template>
  <section class="featured-project">

    <nx-section-header text="Featured Project Of The Day"/>

    <v-layout :class="`featured-project-content ${color}`"
              column
              align-center
              justify-center
    >

      <img v-if="logo" :src="logo"/>

      <h1 class="white--text" style="font-size: 35px">
        {{ description }}
      </h1>

      <div v-if="actions" class="mt-5">
        <v-btn v-for="action in actions"
               :key="action.value"
               :href="action.url"
               outline
               large
               class="mx-0 mr-3"
               color="white"
        >
          <font-awesome-icon v-if="action.icon"
                             class="mr-2"
                             :icon="action.icon"
                             style="font-size: 24px"
          />

          {{ action.value }}
        </v-btn>
      </div>

    </v-layout>
  </section>
</template>

<style lang="scss" scoped>
  @import '../../scss/variables';

  .featured-project {
    background-color: #ffffff;
    border-top: $accent 5px solid;

    .featured-project-content {
      height: 380px;
      border-top: $accent 2px solid;

      .headline {
        font-size: 42px !important;
        text-shadow: 1px 1px #2c2c2c;
      }

      h1, h2 {
        text-shadow: 1px 1px #2c2c2c;
      }
    }

  }
</style>

<script>
  import NxSectionHeader from '../SectionHeader';

  export default {
    name: 'nx-featured-project',
    components: {
      NxSectionHeader,
    },
    props: {
      color: { type: String, default: 'grad-cool-blues' },
      logo: { type: String, default: null },
      description: { type: String, required: true },
      actions: { type: Array, default: null },
    },
  };
</script>
