<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center>
      <v-flex xs12>
        <v-img :src="baseURL + meteorology_img_src"/>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 v-for="(element_obj,index) in dataMeteorology" :key="index">
        <app-element1
          v-if="ready"
          class="ma-5"
          :symbols="element_obj.symbols"
          :elementName="element_obj.elementName"
          :src_hero="element_obj.src_hero"
          :src_overlay="element_obj.src_overlay"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import element1 from "../components/element1.vue";
import DataMeteorology from "../../public/data_meteorology.js";

export default {
  data() {
    return {
      ready: false,
      baseURL: "/utp/",
      dataMeteorology: DataMeteorology,
      meteorology_img_src: "/meteorology_image.png"
      /*element_obj: {
        symbols: [
          { text: "מתקיימת בקיץ", src: "/summer_icon_image.png" },
          {
            text: "מתקיימת במיקום ספיציפי",
            src: "/specificLocation_icon_image.png"
          },
          { text: "תופעה גיאולוגית", src: "/geology_icon_image.png" }
        ],
        elementName: "Sailing Rocks | אבנים נעות",
        src_overlay: "/blue_rocks.png",
        src_hero: "/sailing_rocks.png"
      }*/
    };
  },
  components: {
    "app-element1": element1
  },
  mounted() {
    setTimeout(() => {
      this.ready = true;
    }, 1500);
  }
};
</script>

<style scoped>
</style>
