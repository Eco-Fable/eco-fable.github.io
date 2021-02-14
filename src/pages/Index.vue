<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->
    <img src="../assets/images/Coralogo-resized-final.png" alt="Eco-Fable" class="light-logo" />
    <img src="../assets/images/Coralogo-inverted-full-resized_final.png" alt="Eco-Fable" class="dark-logo" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>


<style scoped>
img {
  max-width: 45%;
  margin: 0 auto;
  display: flex;
  margin-bottom: 35px;
}

@media (max-width: 768px) {
  img {
    max-width: 75%;
  }
}
</style>
