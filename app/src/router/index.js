import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  PostsView,
  DetailsView,
  ApiTestView,
  LandingView,
} from "../views";
import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "app", component: LandingView },
  { path: "/home", name: "home", component: HomeView },
  { path: "/api", name: "api", component: ApiTestView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  { path: "/register", name: "register", component: () => import("../views/RegisterView.vue") },
  { path: "/login", name: "login", component: () => import("../views/LoginView.vue") },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

// router.beforeEach(async (to, from) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/", "/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   /**add function to check if user is logged in */
//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     auth.isLoginModalOpen = true;
//     return from.fullPath;
//     // return "/login";
//   }
// });

export default router;
