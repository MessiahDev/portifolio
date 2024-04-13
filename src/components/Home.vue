<template>
  <v-container fluid id="1">
    <v-row class="profile">
      <v-col cols="12" md="4" class="d-flex flex-column align-center py-16">
        <v-avatar size="280" class="theme-border">
          <v-img :src="require('@/assets/img/alex.jpg')" />
        </v-avatar>
        <v-row justify="center" class="mt-10">
          <v-col cols="auto" class="mx-auto" md="3" lg="2" v-for="(icon, i) in icons" :key="i">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-if="i != 2" icon :href="icon.link" target="_blanck" v-on="on"><v-icon :color="iconColor(i)"
                    size="36">{{ icon.icon }}</v-icon></v-btn>
                <v-speed-dial v-if="i === 2" v-model="emailButtom" direction="bottom"
                  transition="slide-y-reverse-transition">
                  <template v-slot:activator>
                    <v-btn v-on="on" icon :color="iconColor(i)">
                      <v-icon size="36" v-if="emailButtom">
                        mdi-close
                      </v-icon>
                      <v-icon size="36" v-else>
                        {{ icon.icon }}
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-btn dark small color="#720e9e" @click="sendMail(i)">
                    {{ $t('sendEmail') }}
                  </v-btn>
                  <v-btn dark small color="#720e9e" @click="copyEmail()">
                    {{ $t('copyEmail') }}
                  </v-btn>
                </v-speed-dial>
              </template>
              <span>{{ langHoverIcons(i) }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="8">
        <v-row class="py-4">
          <v-col>
            <b>
              <h1>{{ $t('hello') }}</h1>
            </b>
            <p>{{ $t('welcome1') }}<b>{{ $t('name') }}</b>{{ $t('welcome2') }}</p>
            <p>{{ $t('passion') }}<b>{{ $t('fullstack') }}</b></p>
            <p>{{ $t('interest') }}</p>
            <p>{{ $t('highlights') }}</p>
            <p>{{ $t('learning1') }}<b>{{ $t('tecnologies') }}</b>{{ $t('learning2') }}</p>
            <p>{{ $t('portfolio') }}</p>
            <p>{{ $t('thanks') }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider class="divider"></v-divider>

    <v-row id="2">
      <v-col cols="12" class="mTitleProjects d-flex justify-center" style="font-size: xx-large;">
        <b>{{ $t('project') }}</b>
      </v-col>
    </v-row>

    <v-row class="mtimeline d-flex justify-center">
      <v-col cols="12" class="justify-center my-16" md="6" sm="12" v-for="(item, i) in items" :key="i">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto theme-card" :elevation="hover ? 20 : 5" :class="{ 'on-hover': hover }" max-width="600">
            <v-img :aspect-ratio="14 / 9" :src="logos[i]">
              <v-expand-transition>
                <v-btn v-if="hover" @click="selectImages(item.srcs)"
                  class="font-weight-light d-flex transition-fast-in-fast-out black white--text darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%;">
                  {{ $t('show') }}
                </v-btn>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6 theme-card" style="position: relative;min-height: 15rem;">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn :href="item.link" target="_blank" v-on="on" absolute :elevation="hover ? 20 : 9"
                    :class="{ 'on-hover': hover }" color="#333" class="white--text" fab large right top>
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </template>
                <span>{{ $t('repository') }}</span>
              </v-tooltip>
              <div class="font-weight-light grey--text text-h6 mb-2">
                {{ item.type }}
              </div>
              <h3 class="text-h4 font-weight-light orange--text mb-2">
                {{ langVCards(i, item.name) }}
              </h3>
              <div class="font-weight-light grey--text text-h6 mb-2">
                {{ langVCards(i, item.info) }}<br>
                {{ $t('tecnologiesUsed') }}
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-fab-transition>
          <v-btn v-show="hidden" fab dark small absolute bottom right large fixed color="orange" class="mb-16"
            @click="navigate()">
            <v-icon dark>
              mdi-arrow-up
            </v-icon>
          </v-btn>
        </v-fab-transition>
      </v-col>
    </v-row>

    <div class="text-center">
      <v-dialog v-model="dialog" persistent width="60vw" transition="dialog-bottom-transition" class="full-dialog">
        <v-card>
          <v-card-title class="text-h5" :color="darkMode == true ? '#EFF2FB' : '#121212'">
            {{ $t('dialogCard') }}
          </v-card-title>

          <v-card-text>
            <v-carousel show-arrows-on-hover>
              <v-carousel-item v-for="(index, i) in selectedImages" :key="i" everse-transition="fade-transition"
                transition="fade-transition">
                <v-img :src="images[index]" @click="fullScream(images[index])" />
              </v-carousel-item>
            </v-carousel>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="closeDialog()">
              {{ $t('back') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div>
      <v-dialog v-model="dialog2" transition="dialog-bottom-transition">
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog2 = false">{{ $t('back') }}</v-btn>
          </v-card-title>
          <v-img :src="imageFullScream"></v-img>
        </v-card>
      </v-dialog>
    </div>

    <v-row>
      <v-col cols="auto">
        <v-dialog v-model="dialog3" transition="dialog-bottom-transition" max-width="600">
          <v-card>
            <v-toolbar>
              <h3>{{ $t('sendEmail') }}</h3>
            </v-toolbar>
            <v-card-text>
              <v-form action="https://formsubmit.co/285c194ae6d9f3e8327bae53ad60ff3e" method="POST">
                <v-text-field class="pt-6" dense outlined v-model="formData.name" label="Seu nome" name="name"
                  required></v-text-field>
                <v-text-field dense outlined v-model="formData.email" label="Seu email" name="email" type="email"
                  required></v-text-field>
                <v-textarea outlined v-model="formData.message" label="Menssagem" name="message" type="message"
                  class=""></v-textarea>
                <input type="hidden" name="_next" value="http://localhost:8080/">
                <input type="hidden" name="_captcha" value="false">
                <v-btn type="submit" color="orange">{{ $t('send') }}</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog3 = false">{{ $t('back') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <div>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ $t('copiedEmail') }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            {{ $t('close') }}
          </v-btn>
        </template>
      </v-snackbar>
    </div>

  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({

  props: {
    darkMode: Boolean,
  },

  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      selectedImages: [],
      imageFullScream: null,
      showScrollButton: false,
      hidden: false,
      email: 'alex.alle192@gmail.com',
      snackbar: false,
      timeout: 3000,
      emailButtom: false,

      formData: {
        name: '',
        email: '',
        message: ''
      },

      items: [
        { name: 1, srcs: [0, 1, 2, 3, 4, 5, 6, 7, 8], type: 'Front-end', info: 2, link: 'https://github.com/MessiahDev/Car-Rental-Frontend' },
        { name: 1, srcs: [9, 10, 11], type: 'Back-end', info: 2, link: 'https://github.com/MessiahDev/API_CarRental-Backend' },
        { name: 1, srcs: [12, 13, 14], type: 'Back-end', info: 2, link: 'https://github.com/MessiahDev/Projeto-Jogo-de-Xadrez' },
        { name: 1, srcs: [15, 16], type: 'Back-end', info: 2, link: 'https://github.com/MessiahDev/ApiCatalogo' }
      ],

      icons: [
        { link: 'https://www.linkedin.com/in/alex-alle/', icon: 'mdi-linkedin' },
        { link: 'https://github.com/MessiahDev', icon: 'mdi-github' },
        { link: '', icon: 'mdi-gmail' },
        { link: 'https://wa.me/5521979167300', icon: 'mdi-whatsapp' },
      ],

      images: [
        require('@/assets/CarRentalFront/CR1.png'),
        require('@/assets/CarRentalFront/CR2.png'),
        require('@/assets/CarRentalFront/CR3.png'),
        require('@/assets/CarRentalFront/CR4.png'),
        require('@/assets/CarRentalFront/CR5.png'),
        require('@/assets/CarRentalFront/CR6.png'),
        require('@/assets/CarRentalFront/CR7.png'),
        require('@/assets/CarRentalFront/CR8.png'),
        require('@/assets/CarRentalFront/CR9.png'),
        require('@/assets/CarRentalBack/SWG1.png'),
        require('@/assets/CarRentalBack/SWG2.png'),
        require('@/assets/CarRentalBack/SWG3.png'),
        require('@/assets/Chess/X1.png'),
        require('@/assets/Chess/X2.png'),
        require('@/assets/Chess/X3.png'),
        require('@/assets/Catalogo/CAT1.png'),
        require('@/assets/Catalogo/CAT2.png')
      ],
      logos: [
        require('@/assets/Logos/CRF.jpg'),
        require('@/assets/Logos/DB.png'),
        require('@/assets/Logos/XG.jpg'),
        require('@/assets/Logos/CATP.png'),
      ],
    };
  },

  mounted() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener('mousemove', this.handleMouseMove);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener('mousemove', this.handleMouseMove);
  },

  methods: {
    // redirectToLink(link) {
    //   window.open(link, '_blank');
    // },

    langVCards(index, item) {
      if (item === 1) return this.$t(`name${index}`);
      if (item === 2) return this.$t(`info${index}`);
    },

    langHoverIcons(i) {
      if (i === 0) return 'Linkedin';
      if (i === 1) return 'GitHub';
      if (i === 2) return 'Email';
      if (i === 3) return 'WhatsApp';
    },

    iconColor(index) {
      if (index === 0) return '#0e76a8';
      if (index === 1) return this.darkMode ? '#EFF2FB' : '#2b3137';
      if (index === 2) return '#720e9e';
      if (index === 3) return '#25D366';
    },

    sendMail(index) {
      if (index === 2) this.dialog3 = true;
    },

    handleScroll() {
      this.hidden = window.scrollY > 400;
    },

    copyEmail() {
      navigator.clipboard.writeText(this.email);
      this.snackbar = true;
    },

    navigate() {
      const targetElement = document.getElementById('1');
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },

    selectImages(items) {
      this.selectedImages = items;
      this.dialog = true;
    },

    closeDialog() {
      this.selectedImages = null;
      this.dialog = false;
      this.dialog2 = false;
    },

    fullScream(image) {
      this.imageFullScream = image;
      this.dialog2 = true;
    },
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
}

.profile {
  border: 1px solid #DCDCDC;
  border-radius: 40px;
  margin-top: 7rem;
  transition: box-shadow 0.9s;
}

.profile:hover {
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.divider {
  margin-top: 9rem;
}

.mTitleProjects {
  margin-top: 15vh;
}

.mtimeline {
  margin-top: 5vh;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.full-dialog {
  height: 80vh;
  margin: 0;
}

.transition-swing {
  transition: transform 1.5s ease-in-out;
}

.theme-border {
  border: 5px;
  border-style: solid;
  border-color: orange;
  transition: 0.9s;
}

.theme--dark .theme-border {
  border: 5px;
  border-style: solid;
  border-color: 5px solid #EFF2FB;
  transition: 0.9s;
}

.theme-card {
  background: #EFF2FB;
  transition: 0.9s;
}

.theme--dark .theme-card {
  background: black;
  transition: 0.9s;
}
</style>