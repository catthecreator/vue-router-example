import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/posts",
    name: "posts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Posts/Index.vue")
  },
  {
    path: "/posts/:post_id",
    name: "postsDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Posts/Detail.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
