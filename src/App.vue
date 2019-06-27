<template>
  <v-app id="inspire" style="background-color: white;">
    <v-content>
      <v-container fluid fill-height>
        <transition
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutRight"
          mode="out-in"
          duration="700"
        >
          <router-view v-if="$vuetify.breakpoint.smAndUp"/>
          <template v-else>
            <v-layout justify-center class="text-xs-center">
              <h1 class="mt-5 mx-3">watch in horizontal view</h1>
              <v-btn class="mt-5 mx-5" outline xl>
                <v-icon>screen_rotation</v-icon>
              </v-btn>
            </v-layout>
          </template>
        </transition>
        <app-speed-dial v-if="$vuetify.breakpoint.smAndUp"/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import speedDial from "./components/speedDial.vue";
export default {
  data: () => ({
    drawer: false,
    left: false
  }),
  props: {
    source: String
  },
  components: {
    "app-speed-dial": speedDial
  }
};
</script>
<style scoped>
#drawer {
  background-color: black;
  color: white;
}
.container {
  padding: 0px;
}
</style>

