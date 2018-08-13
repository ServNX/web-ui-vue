<template>
  <v-carousel>
    <v-carousel-item :src="items[0].src">
      <v-jumbotron>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Welcome to the site</h3>

              <span class="subheading">
                Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae
                id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare
                assueverit ex eum, ne nam essent vocent admodum.
              </span>

              <v-divider class="my-3"></v-divider>

              <div class="title mb-3">Check out our newest features!</div>

              <v-btn
                class="mx-0"
                color="primary"
                large
              >
                See more
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-carousel-item>

    <v-carousel-item :src="items[1].src">
      <v-jumbotron>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">YAY</h3>

              <span class="subheading">
                Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae
                id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare
                assueverit ex eum, ne nam essent vocent admodum.
              </span>

              <v-btn
                class="mx-0"
                color="primary"
                large
              >
                See more
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
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
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
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
