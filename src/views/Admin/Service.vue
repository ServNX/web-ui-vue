<template>
  <section>
    <component :is="dynamicComponent" v-bind="{ service: service }"></component>
  </section>
</template>

<script>
  import Repositories from './Repositories';
  import Issues from './Issues';

  export default {
    name: 'Service',
    data() {
      return {
        service: this.$route.params.service,
        path: this.$route.params.path,
      };
    },
    computed: {
      dynamicComponent() {
        switch (this.path) {
          case 'repositories':
            return Repositories;
          case 'issues':
            return Issues;
          default:
            return Repositories;
        }
      },
    },
  };
</script>
