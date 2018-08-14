<template>
  <v-carousel>
    <v-carousel-item :src="items[0].src">
      <v-container fill-height>
        <v-layout column align-center justify-center fill-height>
          <div>
            <img src="https://indiehd.com/images/shell/logo.svg"/>
          </div>

          <h1 class="white--text">
            A simple, do-if-yourself platform for selling their music to fans, digitally.
          </h1>

          <div>
            <v-btn outline class="mx-0" large color="white">
              Read More
            </v-btn>
            &nbsp;&nbsp;
            <v-btn outline class="mx-0" large color="white">
              Next-Gen
            </v-btn>
          </div>

        </v-layout>
      </v-container>
    </v-carousel-item>

    <v-carousel-item :src="items[1].src">
      <v-btn class="mx-0" color="info" large>
        See more
      </v-btn>
    </v-carousel-item>

    <v-carousel-item :src="items[2].src">
      <v-btn class="mx-0" color="error" large>
        See more
      </v-btn>
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
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            id: 3,
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            id: 4,
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      };
    },
  };
</script>
