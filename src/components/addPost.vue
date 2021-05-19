<template>
  <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
    <div class="col">
      <q-input
        autogrow
        bottom-slots
        class="newInput"
        v-model="newPost"
        placeholder="What's New"
        counter dense
        maxlength="280"
      >
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </template>
      </q-input>
    </div>
    <div class="col col-shrink">
      <q-btn
        @click="addNewPosts"
        :disable="!newPost"
        unelevated
        class="q-mb-lg"
        rounded
        color="primary"
        no-caps
        label="what's New"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  name: "addPost",
  data() {
    return {
      newPost: ''
    }
  },
  methods: {
    ...mapActions('posts', ['addNewPost']),
    addNewPosts() {
      let Post = {
        content: this.newPost,
        date: Date.now()
      }
      this.addNewPost(Post)
      this.newPost = ''
    },
  },
}
</script>

<style scoped>

</style>
