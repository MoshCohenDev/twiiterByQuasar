// import Vue from 'vue'
// import {uid,} from 'quasar'
// import db from 'src/boot/firebase'
//
// const state = {
//   posts: [],
//
// }
//
// const mutations = {
//   addNewPost: (state, data) => (state.posts.push(data)),
//   readPosts: (state, data) => (state.posts = [...data])
//  ,
// }
// const actions = {
//   addNewPost({commit}, post) {
//     db.collection("posts").add(post).then(() => {
//       console.log("Document successfully written!");
//       this.newPost = ''
//     })
//       .catch((error) => {
//         console.error("Error writing document: ", error);
//       });
//     commit('addNewPost', post)
//   },
//   getPosts({commit}) {
//     let tempData = []
//     db.collection("posts").orderBy('date').onSnapshot((snapshot) => {
//       console.log(snapshot.docs)
//       snapshot.docChanges().forEach((change) => {
//         let postChange = change.doc.data()
//         postChange.id = change.doc.id
//         tempData.push(postChange)
//         if (change.type === 'added') {
//           console.log('New post: ', postChange);
//         }
//         commit('readPosts', tempData)
//
//         // if (change.type === 'modified') {
//         //   console.log('Modified city: ', postChange);
//         // }
//         // if (change.type === 'removed') {
//         //   console.log('Removed city: ', postChange);
//         //   let index = this.posts.findIndex(post => post.id = postChange.id)
//         //   this.posts.splice(index, 1)
//         // }
//       });
//     });
//   }
//
// }
//
// const getters = {}
//
// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
//   getters
// }
