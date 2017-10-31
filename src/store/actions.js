// 公共 action
import * as types from './types'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
// import vueCookie from 'vue-cookie'
export default {
    getHotBroadcast:function(context,payload){
        // axios.get('/user?ID=12345')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // console.log(context,payload)
        // fetchJsonp('https://api.douban.com/v2/movie/in_theaters/search?q=' + payload.keyword, {
        //     jsonpCallback: 'callback',
        //     jsonpCallbackFunction:'gao'
        // }).then( response => {
        //     return response.json();
        // } ).then( data => {
        //     context.commit(types.GET_HOT_BROADCAST, data)
        // } )
        context.commit(types.GET_HOT_BROADCAST,payload);
    }
}