<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12>
        <v-img :src="baseURL + geology_img_src"/>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12>
        <app-element/>
      </v-flex>
      <v-flex xs12>
        <app-element1
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
import element from "../components/element.vue";
import element1 from "../components/element1.vue";
export default {
  data() {
    return {
      baseURL:"/utp/",
      geology_img_src: "/geology_img.jpg",
      element_obj: {
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
      }
    };
  },
  components: {
    "app-element": element,
    "app-element1": element1
  }
};
</script>

<style scoped>
</style>
