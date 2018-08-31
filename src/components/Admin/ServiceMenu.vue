<template>
  <section>
    <v-list>
      <v-list-group v-model="item.active" no-action>
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>
              <font-awesome-icon style="font-size: 22px"
                                 class="mr-4"
                                 :icon="['fab', item.driver]"></font-awesome-icon>
              {{ item.driver.toUpperCase() }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="route(item.driver, 'repositories')">
          <v-list-tile-content>
            <v-list-tile-title>Repositories</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <font-awesome-icon icon="code-branch"></font-awesome-icon>
          </v-list-tile-action>
        </v-list-tile>

      </v-list-group>
    </v-list>
  </section>
</template>

<script>
  export default {
    name: 'nx-admin-service-menu',
    props: {
      item: { type: Object, required: true },
    },
    methods: {
      route(service, path) {
        this.$router.push(`/admin/services/${service}/${path}`);
      },
    },
  };
</script>
