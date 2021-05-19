import Vue from "vue";

export default {
  addNewPost: (state, data) => (state.posts.push(data)),
  readPosts: (state, data) => {
    (state.posts = [...data])
  },
  deletePost: (state, id) => {
    debugger
    let index = state.posts.findIndex(post => post.id = id)
    state.posts.splice(index, 1)
  },

}
