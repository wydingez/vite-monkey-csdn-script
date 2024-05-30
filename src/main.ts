import { createApp } from 'vue';
import App from './App.vue';

import { GM_addStyle } from '$';

import 'element-plus/dist/index.css';

function init() {
  //去除登录框
  GM_addStyle(".login-mark,#passportbox{display:none!important;}");
  GM_addStyle(".passport-login-container{display:none!important;}");
  // 去除推广广告
  $("li[data-type='ad']").remove();
  $("div[id^=kp_box]").remove()
  $(".recommend-box").remove()
  $(".blog-footer-bottom").remove()
  $("#asideWriteGuide").remove()
  $("div[data-pid='blog']").remove()
  // 红包雨
  $("#csdn-redpack").remove();
  $(".toolbar-advert").remove();
  // 免登录复制
  $(".hljs-button").removeClass("signin");
  $(".hljs-button").addClass("{2}");
  $(".hljs-button").attr("data-title", "免登录复制");
  $(".hljs-button").attr("onclick", "hljs.copyCode(event)");
  // 去除剪贴板劫持
  $("code").attr("onclick", "mdcp.copyCode(event)");
  try {
    // 复制时保留原文格式，参考 https://greasyfork.org/en/scripts/390502-csdnremovecopyright/code
    Object.defineProperty(window, "articleType", {
      value: 0,
      writable: false,
      configurable: false
    });
  } catch (err) {
  }
  //全文阅读
  var ef =document.getElementsByClassName('hide-article-box text-center')[0]
  if (ef) {
    ef.remove();
    document.getElementById('article_content')!.style.height = 'auto';
  }
}

createApp(App).mount(
  (() => {
    const app = document.createElement('div');
    $(".option-box[data-type='cs']")?.after(app);
    init()
    return app;
  })(),
);
