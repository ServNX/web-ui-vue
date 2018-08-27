<template>
    <div class="dashboard">
        <h1>Welcome to the dashboard !!</h1>
    </div>
</template>

<script>
  export default {
    name: 'nx-admin-dashboard',
    beforeMount() {
      this.$store.commit('SET_LAYOUT', 'app-layout');
    },
  };
</script>
