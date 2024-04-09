<template>
  <v-container fluid class="center">
    <v-row>
      <v-col class="mx-auto" cols="10">
        <v-row>
          <v-col cols="4" class="center mt-16">
            <v-avatar
            class="center"
            size="280"
            style="border: 10px solid #e2e8f0;"
            ><v-img :src="require('@/assets/img/alex.jpg')" />
          </v-avatar>
          </v-col>

          <v-col cols="6" class="mt-16">
    <b><h1>Olá!</h1></b>Seja bem-vindo ao meu portfólio! Meu nome é [Seu Nome], e estou animado em compartilhar um pouco sobre quem sou e o que faço.

    Sou um profissional apaixonado por [sua área de atuação], com uma sólida formação e experiência em [mencione suas áreas de especialização]. Desde o início da minha jornada profissional, tenho buscado constantemente desafios que me permitam crescer e contribuir de forma significativa.

    Meu interesse por [sua área de atuação] começou durante [mencione uma experiência ou momento que despertou seu interesse]. Desde então, tenho dedicado meu tempo e energia para aprimorar minhas habilidades e explorar novas oportunidades nesse campo fascinante.

    Ao longo dos anos, tive a oportunidade de trabalhar em diversos projetos interessantes e desafiadores. Um dos destaques da minha carreira foi [destaque um projeto significativo ou uma conquista relevante]. Esse projeto não apenas me permitiu aplicar meu conhecimento e habilidades, mas também me proporcionou a oportunidade de colaborar com uma equipe talentosa e diversificada.

    Além disso, estou constantemente buscando aprender e crescer profissionalmente. Estou sempre atualizado sobre as tendências e desenvolvimentos mais recentes em [sua área de atuação], e estou comprometido em continuar expandindo meu conhecimento e habilidades para me manter relevante e eficaz.

    Este portfólio é uma amostra do meu trabalho e das minhas realizações até o momento. Espero que você encontre aqui uma visão clara do meu estilo de trabalho, minhas habilidades e o valor que posso agregar à sua equipe ou projeto.

    Obrigado por visitar meu portfólio, e estou ansioso para a oportunidade de colaborar e criar juntos no futuro!
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';

  export default Vue.extend({
    
  });
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}
.olaBig {
  font-size: 50px;
}

</style>