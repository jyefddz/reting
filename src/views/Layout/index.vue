<template>
  <div>
    <router-view></router-view>
    <div class="footer">
      <van-tabbar active-color="#8ccba9" inactive-color="#8f918f" route>
        <van-tabbar-item to="/home">
          <template #icon>
            <span class="house house-shouye-weixuanzhong"></span>
            <span class="text">首页</span>
          </template>
        </van-tabbar-item>

        <van-tabbar-item to="/home/list">
          <template #icon>
            <span class="house house-sousuo"></span>
            <span class="text">搜索</span>
          </template>
        </van-tabbar-item>

        <van-tabbar-item to="/home/news">
          <template #icon>
            <span class="house house-zixun"></span>
            <span class="text">资讯</span>
          </template>
        </van-tabbar-item>

        <van-tabbar-item to="/home/profile">
          <template #icon>
            <span class="house house-wode"></span>
            <span class="text">我的</span>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ''
    }
  }
}
</script>
<style scoped lang="less">
.footer {
  margin-top: 150px;
}
:deep(.van-tabbar-item__icon) {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  height: 100%;
  text-align: center;
  .house {
    font-size: 0.53333rem;
  }
  .text {
    font-size: 0.32rem;
  }
}
</style>
