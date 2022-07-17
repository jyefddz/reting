<template>
  <div>
    <div>
      <van-nav-bar
        title="先烈中路81号大院"
        class="favorate_navbar"
        left-arrow
        @click-left="ReturnCollect"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ReturnCollect() {
      this.$router.push('/favorate')
    }
  }
}
</script>

<style></style>
