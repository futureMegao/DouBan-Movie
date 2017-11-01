<template>
  <div class="hello">
    <div style="height:50px;">
      <mt-header fixed title="豆瓣视频" style="height:50px;font-size:30px;"></mt-header>
    </div>
    <div>
      <router-view/>
    </div>
    <div class="foot-nav">

      <mt-button type="default" @click="hotBroadcasts" style="width:80px">热播</mt-button>
      <mt-button type="primary" @click="search" style="width:80px">搜索</mt-button>
      <mt-button type="danger" @click="myHome" style="width:80px">我的</mt-button>
    </div>
  </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
export default {
  name: 'hotBroadcast',
  data () {
    return {
        selected:10
    }
  },
  computed:{
      ...mapState({
          hotBroadcast : state => state.root.hotBroadcast
      })
  },
  methods:{
      ...mapActions({
          getHotBroadcast : 'getHotBroadcast'
      }),
      search(){
          this.$router.push({path:'/search'});

      },
      myHome(){
          this.$router.push({path:'/myHome'})
      },
      hotBroadcasts(){
          this.$router.push({path:'/hotBroadcasts'})
      }
  },
  created(){
      this.getHotBroadcast();
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
