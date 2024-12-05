<template>
  <div>
    <v-container fluid id="1">
      <v-row :class="{ 'comming-animation': showProfile }" @change="showProfile">
        <v-col cols="12" md="4" class="d-flex flex-column align-center py-16">
          <v-avatar size="250" class="theme-border" :class="{ 'falling-animation': showProfile }" @change="showProfile">
            <v-img :src="require('@/assets/img/alex.jpg')" />
          </v-avatar>
          <v-row justify="center" class="mt-10" :class="{ 'dashleft-animation': showProfile }" @change="showProfile">
            <v-col cols="auto" class="mx-auto" md="3" lg="2" v-for="(icon, i) in icons" :key="i">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn class="iconSocial" v-if="i != 2" icon :href="icon.link" target="_blanck" v-on="on"><v-icon :color="iconColor(i)"
                      size="36">{{ icon.icon }}</v-icon></v-btn>
                  <v-speed-dial v-if="i === 2" v-model="emailButtom" direction="bottom"
                    transition="slide-y-reverse-transition">
                    <template v-slot:activator>
                      <v-btn class="iconSocial" v-on="on" icon :color="iconColor(i)">
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

        <v-col cols="12" md="8" :class="{ 'dashright-animation': showProfile }" @change="showProfile">
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
        <v-col cols="12" class="mTitleProjects d-flex justify-center font-weight-bold text-h2 basil--text"
          style="font-size: xx-large;">
          {{ $t('project') }}
        </v-col>
      </v-row>

      <v-row class="mtimeline d-flex justify-center">
        <v-col cols="12" class="justify-center my-16" md="6" sm="12" v-for="(item, i) in items" :key="i">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto theme-card" :elevation="hover ? 20 : 5" :class="{ 'on-hover': hover }"
              max-width="600">
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
                <div class="mb-5 ml-1">
                    <v-btn v-if="i == 0" color="orange" :href="item.site" target="_blank" outlined dense>{{ $t('visit') }}</v-btn>
                </div>
                <div class="font-weight-light grey--text text-h6 mb-2">
                  {{ item.type }}
                </div>
                <h3 class="text-h4 font-weight-light orange--text mb-2">
                  {{ langVCards(i, item.name) }}
                </h3>
                <div class="font-weight-light grey--text text-h6 mb-2">
                  {{ langVCards(i, item.info) }}<br>
                  {{ $t('tecnologiesUsed') }}
                  <span>
                    <b>{{ item.tec }}</b>
                  </span>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <v-card class="theme-card my-16" style="min-height: 40em;" id="3">
        <v-card-title class="text-center justify-center py-16">
          <h1 class="font-weight-bold text-h2 basil--text">
            {{ $t('skills') }}
          </h1>
        </v-card-title>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="10">
            <v-tabs v-model="tab" color="orange" dark centered>
              <v-tab v-for="(item, i) in abilities" :key="i" show-arrows>
                <v-icon class="mr-2" :color="item.color">{{ item.icon }}</v-icon>{{ item.name }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in abilities" :key="item.id">
                <v-card flat class="theme-card">
                  <v-card-text class="font-weight helvetica text-h6 mb-2 theme-card">{{ langAbilities(item.id)
                    }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-card>

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
        <v-dialog v-model="dialog" width="60vw" transition="dialog-bottom-transition" class="full-dialog">
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
              <v-btn text @click="previousImage()">{{ $t('previous') }}</v-btn>
              <v-btn text @click="nextImage()">{{ $t('next') }}</v-btn>
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
                <h3 color="prymary">{{ $t('sendEmail') }}</h3>
              </v-toolbar>
              <v-card-text>
                <v-form action="https://formsubmit.co/285c194ae6d9f3e8327bae53ad60ff3e" method="POST">
                  <v-text-field class="pt-6" dense outlined v-model="formData.name" :label="$t('yourName')" name="name"
                    required></v-text-field>
                  <v-text-field dense outlined v-model="formData.email" :label="$t('yourEmail')" name="email" type="email"
                    required></v-text-field>
                  <v-textarea outlined v-model="formData.message" :label="$t('message')" name="message"
                    type="message"></v-textarea>
                  <input type="hidden" name="_next" value="https://portifolioalexalle.vercel.app/">
                  <input type="hidden" name="_captcha" value="false">
                  <v-btn type="submit" color="orange" @click="snackbarSentEmail">{{ $t('send') }}</v-btn>
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
        <v-snackbar top v-model="snackbar1" :timeout="timeout">
          {{ $t('copiedEmail') }}

          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar1 = false">
              {{ $t('close') }}
            </v-btn>
          </template>
        </v-snackbar>
      </div>

      <div>
        <v-snackbar top v-model="snackbar2" :timeout="5000">
          {{ $t('alertEmail') }}

          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar2 = false">
              {{ $t('close') }}
            </v-btn>
          </template>
        </v-snackbar>
      </div>

    </v-container>

    <Footer style="margin-top: 5rem;"></Footer>
  </div>
</template>

<script>
import Vue from 'vue';
import Footer from './Footer.vue';

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
      snackbar1: false,
      snackbar2: false,
      timeout: 4000,
      emailButtom: false,
      showProfile: false,
      tab: null,

      formData: {
        name: '',
        email: '',
        message: ''
      },

      items: [
        { name: 1, srcs: [0, 1, 2, 3, 4, 5, 6, 7, 8], type: 'Front-end', info: 2, tec: 'TypeScript, JavaScript e Vue.js', link: 'https://github.com/MessiahDev/Car-Rental-Frontend', site: 'https://carrental-demo.vercel.app/' },
        { name: 1, srcs: [9, 10, 11], type: 'Back-end', info: 2, tec: 'C# e ASP.NET Core', link: 'https://github.com/MessiahDev/API_CarRental-Backend' },
        { name: 1, srcs: [12, 13, 14], type: 'Back-end', info: 2, tec: 'C# e Visual Studio (Console)', link: 'https://github.com/MessiahDev/Projeto-Jogo-de-Xadrez' },
        { name: 1, srcs: [15, 16], type: 'Back-end', info: 2, tec: 'C# e ASP.NET Core', link: 'https://github.com/MessiahDev/ApiCatalogo' }
      ],

      icons: [
        { link: 'https://www.linkedin.com/in/alex-alle/', icon: 'mdi-linkedin' },
        { link: 'https://github.com/MessiahDev', icon: 'mdi-github' },
        { link: '', icon: 'mdi-gmail' },
        { link: 'https://wa.me/5521998138903', icon: 'mdi-whatsapp' },
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
      abilities: [
        { id: 0, name: 'TypeScript', icon: 'mdi-language-typescript', color: '#007acc' },
        { id: 1, name: 'JavaScript', icon: 'mdi-language-javascript', color: '#f0db4f' },
        { id: 2, name: 'Vue.js', icon: 'mdi-vuejs', color: '#42b883' },
        { id: 3, name: 'Vuetify', icon: 'mdi-vuetify', color: '#1867c0' },
        { id: 4, name: 'C-Sharp', icon: 'mdi-language-csharp', color: '#68217A' }
      ]
    };
  },

  components: {
    Footer,
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
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
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

    langAbilities(index) {
      if (index === 0) return this.$t(`ability${index}`);
      if (index === 1) return this.$t(`ability${index}`);
      if (index === 2) return this.$t(`ability${index}`);
      if (index === 3) return this.$t(`ability${index}`);
      if (index === 4) return this.$t(`ability${index}`);
    },

    handleScroll() {
      this.hidden = window.scrollY > 400;
      this.showProfile = window.scrollY < 100;
    },

    sendMail(index) {
      if (index === 2) this.dialog3 = true;
    },

    copyEmail() {
      navigator.clipboard.writeText(this.email);
      this.snackbar1 = true;
    },

    snackbarSentEmail() {
      this.snackbar2 = true;
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

    previousImage() {
      const currentIndex = this.selectedImages.indexOf(this.images.indexOf(this.imageFullScream));
      if (currentIndex > 0) {
        this.imageFullScream = this.images[this.selectedImages[currentIndex - 1]];
      } else {
        this.imageFullScream = this.images[this.selectedImages[this.selectedImages.length - 1]];
      }
    },

    nextImage() {
      const currentIndex = this.selectedImages.indexOf(this.images.indexOf(this.imageFullScream));
      if (currentIndex < this.selectedImages.length - 1) {
        this.imageFullScream = this.images[this.selectedImages[currentIndex + 1]];
      } else {
        this.imageFullScream = this.images[this.selectedImages[0]];
      }
    },
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
}

.comming-animation {
  border: 1px solid #DCDCDC;
  border-radius: 40px;
  margin-top: 7rem;
  animation: comming 2s ease-in-out forwards;
}

@keyframes comming {
  100% {
    box-shadow: 0px 16px 50px 23px rgba(0,0,0,0.2);
  }

  0% {
    transform: 0px 16px 50px 23px rgba(0,0,0,0.2);
  }
}

.divider {
  margin-top: 9rem;
}

.mTitleProjects {
  margin-top: 15vh;
}

.mtimeline {
  margin-top: 5vh;
  margin-bottom: 7rem;
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

.theme-border {
  border: 5px;
  border-style: solid;
  border-color: #121212;
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

.falling-animation {
  animation: falling 2s ease forwards;
}

.dashleft-animation {
  animation: dashleft 2s ease forwards;
}

.dashright-animation {
  animation: dashright 2s ease forwards;
}

@keyframes falling {
  0% {
    transform: translateY(-20%);
  }

  100% {
    transform: translateY(0%);
  }
}

@keyframes dashleft {
  0% {
    transform: translateX(-5%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes dashright {
  0% {
    transform: translateX(5%);
  }

  100% {
    transform: translateX(0%);
  }
}

.iconSocial:hover {
  animation: moveUp 0.9s ease forwards;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>