import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
    const state={
        subName: '首',
        itemName: '页',
        showConnect:false,
        token:'',
        userInfo:{},
        isLogin:0,
        userName:'未知用户',
        avatar:require('../assets/images/u@2x.png'),
        userId:0,
        readBookId:0,
        chapterId:0,
        bookRack:[],
        sex:0,
        vipGrade:0,
        fans:0,
        follow:0
    }
    const mutations = {
        changeMenuName (state, name) {
            state.subName=name.subName
            state.itemName=name.itemName
        },
        changeConnect(state){
            state.showConnect=true
        },
        checkToken(state,token){
            state.token=token;
        },
        setvipGrade(state, vipGrade){
            state.vipGrade = vipGrade
        },
        setUserName(state,Nickname){
             state.userInfo.Nickname=Nick           
        },
        setUserPhone(state,phone){
            state.phone=phone;
        },
        setUserCode(state,code){
            state.code=code;
        } ,
        changeLogin(state, status) {
            state.isLogin = status;
        },
        changeName(state,name){
            state.userName=name
        },
        setUserId(state,userId){
             state.userId=userId
        },
        changeAvatar(state,avatar){
            state.avatar=avatar    
        },
        setSex(state,sex){
             state.sex=sex   
        },
        setFans(state,fans){
            state.fans=fans
        },
        setBookRack(state,bookRack){
            state.bookRack=bookRack
        },
        setReadBookId(state,readBookId){
            state.readBookId=readBookId
        },
        setChapterId(state,chapterId){
            state.chapterId=chapterId
        }
    }
    const actions = {
        loginAction({commit},status){
            commit('changeLogin',status)
        },
        updateName({commit},name){
            commit('changeName',name)
        },
        updateAvatar({commit},avatar){
            commit('changeAvatar',avatar)
        },
        getSex({commit},sex){
            commit('setSex',sex)
        },
        getvipGrade({ commit }, vipGrade){
            commit('setvipGrade',vipGrade)
        },
        updateUserId({commit},userId){
            commit('setUserId',userId)
        },
        setFans(){
            commit('setFans',fans)
        },
        getBookRack({commit,state},bookReck){
            commit('setBookRack',bookReck)
        },
        setReadBookId({commit},readBookId){
           commit('setReadBookId',readBookId)
        },
        setChapterId({commit},chapterId){
            commit('setChapterId',chapterId)
        }
    }
export default new Vuex.Store({
    state,
    actions,
    mutations,
    plugins: [createPersistedState()]
})
