<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs6>
                <nx-service-card title="Github"
                                 :link="`${link}/auth/github`"
                                 src="https://cdn-images-1.medium.com/max/1200/1*wzEf4qVNT7mUeMIeQWTJbg.jpeg"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import NxServiceCard from '../../components/Admin/ServiceCard';

  export default {
    name: 'nx-admin-dashboard',
    components: {
      NxServiceCard,
    },
    computed: {
      link() {
        return process.env.VUE_APP_API_ENDPOINT;
      },
    },
  };
</script>
