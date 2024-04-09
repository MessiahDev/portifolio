<template>
  <v-app id="inspire">
    <v-app-bar
      app
      :color="darkMode ? '#121212' : '#e2e8f0'"
      flat
      elevation="2"
    >
      <v-avatar
        color="grey darken-1"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        :color="darkMode ? '#e2e8f0' : '#121212'"
      >
        <v-tab
          v-for="link in links"
          :key="link.text"
          @click="navigate(link.route)"
        >
          {{ link.text }}
        </v-tab>
      </v-tabs>

      <v-btn icon @click="translateToEnglish()">
        <v-icon>{{ translated ? 'mdi-translate-off' : 'mdi-translate' }}</v-icon>
      </v-btn>

      <v-switch
        class="pt-4"
        dense
        inset
        :color="darkMode ? '#e2e8f0' : '#081422'"
        @click="toggleTheme()" :prepend-icon="darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
      ></v-switch>
    </v-app-bar>

    <v-main :class="darkMode ? 'theme--dark' : 'theme--light'">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import GoogleTranslate from 'google-translate-api';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
    darkMode: false,
    translated: false,

    links: [
      { text: 'Home', route: '/' },
      { text: 'Sobre', route: '/about' },
    ]
  }),

  watch: {
    darkMode(value) {
      if (value) {
        document.body.classList.add('theme--dark');
        document.body.classList.remove('theme--light');
      } else {
        document.body.classList.add('theme--light');
        document.body.classList.remove('theme--dark');
      }
    }
  },

  methods: {
    navigate(route) {
      if (this.$route.path !== route) {
        this.$router.push(route);
      }
    },

    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.$vuetify.theme.dark = this.darkMode;
    },

    async translateToEnglish(value) {
    },
  }
});
</script>
<style>
.theme--dark .v-application {
  background-color: rgb(8, 20, 34);
  transition: 0.9s;
  color: rgb(226, 232, 240);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.theme--light .v-application {
  background-color: #FBF8EF; /* #e2e8f0 */
  transition: 0.9s;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.v-app-bar {
  transition: 0.9s;
}
</style>
