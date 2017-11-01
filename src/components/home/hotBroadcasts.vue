<template>
    <div>
        <div class="hot-Broadcast-header">
            <h2 class="hot-Broadcast-header-left">影院热映</h2>
            <div class="hot-Broadcast-header-right">更多</div>
        </div>
        <div class="hot-Broadcast-swipe">
            <mt-swipe :auto="5000" style="height:220px;">
                <span>豆瓣的原因，图片获取不到，只有数据</span>
                <mt-swipe-item v-for="hotBroadcast in a">
                    <div>
                        <a :href="hotBroadcast.alt">
                            <img src="../../img/A0.jpg" alt="">
                            <div style="text-align:center">
                                <span>{{hotBroadcast.title}}<em style="color:red">({{hotBroadcast.rating.average}})</em></span>
                            </div>
                        </a>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="hot-Broadcast-header">
        <h2 class="hot-Broadcast-header-left">新片速递</h2>
        <div class="hot-Broadcast-header-right">更多</div>
    </div>
        <div class="hot-Broadcast-swipe">
            <mt-swipe :auto="3000" style="height:220px;">
                <span>豆瓣的原因，图片获取不到，只有数据</span>
                <mt-swipe-item v-for="hotBroadcast in b">
                    <div>
                        <a :href="hotBroadcast.alt">
                            <img src="../../img/0.jpg" alt="">
                            <div style="text-align:center">
                                <span>{{hotBroadcast.title}}<em style="color:red">({{hotBroadcast.rating.average}})</em></span>
                            </div>
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

            }
        },
        computed:{
            ...mapState({
                hotBroadcast : state => state.root.hotBroadcast
            }),
            a(){
                if(this.hotBroadcast!=''){
                    return this.hotBroadcast[0].slice(0,4);
                }
            },
            b(){
                if(this.hotBroadcast!=''){
                    return this.hotBroadcast[0].slice(4,8);
                }
            }
        },
        created(){
            //只拿数据的前四条来渲染轮播图
             this.a=this.hotBroadcast[0].slice(0,4);
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
    .hot-Broadcast-swipe img {
        width:100%;
        height:330px;
    }
    .hot-Broadcast-swipe a {
        font-size:35px;
        text-decoration:none;
        color:#000;
    }
</style>