<template>
  <dashboard />
</template>

<script>
import Dashboard from '@/components/Home.vue';
import Vue from 'vue';

  export default Vue.extend({
    name: 'home',

    components: {
      Dashboard,
    }
    
  });
</script>

<style scoped>

</style>