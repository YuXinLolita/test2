<template>
  <div class="home">
    <h1>前后端数据交互</h1>
    <p>路由是规则，url是具体形式</p>
    <ul>
      <li>发送请求</li>
      <li>method:get||post</li>
      <li>request</li>
      <li>response</li>
    </ul>
    <div><p>前端页面</p></div>
    <ul>
      <li>request</li>
      <li>路由 路由 路由</li>
      <li>response</li>
    </ul>
    <h2>nodejs 了解框架和API</h2>
    <ul>
      <h3>优势</h3>
      <li>可以直接使用js语法</li>
    </ul>
    <h3>学习一门新技术的正确套路</h3>
    <ul>
      <li>找准范围</li>
      <li>刻意训练</li>
      <li>及时反馈</li>
    </ul>
    <ul>
      <li>善用文档</li>
      <li>并不适合从零开始</li>
      <li>适度输出</li>
      <li>多动手写（比如自己写笔记发到网上）</li>
      <li>不做伸手党（当然尽力而为）</li>
      <li>学会带着问题前行</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// const flag = true
// if(flag) {
// import {sum,test} from './urils'
// }
import { sum, test } from "./urils";
export default {
  name: "HomeView",
  mounted() {
    const num = sum(330, 3);
    console.log(num);
    test();
  },
};
</script>
