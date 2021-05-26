export default {
  setLoggedIn(state, value) {
    state.loggedIn = value
  },
  setUserByLogin(state, value) {
    const newName = value.split("@gmail.com")
    state.userId = newName
  },
  setUserByGoogle(state, value) {
    state.userId = value
  },
  imgUrl(state, value) {
    state.img = value
  }


}
