<template>
    <section>
        <component :is="dynamicComponent" v-bind="current_props"></component>
    </section>
</template>

<script>
  import Dashboard from './Dashboard';
  import Repositories from './Repositories';
  import Issues from './Issues';

  export default {
    name: 'Service',
    data() {
      return {
        service: this.$route.params.service,
        path: this.$route.params.component,
        current_props: {},
      };
    },
    computed: {
      dynamicComponent() {
        switch (this.path) {
          case 'repositories':
            this.setProps({
              service: this.service,
            });
            return Repositories;
          case 'issues':
            this.setProps({
              service: this.service,
              repo: this.getAdditionalParams()[0],
              state: this.getAdditionalParams()[1],
            });
            return Issues;
          default:
            return Dashboard;
        }
      },
    },
    methods: {
      setProps(props) {
        this.current_props = props;
      },
      getAdditionalParams() {
        const params = this.$route.params[0];
        if (params.includes('/')) {
          return params.split('/');
        }

        return params;
      },
    },
  };
</script>
