<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs4>
        <h1 class="ma-3 text-xs-center">{{utptitle}}</h1>
      </v-flex>
    </v-layout>
    <v-layout justify-center row wrap class="my-4 text-xs-center">
      <v-flex xs2  >
          <v-btn outline class="btn mx-2">{{btn1}}</v-btn>
      </v-flex>
      <v-flex xs2 class="">
          <v-btn outline class="btn mx-2">{{btn2}}</v-btn>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs2 v-for="(subject,index) in subjects_obj" :key=index >
          <app-subject-btn :src='subject.src' :label='subject.label' />
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
import subjectButton from '../components/subjectButton.vue';

export default {
  data: () => {
    return {
      utptitle: "אוטופיה",
      btn1: "מקרא",
      btn2: "הסבר",
      subjects_obj: [
        {
          src:"logo_meteorology.jpg",
          label:"מטאורולוגיה"
        },
        {
          src:"logo_biology.jpg",
          label:"ביולוגיה"
        },
        {
          src:"logo_geology.jpg",
          label:"גאולוגיה"
        },
      ]

    };
  },
  components: {
    'app-subject-btn':subjectButton
  }
};
</script>
<style scoped>
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

