<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item
        replace
        to="/home"
        class="house house-shouye-weixuanzhong"
        size="0.42rem"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/search" class="house house-sousuo"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/search" class="house house-zixun"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/search" class="house house-wode"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>
<style>
.van-tabbar-item {
  font-size: 0.42rem;
  color: #646566;
}
</style>
