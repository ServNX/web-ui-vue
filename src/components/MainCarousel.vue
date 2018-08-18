<template>
  <v-carousel hide-delimiters>
    <v-carousel-item :src="items[0].src">
      <v-container fill-height>
        <v-layout column align-center justify-center fill-height>

          <img src="https://indiehd.com/images/shell/logo.svg"/>

          <h1 class="white--text">
            A simple, do-it-yourself platform for selling your music to fans, digitally.
          </h1>

          <div>
            <v-btn outline class="mx-0 mr-3" large color="white">
              Read More
            </v-btn>

            <v-btn outline class="mx-0" large color="white">
              Next-Gen
            </v-btn>
          </div>

        </v-layout>
      </v-container>
    </v-carousel-item>

    <v-carousel-item :src="items[1].src">
      <v-container fill-height>
        <v-layout column align-center justify-center fill-height>
          <div class="pt-6">
            <v-btn outline class="mx-0 mr-3" large color="white">
              Read More
            </v-btn>

            <v-btn outline class="mx-0" large color="white">
              <font-awesome-icon :icon="['fab', 'discord']" style="font-size: 24px"/>&nbsp; Discord
            </v-btn>
          </div>

        </v-layout>
      </v-container>
    </v-carousel-item>

  </v-carousel>
</template>

<script>
  export default {
    name: 'MainCarousel',
    data() {
      return {
        items: [
          {
            id: 1,
            src: require('../assets/indiehd-carousel-bg.jpeg'),
          },
          {
            id: 2,
            src: require('../assets/unit3d-carousel-bg.png'),
          },
        ],
      };
    },
  };
</script>

<style type="scss" scoped>
  h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
    text-shadow: 2px 2px #2c2c2c;
    font-family: 'Cinzel', serif;
    font-weight: bold;
  }

  h1 {
    font-size: 25px;
  }

  h2 {
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 25px;
    }
  }
</style>
