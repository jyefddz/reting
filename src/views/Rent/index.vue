<template>
  <div>
    <div>
      <van-nav-bar
        title="我的出租"
        class="favorate_navbar"
        left-arrow
        @click-left="backTopPage"
      />
    </div>
    <van-list>
      <RentList
        v-for="item in MyRent"
        :key="item.houseCode"
        :rentInfo="item"
      ></RentList>
    </van-list>
  </div>
</template>

<script>
import { getUserRent } from '@/api'
import RentList from './component/RentList.vue'
export default {
  components: {
    RentList
  },
  data() {
    return {
      MyRent: {}
    }
  },
  methods: {
    backTopPage() {
      this.$router.back()
    },
    async getUserRent() {
      const {
        data: { body }
      } = await getUserRent()
      this.MyRent = body
      console.log(body)
    }
  },
  created() {
    this.getUserRent()
  }
}
</script>

<style scoped lang="less">
.favorate_navbar {
  background-color: #21b97a;
  height: 1.2rem;
  color: #fff;
  margin-bottom: 0.56rem;
  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 0.48rem;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}
</style>
