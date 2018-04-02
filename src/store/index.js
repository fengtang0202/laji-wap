import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
    const state={
        subName: '首',
        itemName: '页',
        homeIndex:0,
        showConnect:false,
        token:'',
        userInfo:null,
        isLogin:false,
        readBookId:0,
        chapterId:0,
        bookRack:[],
        readCommentInfo:{},
        fans:0,
        fllows:0
    }
    const mutations = {
        changeMenuName (state, name) {
            state.subName=name.subName
            state.itemName=name.itemName
        },
        getUserInfo(state,userInfo){
             state.userInfo=userInfo
        },
        changeIndex(state,index){
            state.homeIndex=index
        },
        changeConnect(state){
            state.showConnect=true
        },
        checkToken(state,token){
            state.token=token;
        },
        setUserCode(state,code){
            state.code=code;
        } ,
        changeLogin(state, status) {
            state.isLogin = status;
        },
        setFans(state,fans){
            state.fans=fans
        },
        setFllows(state,fllows){
            state.fllows=fllows
        },
        setBookRack(state,bookRack){
            state.bookRack=bookRack
        },
        setReadBookId(state,readBookId){
            state.readBookId=readBookId
        },
        setChapterId(state,chapterId){
            state.chapterId=chapterId
        },
        setReadCommentInfo(state,readCommentInfo){
            state.readCommentInfo=readCommentInfo
        }
    }
    const actions = {
        loginAction({commit},status){
            commit('changeLogin',status)
        },
        changeIndex({commit},index){
            commit('changeIndex',index)    
        },
        setFans({commit},fans){
            commit('setFans',fans)
        },
        setFllows({commit},fllows){
            commit('setFllows',fllows)
        },
        getBookRack({commit,state},bookReck){
            commit('setBookRack',bookReck)
        },
        setReadBookId({commit},readBookId){
           commit('setReadBookId',readBookId)
        },
        setChapterId({commit},chapterId){
            commit('setChapterId',chapterId)
        },
        setReadCommentInfo({commit},readCommentInfo){
            commit('setReadCommentInfo',readCommentInfo)
        },
        getUserInfo({commit,state},userInfo){
            commit('getUserInfo',userInfo)
        }
        
    }
export default new Vuex.Store({
    state,
    actions,
    mutations,
    plugins: [createPersistedState()]
})
