<template>
  <home />
</template>

<script>
import Home from '@/components/Home.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'home',

  components: {
    Home,
  }

});
</script>

<style scoped></style>