<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
        :items="repositories"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row
        wrap
    >

      <v-flex slot="item"
              slot-scope="props"
              xs12
              sm6
              md4
              lg3
      >
        <v-card>
          <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Open Issues:</v-list-tile-content>
              <v-list-tile-content class="align-end">
                {{ props.item.open_issues }}
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>Forks:</v-list-tile-content>
              <v-list-tile-content class="align-end">
                {{ props.item.forks_count }}
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>Stars:</v-list-tile-content>
              <v-list-tile-content class="align-end">
                {{ props.item.stargazers_count }}
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>Watchers:</v-list-tile-content>
              <v-list-tile-content class="align-end">
                {{ props.item.watchers_count }}
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    name: 'Repositories',
    props: {
      service: { type: String, required: true },
    },
    data() {
      return {
        rowsPerPageItems: [4, 8, 12],
        pagination: {
          rowsPerPage: 8,
        },
        repositories: [],
      };
    },
    computed: {
      endpoint() {
        return process.env.VUE_APP_API_ENDPOINT;
      },
      user_id() {
        return this.$store.getters.user_id;
      },
      repositories_endpoint() {
        return `${this.endpoint}/api/user/${this.user_id}/services/${this.service}/repositories`;
      },
    },
    mounted() {
      this.axios.get(this.repositories_endpoint)
        .then(response => {
          this.repositories = response.data;
        })
        .catch(error => console.log(error));
    },
  };
</script>
