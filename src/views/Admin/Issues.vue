<template>
  <section>
    <span v-for="issue in issues" :key="issue.id">{{issue.title}}</span>
  </section>
</template>

<script>
  export default {
    name: 'Issues',
    props: {
      repo: { type: String, required: true },
      state: { type: String, required: true },
    },
    data() {
      return {
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
          endpoint: `${this.endpoint}/api/services/{repo}/issues/{state?}`,
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
