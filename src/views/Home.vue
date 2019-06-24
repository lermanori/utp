<template>
  <v-container fluid class="main-container">
    <v-layout justify-center>
      <v-flex xs12>
        <video muted playsinline autoplay="true" loop style="width:100%; height:100%;">
          <source src="movie.mp4" type="video/mp4">
        </video>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <v-layout justify-center class="mt-4">
      <v-flex xs4 v-for="(subject,index) in subjects_obj" :key="index">
        <app-subject-btn :src="subject.src" :label="subject.label" :to="subject.to"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import subjectButton from "../components/subjectButton.vue";

export default {
  data: () => {
    return {
      utptitle: "אוטופיה",
      btn1: "מקרא",
      btn2: "הסבר",
      subjects_obj: [
        {
          src: "logo_meteorology.jpg",
          label: "מטאורולוגיה",
          to: "/meteorology"
        },
        {
          src: "logo_biology.jpg",
          label: "ביולוגיה",
          to: "/biology"
        },
        {
          src: "logo_geology.jpg",
          label: "גאולוגיה",
          to: "/geology"
        }
      ]
    };
  },
  components: {
    "app-subject-btn": subjectButton
  }
};
</script>
<style scoped>
.main-container {
  padding: 0px;
}

@font-face {
  font-family: rutz-title;
  src: url("../../public/rutz_font/Rutz_OEMedPro.otf");
}
@font-face {
  font-family: rutz-btn;
  src: url("../../public/rutz_font/Rutz_OERegPro.otf");
}

h1 {
  font-family: rutz-title;
  font-size: 50px;
  font-weight: 200;
  border-bottom: 2px solid black;
}
.btn {
  font-family: rutz-btn;
  border-radius: 10%;
}
.v-btn--floating {
  height: 100px;
  width: 100px;
}
</style>

