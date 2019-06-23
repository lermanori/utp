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
        >
          <v-img
            contain
            position="center center"
            :src="src"
            style="border-radius:50%; height:250px; width:250px;"
          />
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
  props: ["src", "label", "to"]
};
</script>

<style scoped>
@font-face {
  font-family: rutz-title;
  src: url("../../public/rutz_font/Rutz_OEMedPro.otf");
}
h1 {
  font-family: rutz-title;
  font-weight: 50;
}
.v-btn--floating {
  height: 100px;
  width: 100px;
}
</style>
