<template>
  <div>
    <h1>Posts</h1>
    <div
        v-if="loading"
        class="progress"
    >
      <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 100%"
      >Загрузка...
      </div>

    </div>
    <div
        v-else
        class="row"
    >
      <div
          v-for="post in posts"
          :key="post.id"
          class="col-md-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <router-link :to="{name: 'postsDetail', params: { post_id: post.id }}" class="card-link">Перейти
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Index",
    data: () => ({
      posts: [],
      loading: false
    }),
    mounted() {
      this.loading = true;

      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(({data}) => this.posts = data)
        .finally(() => this.loading = false);
    }
  }
</script>

<style scoped>

</style>