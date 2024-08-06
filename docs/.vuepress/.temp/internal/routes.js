export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/apple/WorkStation/ScoreLife/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/courses/ECTF.html", { loader: () => import(/* webpackChunkName: "courses_ECTF.html" */"/Users/apple/WorkStation/ScoreLife/docs/.vuepress/.temp/pages/courses/ECTF.html.js"), meta: {"title":""} }],
  ["/preliminary/", { loader: () => import(/* webpackChunkName: "preliminary_index.html" */"/Users/apple/WorkStation/ScoreLife/docs/.vuepress/.temp/pages/preliminary/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/apple/WorkStation/ScoreLife/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
