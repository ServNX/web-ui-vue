<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          :src="img"
          height="200px"
        >
        </v-card-media>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ service.toUpperCase() }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn @click="submit" outline color="accent"> {{ exists ? 'Refresh' : 'Link'}}</v-btn>
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
      description: { type: String, default: null },
      service: { type: String, required: true },
      img: { type: String, required: true },
    },
    data() {
      return {
        show: false,
        error: null,
        snackbar: false,
      };
    },
    computed: {
      exists() {
        const s = this.$store.getters.account.services;
        const i = s.findIndex(x => x.driver === this.service.toLowerCase());

        return i > -1;
      },
      link() {
        return `${process.env.VUE_APP_API_ENDPOINT}/api/auth/${this.services.toLowerCase()}`;
      },
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
