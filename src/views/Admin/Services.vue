<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs6>
        <nx-service-card title="Github"
                         :link="`${link}/api/auth/github/${user_id}`"
                         src="https://cdn-images-1.medium.com/max/1200/1*wzEf4qVNT7mUeMIeQWTJbg.jpeg"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import NxServiceCard from '../../components/Admin/ServiceCard';

  export default {
    name: 'Services',
    components: {
      NxServiceCard,
    },
    computed: {
      link() {
        return process.env.VUE_APP_API_ENDPOINT;
      },
      user_id() {
        return this.$store.getters.user_id;
      },
    },
  };
</script>
