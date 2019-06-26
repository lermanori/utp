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
          <router-view/>
        </transition>
        <app-speed-dial/>
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

