<template>
  <div>
    <h1>Posts list</h1>
      <div
          v-if="loading"
          class="row">
        <div class="col-12">
          <div
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
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1>
            {{ post.title }}
          </h1>
          <p>
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from  "axios";

  export default {
    name: "Detail",
    data: () => ({
      post: {},
      loading: false,
    }),
    watch: {
      "$route.params.post_id" : {
        handler: function () {
          console.log("param");
          this.loadPost();
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      postId() {
        return this.$route.params.post_id;
      }
    },
    methods: {
      loadPost() {
        this.loading = true;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
          .then(({data}) => this.post = data)
          .finally(() => this.loading = false)
      }
    },
    mounted() {
      this.loadPost();
    }
  }
</script>

<style scoped>

</style>