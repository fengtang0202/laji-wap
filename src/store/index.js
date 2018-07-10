import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
    const state={
        showConnect:false,
        token:'',
        userInfo:null,
        isLogin:false,
        // bookRack:[],
        // readCommentInfo:{},
        feed:0,
        feedPepper:0,
        minPepper:0,
        fans:0,
        fllows:0,
        rephone:0,
        code:0,
        backgroundColor:'#faefda',
        fontSize: 1.125,
        fontColor: '#685640',
    }
    const mutations = {
        setfeed(state,feed){
            state.feed=feed
        },
        setfeedPepper(state, feedPepper){
            state.feedPepper=feedPepper
        },
        setminPepper(state,minPepper){
            state.minPepper=minPepper
        },
        setBackgroundColor(state,color){
            state.backgroundColor=color
        },
        setFontSize(state, fontSize){
            state.fontSize = fontSize
        },
        setFontColor(state, fontColor) {
            state.fontColor = fontColor
        },
        changeMenuName (state, name) {
            state.subName=name.subName
            state.itemName=name.itemName
        },
         setUserCode(state,code){
            state.code=code;
        },
        setPhone(state,rephone){
            state.rephone=rephone
        },
        getUserInfo(state,userInfo){
             state.userInfo=userInfo
        },
        changeConnect(state){
            state.showConnect=true
        },
        checkToken(state,token){
            state.token=token;
        },
        changeLogin(state, status) {
            state.isLogin = status;
        },
        setFans(state,fans){
            state.fans=fans
        },
        setFllows(state,fllows){
            state.fllows=fllows
        },
        // setBookRack(state,bookRack){
        //     state.bookRack=bookRack
        // },
        setChapterId(state,chapterId){
            state.chapterId=chapterId
        },
        // setReadCommentInfo(state,readCommentInfo){
        //     state.readCommentInfo=readCommentInfo
        // }
    }
    const actions = {
        setfeed({commit},feed){
            commit('setfeed',feed)
        },
        setfeedPepper({commit},feedPepper){
          commit('setfeedPepper',feedPepper)
        },
        setminPepper({commit},minPepper){
          commit('setminPepper',minPepper)
        }, 
        setBackgroundColor({commit},color){
           commit('setBackgroundColor',color)  
        },
        setFontSize({commit},fontSize){
            commit('setFontSize',fontSize)
        },
        setFontColor({ commit }, fontColor) {
            commit('setFontColor', fontColor)
        },
        setPhone({commit},rephone){
           commit('setPhone',rephone)
        },
        setUserCode({commit},code){
           commit('setUserCode',code)
        },
        loginAction({commit},status){
            commit('changeLogin',status)
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
        setChapterId({commit},chapterId){
            commit('setChapterId',chapterId)
        },
        // setReadCommentInfo({commit},readCommentInfo){
        //     commit('setReadCommentInfo',readCommentInfo)
        // },
        getUserInfo({commit},userInfo){
            commit('getUserInfo',userInfo)
        }
        
    }
export default new Vuex.Store({
    state,
    actions,
    mutations,
    plugins: [createPersistedState()]
})
