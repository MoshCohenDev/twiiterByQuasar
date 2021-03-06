import {firebaseAuth} from "boot/firebase";
import {LocalStorage, Loading} from "quasar";
import {showErrorMessage} from "src/functions/function-error-message";

export default {

  registerUser({}, payload) {
    // Loading.show()
    firebaseAuth.createUserWithEmailAndPassword
    (payload.email, payload.password)
      .then(response => {
        console.log('response', response.user.uid)
        this.$router.push('/home')
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  loginUser({}, payload) {
    // Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        // this.$router.push('/home')
        console.log('response', response.user.uid)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  logoutUser() {
    firebaseAuth.signOut()
  },
  handleAuthStateChange({commit, dispatch}) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        LocalStorage.set('loggedIn', user.uid)
        console.log('user', user)
        if (user.displayName === null) {
          console.log(user.email)
          commit('setUserByLogin', user.email)
        } else {
          console.log('user.photoURL',user.photoURL)
          commit('setUserByGoogle', user.displayName)
          commit('imgUrl',user.photoURL)
        }
        commit('setLoggedIn', true)
        this.$router.push('/home').catch(err => {
        })
        dispatch('posts/getPosts', null, {root: true})
      } else {
        // dispatch('posts/clearPosts', null, {root: true})
        // commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.push('/auth').catch(err => {
        })
      }
    })
  }
  // handleAuthStateChange({commit, dispatch}) {
  //   firebaseAuth.onAuthStateChanged(user => {
  //     Loading.hide()
  //     if (user) {
  //       LocalStorage.set('loggedIn', user.uid)
  //       if (user.displayName === null) {
  //         console.log(user.email)
  //         commit('setUserByLogin', user.email)
  //       } else {
  //         commit('setUserByGoogle', user.displayName)
  //       }
  //       commit('setLoggedIn', true)
  //       this.$router.push('/home').catch(err => {
  //       })
  //       //   dispatch('posts/getPosts', null, {root: true})
  //     } else {
  //       LocalStorage.set('loggedIn', false)
  //       this.$router.push('/auth').catch(err => {
  //       })
  //     }
  //   })
  // }

}
