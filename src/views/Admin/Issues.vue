<template>
  <section>
    <h1>Issues for {{ service }}</h1>
  </section>
</template>

<script>
  export default {
    name: 'Issues',
    props: {
      service: { type: String, required: true },
    },
  };
</script>
