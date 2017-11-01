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
        fetchJsonp('https://api.douban.com/v2/movie/in_theaters', {
            jsonpCallback: 'callback',
            jsonpCallbackFunction:'gao'
        }).then( response => {
            return response.json();
        } ).then( data => {
            context.commit(types.GET_HOT_BROADCAST, data.subjects)
        } )
        // context.commit(types.GET_HOT_BROADCAST,payload);
    }
}