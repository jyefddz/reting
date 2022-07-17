<template>
  <div>
    <div>
      <van-nav-bar
        title="收藏列表"
        class="favorate_navbar"
        left-arrow
        @click-left="ReturnMy"
      />
    </div>
    <div>
      <ul>
        <li>
          <div class="favorate-list" @click="seeCollect">
            <div class="house_img">
              <img
                class="house_img_"
                src="http://liufusong.top:8080/uploads/upload_ec38344a2b907e5fd33fdd48d7faaf07.gif"
                alt=""
              />
            </div>
            <div class="houst_msg">
              <h3 class="house_msg_title">{{ MyFavorate[0].title }}</h3>
              <div class="house_msg_desc">{{ MyFavorate[0].desc }}</div>
              <div>
                <van-tag color="#e1f5f8" text-color="#39becd">{{
                  MyFavorate[0].tags[0]
                }}</van-tag>
              </div>
              <div class="house_msg_price">
                <span>{{ MyFavorate[0].price }}</span>
                元/月
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="favorate-list">
            <div class="house_img">
              <img
                class="house_img_"
                src="http://liufusong.top:8080/uploads/upload_2ea57ac079baaf77debaa1090aaa6555.jpg"
                alt=""
              />
            </div>
            <div class="houst_msg">
              <h3 class="house_msg_title">{{ MyFavorate[1].title }}</h3>
              <div class="house_msg_desc">{{ MyFavorate[1].desc }}</div>
              <div>
                <van-tag color="#e1f5f8" text-color="#39becd">{{
                  MyFavorate[1].tags[0]
                }}</van-tag>
              </div>
              <div class="house_msg_price">
                <span>{{ MyFavorate[1].price }}</span>
                元/月
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="favorate-list">
            <div class="house_img">
              <img
                class="house_img_"
                src="http://liufusong.top:8080/uploads/upload_7709164c2c67af109182949143336914.jpeg"
                alt=""
              />
            </div>
            <div class="houst_msg">
              <h3 class="house_msg_title">{{ MyFavorate[2].title }}</h3>
              <div class="house_msg_desc">{{ MyFavorate[2].desc }}</div>
              <div>
                <van-tag color="#e1f5f8" text-color="#39becd">{{
                  MyFavorate[2].tags[0]
                }}</van-tag>
              </div>
              <div class="house_msg_price">
                <span>{{ MyFavorate[2].price }}</span>
                元/月
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getUserCollect, isCollect } from '@/api'
export default {
  data() {
    return {
      MyFavorate: {}
    }
  },
  methods: {
    ReturnMy() {
      this.$router.push('/home/profile')
    },
    async getUserCollect() {
      const {
        data: { body }
      } = await getUserCollect()
      this.MyFavorate = body
      console.log(body)
    },
    async seeCollect() {
      await isCollect(this.MyFavorate.houseCode)
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
.favorate-list {
  height: 240px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 10px;
  border-bottom: 2px solid #e5e5e5;
  .house_img {
    float: left;
    width: 212px;
    height: 160px;
    .house_img_ {
      width: 212px;
      height: 160px;
    }
  }
  .houst_msg {
    overflow: hidden;
    line-height: 44px;
    padding-left: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    .house_msg_title {
      margin: 0;
      font-size: 30px;
      color: #394043;
    }
    .house_msg_desc {
      font-size: 24px;
      color: #afb2b3;
    }
    :deep(.house_msg_price) {
      font-size: 24px;
      color: #fa5741;
      :deep(span) {
        font-size: 38px;
      }
    }
  }
}
</style>
