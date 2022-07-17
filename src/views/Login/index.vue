<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="账号登录"
      class="navbar"
      left-arrow
      @click-left="backTopPage"
    >
    </van-nav-bar>

    <van-form class="form">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入帐号"
        :rules="usernameRules"
      >
      </van-field>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="passwordRules"
      >
      </van-field>

      <!-- 登录按钮 -->
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" @click="login"
          >登录</van-button
        >
      </div>
      <div class="more">
        <a href="#/user/registered">还没有账号,去注册~</a>
      </div>
    </van-form>
  </div>
</template>

<script>
// 引入api
import { login } from '@/api/user'
import { usernameRules, passwordRules } from './rules'
// form表单域里 在任意的button点击都可以触发submit
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameRules,
      passwordRules
    }
  },
  methods: {
    // 返回来之前的页面
    backTopPage() {
      this.$router.back()
    },
    // 登录
    async login() {
      this.$toast.loading({
        message: '加载中..',
        // loading
        forbidClick: true
      })
      try {
        const res = await login(this.username, this.password)
        this.$store.commit('setUser', res.data.body)
        console.log(res)
        this.$toast({
          message: '登录成功',
          icon: 'passed'
        })
        // console.log(res)
        this.$router.push('/home/profile')
      } catch (err) {
        if (this.username.trim() === '' || this.password.trim() === '') {
          this.$toast('用户名和密码不能为空')
        } else {
          this.$toast(err.message)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
body {
  padding: 0 0.4rem;
}
.navbar {
  height: 1.2rem;
  background-color: #21b97a;
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
.form {
  .code-btn {
    width: 2.02667rem;
    height: 0.61333rem;
    background: #ededed;
    border: none;
    border-radius: 0.30667rem;
    padding: 0;
    font-size: 0.29333rem;
    color: #666;
  }
  .van-button--info {
    width: 9.25333rem;
    height: 100px;
    background-color: #1cb676;
    border: 1px solid #1cb676;
    border: none;
    border-radius: 0.13333rem;
  }
  .more {
    text-align: center;
    a {
      color: #666;
      font-size: 0.32rem;
    }
  }
  .van-cell {
    height: 1.6rem;
    font-size: 0.45333rem;
  }
}
</style>
