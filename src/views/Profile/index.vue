<template>
  <div>
    <div class="My_title">
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
            <van-button type="primary" >去登录</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="My_list">
      <van-grid :column-num="3" :border="false">
        <van-grid-item class="house house-shoucang My_list_icon" text="我的收藏" />
        <van-grid-item class="house house-home My_list_icon" text="我的出租" />
        <van-grid-item class="house house-shizhong1 My_list_icon" text="看房记录" />
        <van-grid-item class="house house-xinyongka My_list_icon" text="成为房猪" />
        <van-grid-item class="house house-jurassic_user My_list_icon" text="个人资料" />
        <van-grid-item class="house house-kefu My_list_icon" text="联系我们" />
      </van-grid>
    </div>
    <div class="My_ad">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
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
.house {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.346667rem;
  /* color: #333; */
}
.My_list_icon:before {
  position: relative;
  top: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.5333rem;
  align-items: center;
}
.van-grid-item__text {
  font-size: 0.346667rem;
  color: #333;
}
.My_ad {
  text-align: center;
  margin-top: 0.266667rem;
}
.My_ad img {
  width: 92%;
}
</style>
