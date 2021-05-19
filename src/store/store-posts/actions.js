import {firebaseAuth, firebaseDb} from "boot/firebase";
import {date, LocalStorage} from "quasar";

export default {

  addNewPost({commit}, post) {
    let userId = firebaseAuth.currentUser.uid
    commit('addNewPost', post)
    console.log("userId", userId)
    firebaseDb.collection("userId").doc(userId).collection("posts").add(post).then(() => {
      console.log('post', post);
      this.newPost = ''
    })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  },
  getPosts({commit}) {
    let userId = firebaseAuth.currentUser.uid
    LocalStorage.set('userId', userId)
    let tempData = []
    firebaseDb.collection("userId").doc(userId).collection("posts")
      .orderBy('date').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = doc.data()
          data.id = doc.id
          data.uid = userId
          console.log(data)
          tempData.unshift(data)

        });
        commit('readPosts',tempData)

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    // .onSnapshot((snapshot) => {
    //   snapshot.docChanges().forEach((change) => {
    //     let postChange = change.doc.data()
    //     postChange.id = change.doc.id
    //     postChange.uid = userId
    //     tempData.unshift(postChange)
    //     // if (change.type === 'added') {
    //     // commit('readPosts', tempData)
    //     // }
    //     // if (change.type === 'modified') {
    //     //   console.log('Modified city: ', postChange);
    //     //   commit('readPosts', tempData)
    //     // }
    //     // if (change.type === 'removed') {
    //     //   console.log('Removed city: ', postChange);
    //     //
    //     // }

    //   });
    // });
  },
  deletePost({commit}, id) {
    commit('deletePost',id)
    let userId = firebaseAuth.currentUser.uid
    firebaseDb.collection("userId")
      .doc(userId).collection("posts").doc(id).delete().then(() => {
        debugger
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  },


}

