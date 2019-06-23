<template>
  <v-container class="container" style="padding:0px;">
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 class="white my-3 mx-5" style="background-color: white;">
        <v-card
          color="white"
          class="text-xs-right"
          flat
          height="200px"
          style="background-color: white;"
        >
          <v-toolbar :color="bar.class" :dark="bar.dark">
            <v-btn icon @click="opened=!opened">
              <v-img width="30px" height="30px" contain :src="baseURL+'/i_icon_image.png'"/>
            </v-btn>
            <v-spacer></v-spacer>
            <span ref="label" class="label pr-3">{{label}}</span>
            <v-btn
              icon
              @click="pickone(subject.text)"
              v-for="(subject,index) in symbols"
              :key="index"
            >
              <v-img class="px-1" width="42px" height="42px" contain :src="baseURL+subject.src"/>
            </v-btn>
          </v-toolbar>
          <span class="elementName mr-5">{{elementName}}</span>
          <keep-alive>
            <v-img v-if="opened" contain class="mx-5 my-3" :src="baseURL+src_overlay" :key="1"/>
            <v-img v-show="!opened" contain class="mx-5 my-3" :src="baseURL+src_hero" :key="2"/>
          </keep-alive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      baseURL:"/utp/",
      bar: { class: "elevation-0 white bar px-4" },
      logo_title: "",
      activeClass: "label",
      opened: false,
      label: ""
    };
  },
  props: ["symbols", "elementName", "src_hero", "src_overlay"],
  computed: {
    activeSubject: function() {
      return this.activeClass;
    }
  },
  methods: {
    clear: () => {
      for (let i; i < this.arr.length; i++) {
        this.arr[i].active = false;
      }
    },
    pickone: function(msg) {
      this.label = msg;
      //this.$store.commit("setLabel", index);
    }
  }
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
.sailing {
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
