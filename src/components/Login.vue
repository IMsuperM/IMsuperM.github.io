<!-- 登录 -->
<template>
  <div class="page">
    <div class="login-box">
      <div class="row"><label for="name"></label><input id="name" type="text" /></div>
      <div class="row"><label for="name"></label><input id="name" type="text" /></div>
      <div class="row"><label for="name"></label><input id="name" type="text" /></div>
    </div>
    <!-- <form class="login" action="" method="post">
      <div class="row">
        <label for="name">username</label>
        <input type="text" name="name" id="name" />
      </div>
      <div class="row">
        <input type="password" name="password" id="password" />
      </div>
      <div class="row">
        <input type="button" value="提交" />
        <input type="button" value="取消" />
      </div>
    </form> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
/* @import url(); //引入公共css类 */
.page {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%;
  height: 100%;
  border: red solid 1px;
  // background-color: yellow;
}
.login-box {
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: black solid 1px;
  .row {
    flex: 1;
    width: 90%;
    border: green solid 1px;
    display: flex;
    flex-direction: row; //横向排列
    align-items: center;
    justify-content: space-between;
    & label {
      width: 40%;
      height: 40%;
      border: yellow solid 1px;
    }
    & input {
      width: 40%;
      height: 40%;
      border: yellow solid 1px;
    }
  }
}
.button {
}
</style>