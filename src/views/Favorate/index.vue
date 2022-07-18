<template>
  <div>
    <div>
      <van-nav-bar
        title="收藏列表"
        class="favorate_navbar"
        left-arrow
        @click-left="backTopPage"
      />
    </div>
    <!-- <div>
      <ul>
        <li>
          <div
            class="favorate-list"
            v-for="item in MyFavorate"
            :key="item.houseCode"
          >
            <div class="house_img">
              <img
                class="house_img_"
                :src="`http://liufusong.top:8080${item.houseImg}`"
                alt=""
              />
            </div>
            <div class="houst_msg">
              <h3 class="house_msg_title">{{ item.title }}</h3>
              <div class="house_msg_desc">{{ item.desc }}</div>
              <div>
                <van-tag color="#e1f5f8" text-color="#39becd">{{
                  item.tags[0]
                }}</van-tag>
              </div>
              <div class="house_msg_price">
                <span>{{ item.price }}</span>
                元/月
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div> -->
    <FavorateList
      v-for="item in MyFavorate"
      :key="item.houseCode"
      :favorateInfo="item"
    ></FavorateList>
  </div>
</template>

<script>
import { getUserCollect } from '@/api'
import FavorateList from './component/FavorateList.vue'
export default {
  components: {
    FavorateList
  },
  data() {
    return {
      MyFavorate: {}
    }
  },
  methods: {
    backTopPage() {
      this.$router.back()
    },
    async getUserCollect() {
      const {
        data: { body }
      } = await getUserCollect()
      this.MyFavorate = body
      console.log(body)
    }
  },
  created() {
    this.getUserCollect()
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
// .favorate-list {
//   height: 240px;
//   position: relative;
//   box-sizing: border-box;
//   justify-content: space-around;
//   padding-top: 10px;
//   border-bottom: 2px solid #e5e5e5;
//   .house_img {
//     float: left;
//     width: 212px;
//     height: 160px;
//     .house_img_ {
//       width: 212px;
//       height: 160px;
//     }
//   }
//   .houst_msg {
//     overflow: hidden;
//     line-height: 44px;
//     padding-left: 24px;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     vertical-align: middle;
//     .house_msg_title {
//       margin: 0;
//       font-size: 30px;
//       color: #394043;
//     }
//     .house_msg_desc {
//       font-size: 24px;
//       color: #afb2b3;
//     }
//     :deep(.house_msg_price) {
//       font-size: 24px;
//       color: #fa5741;
//       :deep(span) {
//         font-size: 38px;
//       }
//     }
//   }
// }
</style>
