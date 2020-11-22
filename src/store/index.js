import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        lists:'haha'
    },
    getters:{

    },
    mutations:{
        fn(state,payload){
            state.lists=payload.name
        }
    },
    actions:{

    },
    modules:{

    }
})

export default store