<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 style="text-align:center">
        <v-btn
          style="border-radius:50%; height:180px; width:190px; border-color:white"
          class="mx-0 ma-3 text-center"
          outline
          fab
          color="black"
          :to="to"
          :ripple="false"
        >
          <video muted playsinline autoplay="true" loop style="width:20vw;">
            <source :src="src" type="video/mp4">
          </video>
          <!--
          <v-img
            contain
            position="center center"
            :src="src"
            style="border-radius:50%; height:250px; width:250px;"
            @mouseover="mouse_over_handler"
            @mouseleave="mouse_out_handler"
            :class="[animated]"
          />-->
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <h1 class="sub-heading text-xs-center" style="margin-top:55px;">{{label}}</h1>
      </v-flex>
    </v-layout>
    <br>
    <br>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      animated: ""
    };
  },
  methods: {
    mouse_over_handler() {
      this.animated = this.animation;
    },
    mouse_out_handler() {
      this.animated = "";
    }
  },
  props: ["src", "label", "to", "animation"]
};
</script>

<style scoped>
@font-face {
  font-family: rutz-bold;
  src: url("../../public/rutz_font/Rutz_OEBolPro.otf");
}
h1 {
  font-family: rutz-bold;
  font-weight: 50;
  font-size: 32px;
}
.v-btn--floating {
  height: 100px;
  width: 100px;
}
.v-img :hover {
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-duration: 300ms;
}
</style>
