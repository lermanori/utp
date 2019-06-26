<template>
  <v-speed-dial
    v-model="fab"
    :bottom="true"
    :right="true"
    direction="top"
    :fixed="true"
    :open-on-hover="false"
    transition="slide-y-reverse-transition"
    class="mr-5"
  >
    <template v-slot:activator>
      <v-btn class="mt-4" v-model="fab" color="indigo darken-4" small dark fab>
        <v-icon>menu</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </template>
    <v-btn
      outline
      v-if="this.$route.name!='meteorology'"
      to="meteorology"
      fab
      dark
      large
      color="black"
      style
    >
      <v-img :src="logo.meteorology"></v-img>
    </v-btn>
    <v-btn outline v-if="this.$route.name!='biology'" to="biology" fab dark large color="black">
      <v-img :src="logo.biology"></v-img>
    </v-btn>
    <v-btn outline v-if="this.$route.name!='geology'" to="geology" fab dark large color="black">
      <v-img :src="logo.geology"></v-img>
    </v-btn>
    <v-btn v-if="this.$route.name!='home'" to="/" fab dark small color="indigo darken-4">
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn fab @click="scrollTop()" dark small color="indigo darken-4">
      <v-icon>expand_less</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data() {
    return {
      fab: true,
      baseUrl: "/utp/",
      logo: {
        meteorology: this.baseUrl + "/meteor!!!.png",
        geology: this.baseUrl + "/geo!!!.png",
        biology: this.baseUrl + "/biology!!!.png"
      }
    };
  },
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
