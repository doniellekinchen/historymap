<template>
  <div v-if="post" class="full-blog-post">
    <h1>{{ post.title }}</h1>
    <div class="bi_img">
      <img v-if="post.image" :src="post.image" :alt="post.title" />
    </div>
    <div class="bi_content">{{ post.content }}</div> 
    <div class="reading_time">{{ post.readingTime }}</div>
    <router-link :to="`/state/${stateName}`" class="back-to-blog">Back to Blog</router-link>
  </div>
  <div v-else class="full-blog-post">
    <h1>Post Not Found</h1>
    <p>Sorry, we couldn't find the blog post you're looking for.</p>
    <router-link :to="`/state/${stateName}`" class="back-to-blog">Back to Blog</router-link>
  </div>
</template>

<script>
import stateDetails from '@/data/stateDetails.js';

export default {
  props: ['stateName', 'postName'],
  computed: {
    post() {
      const state = stateDetails[this.stateName];

      if (!state) {
        return null;
      }
      const post = state.blogPosts.find(
        (post) => post.title.replace(/\s+/g, '-').toLowerCase() === this.postName
      );

      console.log(post); 
      return post;
    },
  },
};
</script>

<style scoped>

.full-blog-post {
  margin: 20px;
}
.full-blog-post h1 {
  font-size: 2rem;
}
.full-blog-post .back-to-blog {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #007BFF;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
}

.full-blog-post .back-to-blog:hover {
  background-color: #0056b3;
}

.full-blog-post p {
  color: #999;
  font-size: 1rem;
}
</style>
