<template>
  <div>
    <q-list separator>
      <q-item
        class="post q-py-md"
        v-for="(post,key) of posts"
        :key="key"
        :post="post">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle1 ">
            <strong>Moshe Cohen</strong>
            <span class="text-grey-7">
                @Moshe_Cohen
               <br class="lt-md"> &bull;{{ post.date | relativeDate }}
              </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            {{ post.content }}
          </q-item-label>
          <div class="row justify-between q-mt-sm">
            <q-btn
              icon="fas fa-comment"
              color="grey" size="sm"
              round
              flat
            ></q-btn>
            <q-btn
              icon="fas fa-retweet"
              color="grey"
              size="sm"
              round
              flat
            ></q-btn>
            <q-btn
              color="grey"
              size="sm"
              round
              flat
            ></q-btn>
            <q-btn
              @click="removePost(post)"
              icon="fas fa-trash"
              color="grey"
              size="sm"
              round
              flat
            ></q-btn>
          </div>
        </q-item-section>
      </q-item>
      <!--      </transition-group>-->
      <q-separator inset="item"/>
    </q-list>
  </div>
</template>
<script>
import {formatDistance} from "date-fns";
import {mapActions, mapState} from "vuex";

export default {
  name: "postList",
  data: () => ({
    data: []
  }),
  components: {ButtonGroup},
  methods: {
    ...mapActions('posts', ['getPosts', 'deletePost']),
    removePost(post) {
      let id = post.id
      this.deletePost(id)
    }
  },
  computed: mapState('posts', ['posts'])
  ,
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    },
  },
  // created() {
  //   this.getPosts()
  // },
  // watch: {
  //   posts() {
  //     console.log(this.posts)
  //
  //   }
  // }

}
</script>

<style scoped>

</style>
