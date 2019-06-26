<template>
  <v-container fluid class="main-container">
    <v-layout justify-center>
      <v-flex xs12>
        <video muted playsinline autoplay="true" loop style="width:100vw;">
          <source src="movie.mp4" type="video/mp4">
        </video>
      </v-flex>
    </v-layout>
    <br>
    <br>

    <v-layout justify-center>
      <v-img :src="introduction_src"/>
    </v-layout>

    <v-layout justify-center class="mt-4">
      <v-flex xs4 v-for="(subject,index) in subjects_obj" :key="index">
        <app-subject-btn
          :src="subject.src"
          :label="subject.label"
          :to="subject.to"
          :animation="subject.animation"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import subjectButton from "../components/subjectButton.vue";

export default {
  data: () => {
    return {
      introduction_src: "intro.png",
      utptitle: "אוטופיה",
      btn1: "מקרא",
      btn2: "הסבר",
      subjects_obj: [
        {
          src: "logo_meteorlogy.mp4",
          label: "מטאורולוגיה",
          to: "/meteorology",
          animation: "animated infinite tada"
        },
        {
          src: "logo_biology.mp4",
          label: "ביולוגיה",
          to: "/biology",
          animation: "animated infinite heartBeat"
        },
        {
          src: "logo_geology.mp4",
          label: "גאולוגיה",
          to: "/geology",
          animation: "animated infinite shake"
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

