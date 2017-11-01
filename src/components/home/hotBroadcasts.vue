<template>
    <div>
        <h2 class="hot-Broadcast-header">影院热映</h2>
        <div class="hot-Broadcast-swipe">
            <!--<div class="red" v-for="hotBroadcast in hotBroadcast[0]">{{hotBroadcast.title}}</div>-->
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="hotBroadcast in hotBroadcast[0]"><div class="red">{{hotBroadcast.title}}</div></mt-swipe-item>
                <!--<mt-swipe-item><div class="blue">我是2</div></mt-swipe-item>-->
                <!--<mt-swipe-item><div class="yellow">我是3</div></mt-swipe-item>-->
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
            })
        },
    }
</script>


<style>
    body {
        margin:0;
    }
    .hot-Broadcast-header {
        text-indent:15px;
        color:red;
        font-size:45px;
        line-height:36px;
        padding-bottom:20px;
        border-bottom:1px solid #000;
    }
    .red {
        height:50px;
        background-color:red;
    }
    .hot-Broadcast-swipe {
        height:100px;
    }
</style>