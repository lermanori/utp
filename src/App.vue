<template>
  <v-app id="inspire">

    <v-toolbar
      color="black"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>UTP</v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-toolbar>
    <v-navigation-drawer 
      id="drawer"
      v-model="drawer"
      dark
      fixed
      app
    >
      <v-list dense class="mt-5">
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>main-menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

            <v-list-tile to="/intro">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>demo-component</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid fill-height>

            <router-view/>

      </v-container>
    </v-content>


  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      left:false


 
    }),
    props: {
      source: String
    }
  }
</script>
<style scoped>
  #drawer{
    background-color: black;
    color: white;
  }

</style>

