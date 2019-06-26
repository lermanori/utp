<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center>
      <v-flex xs12>
        <v-img :src="baseURL + biology_img_src"/>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 v-for="(element_obj,index) in dataBiology" :key="index">
        <app-element1
          v-if="ready"
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
import DataBiology from "../../public/data_biology.js";

export default {
  data() {
    return {
      ready: false,
      baseURL: "/utp/",
      dataBiology: DataBiology,
      biology_img_src: "/biology_image.png"
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
  mounted() {
    setTimeout(() => {
      this.ready = true;
    }, 1500);
  },
  components: {
    "app-element1": element1
  }
};
</script>

<style scoped>
</style>
