<template>
  <v-data-table
      :headers="headers"
      :items="issues"
      hide-actions
      item-key="number"
      style="width: 100%"
  >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td class="grey--text lighten-5">#{{ props.item.number }}</td>
        <td class="text-xs-left">
          <span class="font-weight-bold" style="font-size: 18px">
            {{ props.item.title }}
          </span>
          <br/>
          <v-chip v-for="label in props.item.labels" :key="label.name"
                  label
                  small
                  :style="`background-color: #${label.color}`"
                  text-color="white"
          >
            <strong>{{ label.name }}</strong>
          </v-chip>
        </td>
        <td class="text-xs-left">
          <v-btn flat color="accent">
            {{ props.item.comments }}
          </v-btn>
        </td>
        <td class="text-xs-left">
          <v-avatar
              :tile="true"
              :size="30"
              color="grey lighten-4"
          >
            <img :src="props.item.user.avatar_url" alt="avatar" />
          </v-avatar>
        </td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat class="accent lighten-5">
        <v-card-text>
          {{ props.item.body }}
        </v-card-text>
      </v-card>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    name: 'Issues',
    props: {
      service: { type: String, required: true },
      repo: { type: String, required: true },
      state: { type: String, required: true },
    },
    data() {
      return {
        headers: [
          {
            text: 'Issue #',
            align: 'left',
            sortable: true,
            value: 'number',
          },
          {
            text: 'Title',
            value: 'title',
            align: 'left',
            sortable: false,
          },
          {
            text: 'Comments',
            value: 'comments',
            align: 'left',
            sortable: true,
          },
          {
            text: 'Author',
            value: 'user.login',
            align: 'left',
            sortable: true,
          },
        ],
        issues: [],
      };
    },
    mounted() {
      this.axios.get(this.all.endpoint, this.all.payload)
        .then(response => {
          this.issues = response.data;
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
          endpoint: `${this.endpoint}/api/services/${this.repo}/issues/${this.state}`,
          payload: {
            params: {
              uid: this.user_id,
              service: this.service.toLowerCase(),
            },
          },
        };
      },
    },
  };
</script>
