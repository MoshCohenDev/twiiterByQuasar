<template>
  <q-icon
      size="lg"
      color="red"
      name="email"
      @click="login">
    </q-icon>
</template>
<script>
import firebaseInstance from 'boot/firebase'

export default {
  name: "GoogleProvider",
  data() {
    return {
      text: ''
    }
  },

  methods: {
    login() {
      var provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      const self = this
      firebaseInstance.firebase.auth().signInWithPopup(provider).then(result => {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
        self.$router.push('/home')
        // ...
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });

    },

  }
}
</script>

<style scoped>

</style>
