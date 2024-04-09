import Vue from 'vue';
import VueTranslate from 'vue-translate-plugin';

Vue.use(VueTranslate);

Vue.translate.add({
  en: {
    Home: 'Home',
    Sobre: 'About'
  },
  pt: {
    Home: 'Início',
    Sobre: 'Sobre'
  }
});

export default Vue;