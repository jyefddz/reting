<template>
  <div class="AllMyFavorates">
    <div>
      <van-nav-bar
        :title="house.community"
        class="seeFavorate_navbar"
        left-arrow
        @click-left="ReturnCollect"
      />
    </div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :loop="false"
    >
      <van-swipe-item v-for="(item, index) in house.houseImg" :key="index">
        <template #default>
          <img :src="`http://liufusong.top:8080${item}`" />
        </template>
      </van-swipe-item>
    </van-swipe>
    <div class="my_house_message">
      <van-cell>
        <template #title>
          <h3>{{ house.title }}</h3>
          <van-tag color="#e1f5f8" text-color="#39becd">{{
            house.tags[0]
          }}</van-tag>
        </template>
      </van-cell>
      <van-cell class="cell2">
        <template #title>
          <van-grid :column-num="3" :border="false">
            <van-grid-item>
              <template #default>
                <h4>{{ house.price }}/月</h4>
                <span>租金</span>
              </template>
            </van-grid-item>
            <van-grid-item>
              <template #default>
                <h4>{{ house.roomType }}</h4>
                <span>房型</span>
              </template>
            </van-grid-item>
            <van-grid-item>
              <template #default>
                <h4>{{ house.size }}平方米</h4>
                <span>面积</span>
              </template>
            </van-grid-item>
          </van-grid>
        </template>
      </van-cell>
      <van-cell class="cell3">
        <template #title>
          <van-grid :column-num="2" :border="false" :center="false">
            <van-grid-item>
              <template #default>
                <div>
                  <span class="span1">装修:</span
                  ><span class="span2">精装</span>
                </div>
                <div>
                  <span class="span1">楼层:</span
                  ><span class="span2">{{ house.floor }}</span>
                </div>
              </template>
            </van-grid-item>
            <van-grid-item>
              <template #default>
                <div>
                  <span class="span1">朝向:</span>
                  <span class="span2">{{ house.oriented[0] }}</span>
                </div>
                <div>
                  <span class="span1">类型:</span
                  ><span class="span2">普通住宅</span>
                </div>
              </template>
            </van-grid-item>
          </van-grid>
        </template>
      </van-cell>
    </div>
    <!-- 房屋信息 -->
    <div class="location">
      <div class="name">
        <p>小区：</p>
        <span>天山星城</span>
      </div>
      <div class="map"><img src="" alt="" /></div>
      <div class="some">
        <p class="some_p">房屋配套</p>
        <div class="root">
          <ul>
            <li v-for="(item, index) in house.supporting" :key="index">
              <span :class="`house ${iconfont(item)}`"></span>
              <p>{{ house.supporting[index] }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 房猪 -->
    <div class="describe">
      <p class="describe_p">房源概况</p>
    </div>
    <!-- 猜你喜欢 -->
    <div class="my_like">
      <p class="my_like_p">猜你喜欢</p>
    </div>
    <!-- 底部导航 -->
    <div class="tabbar">
      <div><span class="house house-shoucang">收藏</span></div>
      <div class="tabbar_middle">在线咨询</div>
      <div class="tabbar_bottom">电话预约</div>
    </div>
  </div>
</template>

<script>
import { getHouse } from '@/api'
export default {
  data() {
    return {
      house: {}
    }
  },
  created() {
    this.getHouse()
    console.log(this.$route)
  },
  methods: {
    ReturnCollect() {
      this.$router.push('/favorate')
    },
    async getHouse() {
      try {
        const res = await getHouse(this.$route.query.id)
        this.house = res.data.body
        console.log(this.house)
      } catch (error) {
        this.$toast.fail('请重新获取房屋信息')
        console.log(error)
      }
    },
    iconfont(item) {
      switch (item) {
        case '衣柜':
          return 'house-yigui'
        case '洗衣机':
          return 'house-xiyiji'
        case '空调':
          return 'house-kongtiao'
        case '沙发':
          return 'house-shafa'
        case '暖气':
          return 'house-shuinuanqigongcheng'
        case '天然气':
          return 'house-meiqitianranqi'
        case '电视':
          return 'house-dianshi'
        case '热水器':
          return 'house-yinshuiji-'
        case '冰箱':
          return 'house-bingxiang'
        case '宽带':
          return 'house-kuandai'
      }
    }
  }
}
</script>

<style scoped lang="less">
.AllMyFavorates {
  background-color: #eee;
}
.seeFavorate_navbar {
  background-color: #21b97a;
  height: 1.2rem;
  color: #fff;
  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 0.48rem;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}
.van-swipe-item {
  img {
    width: 100%;
    height: 424px;
    vertical-align: top;
  }
}
.my_house_message {
  margin: 40px 0;
  .van-cell__title {
    h3 {
      font-weight: normal;
      font-size: 32px;
      color: #333;
    }
  }
  .cell2 {
    padding: 0;
    h4 {
      color: red;
      font-size: 30px;
      font-weight: bolder;
    }
    span {
      font-size: 26px;
      color: #999;
    }
  }
  .cell3 {
    padding: 0;
    .span1 {
      font-size: 26px;
      color: #999;
    }
    .span2 {
      margin-left: 24px;
      font-size: 26px;
      color: #333;
    }
  }
}
.location {
  .name {
    width: 100%;
    height: 88px;
    margin-top: 20px;
    padding: 0 20px;
    line-height: 88px;
    color: #666;
    background-color: #fff;
    font-size: 28px;
    p {
      display: inline;
    }
    span {
      color: #000;
    }
  }
  .map {
    background-color: #fff;
    width: 100%;
    height: 290px;
  }
  .some {
    background-color: #fff;
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 20px;
    padding: 30px 20px;
    .some_p {
      padding-bottom: 20px;
      border-bottom: 2px solid #cecece;
    }
  }
  .root {
    background-color: #fff;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 20%;
        height: 104px;
        margin: 20px 0;
        padding-top: 16px;
        text-align: center;
        color: #333333;
        font-style: 46px;
        font-weight: normal;
        .house {
          font-size: 46px;
        }
        p {
          height: 56px;
          line-height: 56px;
        }
      }
    }
  }
}
.describe {
  margin: 20px 0;
  padding: 20px;
  line-height: 150%;
  background: #fff;
  font-size: 30px;
  .describe_p {
    padding-bottom: 20px;
    border-bottom: 1px solid #cecece;
    font-weight: 900;
  }
}
.my_like {
  margin-bottom: 70px;
  padding: 20px;
  line-height: 150%;
  background: #fff;
  font-size: 30px;
  .my_like_p {
    padding-bottom: 20px;
    border-bottom: 1px solid #cecece;
    font-weight: 900;
  }
}
.tabbar {
  display: flex;
  border-top: 1px solid #cecece;
  position: fixed;
  height: 100px;
  width: 100%;
  bottom: 0;
  line-height: 100px;
  left: 0;
  background-color: #fff;
  font-size: 34px;
  color: #999;
  div {
    flex: 1;
    text-align: center;
  }
  .tabbar_middle {
    border-left: 2px solid #cecece;
    border-right: 2px solid #cecece;
  }
  .house-shoucang {
    font-size: 36px;
  }
  .tabbar_bottom {
    background-color: #21b97a;
    color: #fff;
  }
}
</style>
