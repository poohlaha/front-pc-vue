import { RouterUrls } from './urls'

const routes = [
  {
    path: '/',
    name: RouterUrls.HOME.NAME,
    component: () => import(/* webpackChunkName: "home" */ '@views/pages/home/index.vue'),
    meta: {
      title: RouterUrls.HOME.TITLE,
      keepAlive: true
    }
  } // 首页
]

export default routes
