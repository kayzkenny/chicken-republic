<template>
  <v-footer dark color="#d43027">
    <v-row justify="center">
      <v-card flat tile class="white--text text-center" color="#d43027">
        <v-card-text class="white--text pt-2=4">
          This is applicaiton is built for demostration purposes only.
          I have no affiliation with Chicken Republic Inc.
          Designed with Adobe XD. Developed with Vue.Js, Vuetify and Firebase.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Kehinde Akeredolu</strong>
        </v-card-text>
      </v-card>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
