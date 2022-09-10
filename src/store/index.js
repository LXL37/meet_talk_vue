//用于创建vuex中最为核心的store
import Vuex from "vuex";
import Vue from 'vue'
//引入vuex并且使用
Vue.use(Vuex)
//数据的动作
const actions={

}

//用于数据的加工
const mutations={
    SET_TOKEN:(state,token)=>{
        state.token=token;

        localStorage.setItem("token",token)

    },
    DELETE_TOKEN:()=>{
        localStorage.removeItem("token")
    }
}
//存储数据
const state={
    historyArticleList:[],
    token:'',
}
//暴露并且创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
