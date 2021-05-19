
export default {
  addNewPost: (state, data) => (state.posts.push(data)),
  readPosts: (state, data) => {
    (state.posts = [...data])
  },
  deletePost: (state, id) => {
    let index = state.posts.findIndex(post => post.id = id)
    state.posts.splice(index, 1)
  },

}
