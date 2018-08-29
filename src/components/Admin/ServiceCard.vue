<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          :src="src"
          height="200px"
        >
        </v-card-media>

        <v-card-title primary-title v-if="title">
          <div>
            <div class="headline">{{ title }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn @click="submit" outline color="accent" :disabled="disabled">Link</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show" v-if="description">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{ description }}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

    <v-snackbar v-model="snackbar" color="error" :timeout="5000" top>
      {{ error }}

      <v-btn dark flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
  export default {
    name: 'nx-service-card',
    props: {
      disabled: { type: Boolean, default: false },
      title: { type: String, default: null },
      description: { type: String, default: null },
      src: { type: String, required: true },
      link: { type: String, required: true },
    },
    data() {
      return {
        show: false,
        error: null,
        snackbar: false,
      };
    },
    methods: {
      submit() {
        this.axios.get(this.link, {
          params: {
            user_id: this.$store.getters.user_id,
          },
        })
          .then(response => {
            window.location.href = response.data;
          })
          .catch(error => {
            console.log(error.response.data);
            this.error = error.response.data.message;
            this.snackbar = true;
        });
      },
    },
  };
</script>
