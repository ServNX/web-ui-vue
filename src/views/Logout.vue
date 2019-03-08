<template>
  <div class="logout">
    <h1>You are being logged out!</h1>
  </div>
</template>

<script>
  export default {
    name: 'Logout',
    beforeMount() {
      if (localStorage.access_token) {
        this.axios.get(`${process.env.VUE_APP_API_ENDPOINT}/api/logout`).then(() => {
          localStorage.clear();
          this.$router.push('/login');
        });
      } else {
        this.$router.push('/login');
      }
    },
  };
</script>
