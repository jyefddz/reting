<template>
  <div>
    <!-- 登录 -->
    <div v-if="isLogin" class="My_title">
      <img
        class="My_bg"
        src="http://liufusong.top:8080/img/avatar.png"
        alt=""
      />
      <div class="My_info">
        <div class="My_myIcon">
          <img
            class="My_avatar"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="My_user">
          <div class="My_name">{{userInfo.nickname}}</div>
          <div class="My_auth">
            <span @click="logOut">退出</span>
          </div>
          <div class="My_edit">
            编辑个人资料
            <span class="my_arrow">
              <van-icon name="play" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 为登录 -->
    <div v-else class="My_title">
      <div>
        <img
          class="My_bg"
          src="http://liufusong.top:8080/img/profile/bg.png"
          alt="背景图"
        />
        <div class="My_info">
          <div class="My_myIcon">
            <img
              class="My_avatar"
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt="icon"
            />
          </div>
          <div class="My_user">
            <div class="My_name">游客</div>
            <div class="My_edit">
              <van-button type="primary" @click="goLogin">去登录</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <van-grid :column-num="3" :border="false" clickable class="grid">
        <van-grid-item text="我的收藏" @click="MyCollect">
          <template #icon>
            <span class="house house-shoucang"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的出租">
          <template #icon>
            <span class="house house-home"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="看房记录">
          <template #icon>
            <span class="house house-shizhong1"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="成为房猪">
          <template #icon>
            <span class="house house-xinyongka"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="个人资料">
          <template #icon>
            <span class="house house-jurassic_user"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="联系我们">
          <template #icon>
            <span class="house house-kefu"></span>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="My_ad">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  computed: {
    isLogin() {
      return !!this.$store.state.user.token
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    // 退出登录
    logOut() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确认退出?'
        })
        .then(() => {
          // 点击确认
          this.$store.commit('setUser', {})
        })
        .catch(() => {})
    },
    goLogin() {
      this.$router.push('/login')
    },
    async getUserInfo() {
      if (this.isLogin) {
        // 如果用户登录,拿到用户信息
        try {
          const {
            data: { body }
          } = await getUserInfo()
          this.userInfo = body
          // console.log(body)
        } catch (err) {
          this.$toast.fail('请重新登录')
        }
      }
    },
    MyCollect() {
      this.$router.push('/favorate')
    }
  }
}
</script>

<style scoped lang="less">
.My_title {
  min-height: 8rem;
  position: relative;
}
.My_bg {
  width: 100%;
}

.My_info {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.26667rem 0.08rem #ddd;
  margin: 1.3333rem auto 0;
  padding: 0 0.5333rem;
  text-align: center;
  font-size: 0.34667rem;
  .My_auth {
    display: block;
    span {
      border-radius: 60px;
      color: #fff;
      padding: 4px 30px;
      background: #21b97a;
      font-size: 24px;
    }
  }
  .My_edit {
    color: #999;
    font-size: 24px;
    margin-top: 40px;
    .My_arrow {
      margin-left: 6px;
      .icon-arrow {
        font-size: 12px;
        vertical-align: middle;
      }
    }
  }
}
.My_myIcon {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 1.8667rem;
  height: 1.8667rem;
  border: 0.13333rem solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 0.05333rem 0.05333rem #bdbdbd;
}
.My_avatar {
  width: 100%;
  border-radius: 50%;
}
.My_user {
  padding-top: 0.4rem;
}
.My_name {
  margin-top: -0.8rem;
  margin-bottom: 0.26667rem;
}
.van-button--primary {
  font-size: 0.346667rem;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.4rem;
}
.van-grid {
  height: 5.06667rem;
}
.My_list {
  height: 5.06667rem;
}
.grid {
  color: #333;
  .van-grid-item__text {
    font-size: 0.346667rem;
  }
  .house {
    display: block;
    font-size: 40px;
    margin-bottom: 20px;
  }
}
.My_ad {
  text-align: center;
  margin-top: 0.266667rem;
}
.My_ad img {
  width: 92%;
}
</style>
