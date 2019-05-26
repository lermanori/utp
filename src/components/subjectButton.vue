<template>
    <v-container fluid>
            <v-layout row wrap justify-center>
                <v-flex xs12>
                    <v-btn style="border-radius:50%" class="mx-0 ma-3" outline fab color="black" >
                        <v-img contain :src=src style="border-radius:50%" />
                    </v-btn>
                </v-flex>
                <v-flex xs12>
                    <h4 class="sub-heading text-xs-center">{{label}}</h4>
                </v-flex>
            </v-layout>
    </v-container>
</template>

<script>
export default {
    props:['src','label'],
}
</script>

<style scoped>
@font-face {
  font-family: rutz-title;
  src: url("../../public/rutz_font/Rutz_OEMedPro.otf");
}
h4{ font-family: rutz-title; font-weight: 50;}
.v-btn--floating {

    height: 100px;
    width: 100px;
}
</style>
