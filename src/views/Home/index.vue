<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <template #default>
          <img src="http://liufusong.top:8080/img/swiper/1.png" alt="" />
        </template>
      </van-swipe-item>
      <van-swipe-item>
        <template #default>
          <img src="http://liufusong.top:8080/img/swiper/2.png" alt="" />
        </template>
      </van-swipe-item>
      <van-swipe-item>
        <template #default>
          <img src="http://liufusong.top:8080/img/swiper/3.png" alt="" />
        </template>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.van-swipe-item{
    img{
        width: 100%;
        height: 424px;
        vertical-align: top;
    }
}
</style>
