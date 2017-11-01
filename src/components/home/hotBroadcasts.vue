<template>
    <div>
        <div class="hot-Broadcast-header">
            <h2 class="hot-Broadcast-header-left">影院热映</h2>
            <div class="hot-Broadcast-header-right">更多</div>
        </div>
        <div class="hot-Broadcast-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="hotBroadcast in hotBroadcast[0]">
                    <div style="height:100px">
                        <a :href="hotBroadcast.alt">
                            <!--<img :src="hotBroadcast.images.small"/>-->
                            <span>{{hotBroadcast.title}}</span>
                        </a>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'hotBroadcasts',
        data () {
            return {
                a:''
            }
        },
        computed:{
            ...mapState({
                hotBroadcast : state => state.root.hotBroadcast
            })
        },
        beforeMount(){
            //只拿数据的前四条来渲染轮播图
             this.a=this.hotBroadcast[0];
        }
    }
</script>


<style>
    body {
        margin:0;
    }
    .hot-Broadcast-header {
        position:relative;
    }
    .hot-Broadcast-header-right {
        position:absolute;
        right:20px;
        top:0;
        font-size:32px;
        line-height:45px;
        color:green;
    }
    .hot-Broadcast-header-left {
        text-indent:15px;
        color:#000;
        font-size:42px;
        line-height:36px;
        padding-bottom:20px;
    }
    .red {
        height:50px;
        background-color:red;
    }
    .hot-Broadcast-swipe {
        height:100px;
    }
</style>