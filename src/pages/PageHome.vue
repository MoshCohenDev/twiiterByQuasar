<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div>
        <add-post/>
      </div>
      <q-separator
        color="gery"
        class="divider"
        size="10px"
      >
      </q-separator>
      <post-list/>
    </q-scroll-area>
  </q-page>
</template>

<script>
import AddPost from "components/addPost";
import PostList from "components/postList";

export default {
  name: 'PageHome',
  components: {PostList, AddPost},
}
</script>
<style lang="scss">
.newInput {
  textarea {
    font-size: 19px;
    line-height: 1.4 !important;
  }
}

.divider {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: $grey-4;
}

.qweet-content {
  white-space: pre-line;
}

.post {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

</style>
