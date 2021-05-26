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
            <q-img
              :src="img"
              class="q-pa-lg img"
              spinner-color="white"
              style="height: 30px; max-width: 30px"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle1 ">
            <strong>{{ userId }}</strong>
            <span class="text-grey-7">
              {{ userId }}
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
  methods: {
    ...mapActions('posts', ['getPosts', 'deletePost']),
    removePost(post) {
      let id = post.id
      this.deletePost(id)
    }
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapState('auth', ['userId','img'])
  },

  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
    ,
  }
  ,
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
