<template>
  <section>
    <h1>Repositories for {{ service }}</h1>
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
        .then(response => console.log(response))
        .catch(error => console.log(error));
    },
  };
</script>
