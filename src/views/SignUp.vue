<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-alert type="error" v-if="feedback">{{ feedback }}</v-alert>
      </v-col>

      <v-col cols="10">
        <v-alert type="success" v-if="success">{{ success }}</v-alert>
      </v-col>

      <v-col cols="10">
        <v-card flat color="transparent" class="display-1 mx-auto">Sign Up</v-card>

        <v-form class="mx-auto my-4" @submit.prevent="signUp">
          <v-text-field v-model="firstName" label="First Name"></v-text-field>

          <v-text-field v-model="lastName" label="Last Name"></v-text-field>

          <v-text-field v-model="phoneNumber" type="number" label="Phone Number"></v-text-field>

          <v-textarea auto-grow v-model="address" label="Address"></v-textarea>

          <v-text-field v-model="zipCode" type="number" label="Zip Code"></v-text-field>

          <v-text-field v-model="email" label="E-mail" type="email"></v-text-field>

          <v-text-field v-model="password" label="Password" type="password"></v-text-field>

          <v-checkbox v-model="checkbox" label="I agree to the terms and conditions?"></v-checkbox>

          <v-btn
            :disabled="!checkbox"
            class="mr-4 primary"
            @click="signUp"
            :loading="loading"
          >Sign Up</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db, fb } from "../db.js";
export default {
  name: "SignUp",
  data: () => ({
    feedback: null,
    success: null,
    email: null,
    password: null,
    checkbox: false,
    firstName: null,
    lastName: null,
    address: null,
    phoneNumber: null,
    zipCode: null,
    loading: false
  }),

  methods: {
    signUp() {
      this.loading = true;
      if (this.firstName && this.email && this.password) {
        let ref = db.collection("users").doc(this.email);
        // set the the email as the doc id
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "this email is already taken";
            this.loading = false;
          } else {
            fb.auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  email: this.email,
                  user_id: cred.user.uid,
                  firstName: this.firstName,
                  lastName: this.lastName,
                  address: this.address,
                  phoneNumber: this.phoneNumber,
                  zipCode: this.zipCode
                });
              })
              .then(() => {
                this.loading = false;
                this.success = "this username is avaliable";
                this.$router.push({ name: "home" });
              })
              .catch(error => {
                // alert(error);
                this.loading = false;
                this.feedback = error.message;
              });
          }
        });
      } else {
        this.feedback = "You must enter all fields";
      }
    }
  }
};
</script>