import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: "/vuedemo/",
  routes: [
    {
      path: "/hello",
      name: "HelloWorld",
      component: () => import("@/components/HelloWorld")
    },
    {
      path: "/",
      name: "Login",
      component: () => import("@/components/Login")//路由懒加载形式
    },{
      path: "/first",
      name: "first",
      component: () => import("@/components/first")//路由懒加载形式
    },{
      path: "/second",
      name: "second",
      component: () => import("@/components/second")//路由懒加载形式
    }
  ]
});

router.beforeEach((to, from, next) => {
  
});


export default router;

