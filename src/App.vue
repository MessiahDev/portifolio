<template>
  <v-app id="inspire">
    <v-app-bar app :color="darkMode ? '#e2e8f0' : '#121212'" flat elevation="2">
      <v-spacer></v-spacer>
      <v-tabs class="" :color="darkMode ? '#121212' : '#e2e8f0'" flat>
        <v-tab style="padding: 0%;">
          <v-menu bottom offset-y style="height: 100%; width: 100%;">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="transparent" elevation="0" style="height: 100%; width: 100%;" class="my-0">
                Menu
              </v-btn>
            </template>

            <v-list v-for="(item, index) in items" :key="index" class="my-0 py-0 pr-12">
              <v-btn color="transparent" elevation="0" class="py-3 my-0"
                style="height: 100%;padding-right: 100%;padding-left: 5%;" @click="navigate(`${item.id}`)">{{
                  menuName(item.id) }}</v-btn>
            </v-list>
          </v-menu>
        </v-tab>

      </v-tabs>

      <v-spacer></v-spacer>

      <v-col>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="transparent" elevation="0" @click="translateToEnglish()">
              {{ translated ? 'BR' : 'US' }}
            </v-btn>
          </template>
          <span>{{ translated ? 'Mudar idioma' : 'Change language' }}</span>
        </v-tooltip>
      </v-col>

      <v-switch class="pt-5" inset :color="darkMode ? 'orange' : '#081422'" @click="toggleTheme()"
        :prepend-icon="darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"></v-switch>
    </v-app-bar>

    <v-main :class="darkMode ? 'theme--dark' : 'theme--light'">
      <Home :darkMode="darkMode" />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import i18n from './i18n';
import Home from './components/Home.vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
    darkMode: false,
    translated: false,

    items: [
      { id: 1 },
      { id: 2 },
      { id: 3 }
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

  components: {
    Home,
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    navigate(tabIndex) {
      if (tabIndex == '1') {
        const targetElement = document.getElementById('1');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else if (tabIndex == '2') {
        const targetElement = document.getElementById('2');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else if (tabIndex == '3') {
        const targetElement = document.getElementById('3');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    },

    menuName(index) {
      if (index === 1) return this.$t('home');
      if (index === 2) return this.$t('projects');
      if (index === 3) return this.$t('skills');
    },

    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.$vuetify.theme.dark = this.darkMode;
    },

    translateToEnglish() {
      this.switchLanguage = !this.switchLanguage;
      if (this.switchLanguage) {
        i18n.locale = 'en';
        this.translated = true;
      } else {
        i18n.locale = 'br';
        this.translated = false;
      }
    },

    handleMouseMove() {
      var pos = document.documentElement;
      pos.addEventListener('mousemove', e => {
        pos.style.setProperty('--x', e.clientX + 'px')
        pos.style.setProperty('--y', e.clientY + 'px')
      })
    }
  }
});
</script>
<style>
.theme--dark .v-application {
  background-color: rgb(8, 20, 34);
  transition: 0.9s;
  color: #EFF2FB;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.theme--light .v-application {
  background-color: #EFF2FB;
  transition: 0.9s;
  color: #121212;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.v-app-bar {
  transition: 0.9s;
}
</style>