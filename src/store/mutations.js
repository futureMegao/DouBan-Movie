// 公共的 mustaions

import * as types from './types'
export default {
    [types.GET_HOT_BROADCAST](state,payload){
        console.log(payload)
        state.root.hotBroadcast.push(payload)
    }
}