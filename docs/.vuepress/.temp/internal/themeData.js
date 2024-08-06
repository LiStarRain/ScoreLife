export const themeData = JSON.parse("{\"logo\":\"/images/soda.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"准备工作\",\"link\":\"/preliminary/\"},{\"text\":\"作曲课程\",\"link\":\"/courses/\",\"children\":[{\"text\":\"基础练习\",\"link\":\"/courses/ECTF.md\"}]},{\"text\":\"联系我\",\"link\":\"/contact/\",\"children\":[{\"text\":\"Email\",\"link\":\"http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=hPz38OX29uXt6vzE9fWq5_vp\"},{\"text\":\"小红书\",\"link\":\"https://www.xiaohongshu.com/user/profile/61050374000000000100a6e9?xhsshare=CopyLink&appuid=61050374000000000100a6e9&apptime=1722867825&share_id=d43faf9925fc46fb850482d6e47d0bec\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
