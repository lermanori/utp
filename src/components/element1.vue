<template>
  <v-container justify-center class="container my-5" style="padding:0px;">
    <!--  <v-layout row wrap justify-center>
    <v-flex xs12 sm12 md12 class="white my-3 mx-5" style="background-color: white;">-->
    <v-card
      color="white"
      class="text-xs-right"
      flat
      style="background-color: white;min-height:90vh;"
    >
      <v-toolbar style="padding:0px;" :color="bar.class" :dark="bar.dark">
        <v-btn
          icon
          @click="opened=!opened"
          :style="this.$vuetify.breakpoint.lgAndUp ? 'transform:translateX(-10px);': '' "
          :ripple="false"
        >
          <v-img width="30px" height="30px" contain :src="baseURL+'/i_icon_image.png'"/>
        </v-btn>
        <v-spacer></v-spacer>
        <transition
          enter-active-class="animated fadeInLeft"
          leave-to-class="animated fadeOutLeft"
          mode="out-in"
        >
          <span v-if="getLabel!=''" ref="label" :class="['label pr-3']">{{label}}</span>
        </transition>
        <v-btn
          :ripple="false"
          icon
          @click="pickone(subject.text)"
          v-for="(subject,index) in symbols"
          :key="index"
        >
          <v-img class="pl-2" width="42px" height="42px" contain :src="baseURL+subject.src"/>
        </v-btn>
      </v-toolbar>

      <span class="elementName pr-3" style="margin-right:0;">{{elementName}}</span>
      <transition
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
        mode="out-in"
      >
        <keep-alive>
          <v-img
            contain
            class="my-3 mx-3"
            :src="opened == true ? baseURL+src_overlay : baseURL+src_hero"
            :key="opened == true ? baseURL+src_overlay : baseURL+src_hero"
          />
        </keep-alive>
      </transition>
      <!--
      <v-container fluid>
        <v-carousel
          class="mr-1 my-1"
          style="max-width:95wv;"
          hide-delimiters
          hide-controls
          :reverse="opened"
          :interval="1000000"
          :value="opened == true ? 1 : 0"
        >
          <v-carousel-item contain v-for="(item,i) in items" :key="i" :src="baseURL+item.src"></v-carousel-item>
        </v-carousel>
      </v-container>-->
      <!--
          <v-dialog v-model="opened" max-width="1000" class="text-xs-center">
            
              <v-img contain class :src="baseURL+src_overlay" :key="1"/>

          </v-dialog>
      <v-img id="hero" contain class="mx-3 my-3" :src="baseURL+src_hero" :key="2"/>-->
    </v-card>
    <!-- </v-flex>
    </v-layout>-->
  </v-container>
</template>


<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      baseURL: "/utp/",
      bar: { class: "elevation-0 white bar " },
      items: [{ src: this.src_hero }, { src: this.src_overlay }],
      logo_title: "",
      activeClass: "label",
      motionClass: "",
      opened: false,
      label: ""
    };
  },
  props: ["symbols", "elementName", "src_hero", "src_overlay"],
  computed: {
    activeSubject: function() {
      return this.activeClass;
    },
    getLabel: function() {
      return this.label;
    }
  },
  methods: {
    clearLabel: function() {
      this.label = "";
    },
    pickone: function(msg) {
      this.label = "";
      setTimeout(() => {
        this.label = msg;
      }, 500);
      //this.$store.commit("setLabel", index);
    }
  },
  components: {}
};
</script>

<style scoped>
@font-face {
  font-family: rutz-title;
  src: url("../../public/rutz_font/Rutz_OEMedPro.otf");
}
@font-face {
  font-family: rutz-heavy;
  src: url("../../public/rutz_font/Rutz_OEHeaPro.otf");
}
span.label {
  font-family: rutz-title;
  font-weight: 50;
}
span.elementName {
  font-family: rutz-heavy;
  font-weight: 200;
  font-size: 25px;
}
.toolbar :not(:first-child) {
  margin-top: 400px;
}

.container {
  background-color: white;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
