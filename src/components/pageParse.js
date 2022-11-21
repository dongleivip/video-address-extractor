import { parse } from 'node-html-parser';

const parsePage = (url: string): string => {

  if (!url) {
    return 'url is not provided..';
  }

  console.info('input url:', url);

  const html = '<div data-v-cbdb9bbe="" class="js_inner inner not_fullscreen" >'
    + '<div data-v-cbdb9bbe="" class="js_video_poster video_poster" style = "display: none;" >'
    + '<video data-v-cbdb9bbe="" src = "http://mpvideo.qpic.cn/0b78nyaagaaa4yanabx3wbqfa3wdanxaaaya.f10003.mp4?dis_k=27298ec08821dfd456f92923851e8b60&amp;dis_t=1669031580&amp;vid=wxv_1971728112212115463&amp;format_id=10003&amp;support_redirect=0&amp;mmversion=false"'
    +   'poster="http://mmbiz.qpic.cn/mmbiz_jpg/jicY1fLQseN5HxWlBqqTEg3ozqn0cJgZbhicBLRSzTh1NePrCX1EKQbFoMQ1rqYhoAicJPXF0jBnejER9Ggs866ZA/0?wx_fmt=jpeg" webkit - playsinline="isiPhoneShowPlaysinline" playsinline = "isiPhoneShowPlaysinline"'
    +   'preload="metadata" crossorigin = "anonymous"'
    +   'controlslist = "nodownload"'
    +   'class="video_fill" >'
    +   'Your browser does not support video tags'
    +  '</video >'
    + '</div>'
    + '</div >';

  const page = parse(html);
  const section = page.querySelector('.video_fill');

  if (!section) {
    console.error('video section not fond..');
    return '无法获取视频链接...';
  }

  const videoUrl = section.getAttribute('src');
  return videoUrl;
}

export default parsePage;
