<template>
  <section>
    <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6 md3>
            <v-text-field
                color="accent"
                label="Search"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
                color="success"
                label="New"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
                color="error"
                label="Delete"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

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
            <v-card-title class="subheading font-weight-bold">
              {{ props.item.name }}
            </v-card-title>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Open Issues:</v-list-tile-content>
                <v-list-tile-content class="align-end">
                  <v-btn @click="route('issues', `${props.item.name}/open`)"
                         flat
                         small
                         color="accent"
                  >
                    {{ props.item.open_issues_count }}
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Forks:</v-list-tile-content>
                <v-list-tile-content class="align-end">
                  <v-btn
                         flat
                         small
                         color="accent"
                  >
                    {{ props.item.forks_count }}
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Stars:</v-list-tile-content>
                <v-list-tile-content class="align-end">
                  <v-btn
                      flat
                      small
                      color="accent"
                  >
                    {{ props.item.stars_count }}
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Watchers:</v-list-tile-content>
                <v-list-tile-content class="align-end">
                  <v-btn
                      flat
                      small
                      color="accent"
                  >
                    {{ props.item.watchers_count }}
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'Repositories',
    props: {
      service: { type: String, required: true },
    },
    data() {
      return {
        rowsPerPageItems: [8, 16, 32],
        pagination: {
          rowsPerPage: 8,
        },
        repositories: [],
      };
    },
    mounted() {
      this.axios.get(this.all.endpoint, this.all.payload)
        .then(response => {
          this.repositories = response.data;
        })
        .catch(error => console.log(error));
    },
    computed: {
      endpoint() {
        return process.env.VUE_APP_API_ENDPOINT;
      },
      user_id() {
        return this.$store.getters.user_id;
      },
      all() {
        return {
          endpoint: `${this.endpoint}/api/services/repositories`,
          payload: {
            params: {
              uid: this.user_id,
              service: this.service.toLowerCase(),
            },
          },
        };
      },
    },
    methods: {
      route(component, path = null) {
        let p = '';

        if (path !== null) {
          p = `/${path}`;
        }

        this.$router.push(`/admin/services/${this.service}/${component}${p}`);
      },
    },
  };
</script>
