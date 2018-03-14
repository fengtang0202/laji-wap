<template>

  <div>
      <group title="个人中心">
          <cell is-link>
              <span slot="title" style="color:green;"><span style="vertical-align:middle;">{{ message}}</span> <badge text="1"></badge></span>
          </cell>
          <cell title="1" :link="{path:'/home'}">
              <!--<img :src="" slot="icon" alt="">-->
          </cell>
          <cell title="2" :link="{path:'/home'}">

          </cell>
      </group>
  </div>
</template>

<script>
    import {Group,Cell} from 'vux'
    export default {
        name: "person",
        components:{
          Group,Cell
        },
        data(){
            return {
                message:'消息',
                transitionName:'slid-left'
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
