<template>
  <div>
    <van-cell @click="seeCollect(favorateInfo.houseCode)">
      <van-card
        class="favorate-list"
        :desc="favorateInfo.desc"
        :title="favorateInfo.title"
        :thumb="`http://liufusong.top:8080${favorateInfo.houseImg}`"
      >
        <template #price>
          <div class="favorate_price">
            <span>{{ favorateInfo.price }}</span>
            元/月
          </div>
        </template>
        <template #tags>
          <van-tag color="#e1f5f8" text-color="#39becd">{{
            favorateInfo.tags[0]
          }}</van-tag>
        </template>
      </van-card>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    favorateInfo: {
      type: Object,
      require: true
    }
  },
  methods: {
    seeCollect(id) {
      console.log(id)
      localStorage.setItem('houseCode', id)
      this.$router.push({
        path: '/detail',
        query: { id }
      })
    }
  }
}
</script>

<style scoped lang="less">
.favorate-list {
  background-color: #fff;
  width: 10rem;
  padding: 18px 0;
  border-bottom: 2px solid #eee;
  .van-card__thumb img {
    border-radius: 0;
  }
  .van-card__title {
    margin: 0;
    font-size: 30px;
    color: #394043;
  }
  .van-card__desc {
    font-size: 24px;
    color: #afb2b3;
  }
  :deep(.favorate_price) {
    font-size: 24px;
    color: #fa5741;
    :deep(span) {
      font-size: 38px;
    }
  }
}
</style>
