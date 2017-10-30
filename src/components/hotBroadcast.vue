<template>
  <div class="hello">
    <div style="height:20px;">
      <mt-header fixed title="豆瓣视频"></mt-header>
    </div>
    <div>
      <router-view/>
    </div>
    <div class="foot-nav">

      <mt-button type="default" @click="search">搜索</mt-button>
      <mt-button type="primary">热播</mt-button>
      <mt-button type="danger" size="large">danger</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotBroadcast',
  data () {
    return {
        selected:10
    }
  },
  methods:{
      search(){
          this.$router.push({path:'/search'})
      }
  }
}
</script>
<style>
  .foot-nav {
    position:fixed;
    bottom:20px;
    left:10px;
  }
  .foot-nav-text {
    width:20%;
    padding:0 2.5%;
    float:left;
  }
</style>
