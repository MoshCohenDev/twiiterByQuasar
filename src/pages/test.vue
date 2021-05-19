<!--<template>-->
<!--  <q-page class="relative-position">-->
<!--    <q-scroll-area class="absolute fullscreen">-->
<!--      <div class="q-py-lg q-px-md-->
<!--    row items-end q-col-gutter-md">-->
<!--        <div class="col">-->
<!--          <q-input-->
<!--            autogrow-->
<!--            bottom-slots-->
<!--            class="newInput"-->
<!--            v-model="newPost"-->
<!--            placeholder="What's New"-->
<!--            counter dense-->
<!--            maxlength="280"-->
<!--          >-->
<!--            <template v-slot:before>-->
<!--              <q-avatar>-->
<!--                <img src="https://cdn.quasar.dev/img/avatar2.jpg">-->
<!--              </q-avatar>-->
<!--            </template>-->
<!--          </q-input>-->
<!--        </div>-->
<!--        <div class="col col-shrink">-->
<!--          <q-btn-->
<!--            @click="addNewPost"-->
<!--            :disable="!newPost"-->
<!--            unelevated-->
<!--            class="q-mb-lg"-->
<!--            rounded-->
<!--            color="primary"-->
<!--            no-caps-->
<!--            label="what's New"/>-->
<!--        </div>-->
<!--      </div>-->
<!--      <q-separator-->
<!--        color="gery"-->
<!--        class="divider"-->
<!--        size="10px"-->
<!--      >-->
<!--      </q-separator>-->

<!--      <q-list separator>-->
<!--        <transition-group-->
<!--          appear-->
<!--          enter-active-class="animated fadeIn"-->
<!--          leave-active-class="animated fadeOut"-->
<!--        >-->
<!--          <q-item-->
<!--            class="post q-py-md"-->
<!--            v-for="post in posts"-->
<!--            :key="post.id"-->
<!--          >-->
<!--            <q-item-section avatar top>-->
<!--              <q-avatar>-->
<!--                <img src="https://cdn.quasar.dev/img/avatar2.jpg">-->
<!--              </q-avatar>-->
<!--            </q-item-section>-->
<!--            <q-item-section>-->
<!--              <q-item-label class="text-subtitle1 ">-->
<!--                <strong>Moshe Cohen</strong>-->
<!--                <span class="text-grey-7">-->
<!--                @Moshe_Cohen-->
<!--               <br class="lt-md"> &bull;{{ post.date | relativeDate }}-->
<!--              </span>-->
<!--              </q-item-label>-->
<!--              <q-item-label class="qweet-content text-body1">-->
<!--                {{ post.content }}-->
<!--              </q-item-label>-->
<!--              <div class="row justify-between q-mt-sm">-->
<!--                <q-btn-->
<!--                  icon="fas fa-comment"-->
<!--                  color="grey"-->
<!--                  size="sm"-->
<!--                  round-->
<!--                  flat-->
<!--                ></q-btn>-->
<!--                <q-btn-->
<!--                  icon="fas fa-retweet"-->
<!--                  color="grey"-->
<!--                  size="sm"-->
<!--                  round-->
<!--                  flat-->
<!--                ></q-btn>-->
<!--                <q-btn-->
<!--                  icon="far fa-heart"-->
<!--                  color="grey"-->
<!--                  size="sm"-->
<!--                  round-->
<!--                  flat-->
<!--                ></q-btn>-->
<!--                <q-btn-->
<!--                  @click="removePost(post)"-->
<!--                  icon="fas fa-trash"-->
<!--                  color="grey"-->
<!--                  size="sm"-->
<!--                  round-->
<!--                  flat-->
<!--                ></q-btn>-->
<!--              </div>-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--        </transition-group>-->
<!--        <q-separator inset="item"/>-->
<!--      </q-list>-->
<!--    </q-scroll-area>-->
<!--  </q-page>-->
<!--</template>-->

<!--<script>-->
<!--import {formatDistance} from 'date-fns'-->
<!--import db from 'src/boot/firebase'-->

<!--export default {-->
<!--  name: 'PageHome',-->
<!--  data() {-->
<!--    return {-->
<!--      newPost: '',-->
<!--      posts: []-->
<!--    }-->

<!--  },-->
<!--  methods: {-->
<!--    addNewPost() {-->
<!--      let newPost = {-->
<!--        content: this.newPost,-->
<!--        date: Date.now()-->
<!--      }-->
<!--      db.collection("posts").add(newPost).then(() => {-->
<!--        console.log("Document successfully written!");-->
<!--      })-->
<!--        .catch((error) => {-->
<!--          console.error("Error writing document: ", error);-->
<!--        });-->
<!--      this.newPost = ''-->
<!--    },-->
<!--    removePost(post) {-->
<!--      db.collection("posts").doc(post.id).delete().then(() => {-->
<!--        console.log("Document successfully deleted!");-->
<!--      }).catch((error) => {-->
<!--        console.error("Error removing document: ", error);-->
<!--      });-->

<!--    }-->
<!--  },-->
<!--  filters: {-->
<!--    relativeDate(value) {-->
<!--      return formatDistance(value, new Date())-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    db.collection("posts").orderBy('date').onSnapshot((snapshot) => {-->
<!--      snapshot.docChanges().forEach((change) => {-->
<!--        let postChange = change.doc.data()-->
<!--        postChange.id = change.doc.id-->
<!--        if (change.type === 'added') {-->
<!--          console.log('New post: ', postChange);-->
<!--          this.posts.unshift(postChange)-->
<!--        }-->
<!--        if (change.type === 'modified') {-->
<!--          console.log('Modified city: ', postChange);-->
<!--        }-->
<!--        if (change.type === 'removed') {-->
<!--          console.log('Removed city: ', postChange);-->
<!--          let index = this.posts.findIndex(post => post.id = postChange.id)-->
<!--          this.posts.splice(index, 1)-->
<!--        }-->
<!--      });-->
<!--    });-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style lang="scss">-->
<!--.newInput {-->
<!--  textarea {-->
<!--    font-size: 19px;-->
<!--    line-height: 1.4 !important;-->
<!--  }-->

<!--}-->

<!--.divider {-->
<!--  border-top: 1px solid;-->
<!--  border-bottom: 1px solid;-->
<!--  border-color: $grey-4;-->
<!--}-->

<!--.qweet-content {-->
<!--  white-space: pre-line;-->
<!--}-->

<!--.post {-->
<!--  border-top: 1px solid rgba(0, 0, 0, 0.12);-->
<!--}-->

<!--</style>-->
