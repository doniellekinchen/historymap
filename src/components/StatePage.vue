<template>
    <div class="blog">
      <h1 class="blog_title">{{ stateName }} History Blog</h1>
  
      <div class="blog_wrapper">
        <div v-for="(post, index) in stateInfo.blogPosts" :key="index" class="blog_item">
          <div class="bi_img">
            <img v-if="post.image" :src="post.image" :alt="post.title" />
          </div>
          <div class="bi_title">{{ post.title }}</div>
          <div class="bi_content">{{ post.snippet }}</div>
          <div class="reading_time">{{ post.readingTime }}</div>
          <router-link :to="`/state/${stateName}/${post.title.replace(/\s+/g, '-').toLowerCase()}`" class="read-more">Read More</router-link>

        </div>
      </div>
  
      <div class="blog_button">
        <a href="#">Load More</a>
      </div>
    </div>
  </template>
  
  
  <script>
  import stateDetails from '@/data/stateDetails.js';
  
  export default {
    props: ['stateName'],
    computed: {
      stateInfo() {
        return stateDetails[this.stateName];
      },
    },
  };
  </script>


  <style scoped>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f0f8ff;
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }
  
  .blog {
    text-align: center;
    margin: 40px 0px;
  }
  
  .blog_title {
    margin: 0px 0px 30px;
    color: #666;
    font-family: 'Raleway', sans-serif;
  }
  
  .blog_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    width: 100%;
    justify-content: center;
  }
  
  .blog_item {
    a {
      color: inherit;
      text-decoration: inherit;
    }
    margin: 0px 20px 40px;
    padding-bottom: 10px;
    min-height: 300px;
    background: #fff 50%;
    background-size: cover;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);
    transition: all 0.5s ease;
  }
  
  .bi_img {
    height: 200px;
    margin: 0px 0px 20px;
    overflow: hidden;
  }
  
  .bi_img img {
    width: 90%;
  }
  
  .bi_title {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1.5em 0 0.5em;
  }
  
  .bi_content {
    padding: 20px 20px 10px;
    font-size: 0.8rem;
    text-align: justify;
    color: #999999;
  }
  
  .reading_time {
    font-family: 'Raleway', sans-serif;
    color: #738a94;
    font-size: 0.8rem;
    line-height: 33px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  
  .blog_item:hover {
    box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07), 1px 6px 12px rgba(39, 44, 49, 0.04);
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
  
  .blog_button {
    a {
      text-decoration: inherit;
      display: block;
      width: 200px;
      margin: 0px auto 24px;
      letter-spacing: 1px;
      padding: 15px 26px;
      background: #fc4f4f;
      color: white;
      outline-offset: -2px;
      transition: all 0.3s ease;
    }
  }
  
  .blog_button a:hover {
    background: #fff;
    color: #fc4f4f;
  }
  
  @media only screen and (max-width: 900px) {
    .blog .blog_wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media only screen and (max-width: 600px) {
    .blog .blog_wrapper {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  
  /* Read More and Back to Blog Buttons */
  .read-more,
  .back-to-blog {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
  }
  
  .read-more:hover,
  .back-to-blog:hover {
    background-color: #0056b3;
  }
  </style>
  