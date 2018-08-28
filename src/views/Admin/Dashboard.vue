<template>
    <section>
        <h1>Welcome to the dashboard !!</h1>
    </section>
</template>

<script>
  export default {
    name: 'nx-admin-dashboard',
    beforeMount() {
      this.$store.commit('SET_LAYOUT', 'app-layout');
    },
  };
</script>
