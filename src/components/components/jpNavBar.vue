<script setup>

import {defineProps} from 'vue';


let props = defineProps({  // defineProps定义接受外部传来的参数
  // value: String, // 外部传来的value参数只能是数值
  // defaultValue: '标题',
  // theme: { type: String, default: "orange" }  // 外部传进来theme只能是字符串
  title:{type:String, default: "标题"},
  pageBack:{type:Function, default: ()=>{
  uni.navigateBack()}},
  leftBt:{type:Boolean, default:true},
  rightBt:{type:Boolean, default:false},
  leftBtIcon:{type:String},
  rightBtIcon:{type:String},
  leftBtIconSize:{type:Number, default:18},
  rightBtIconSize:{type:Number, default:18},
  rightBtClick:{type:Function, default:()=>{}}
})

</script>

<template>
<van-nav-bar :left-arrow="leftBt"  :title="title" @click-left="pageBack" @click-right="rightBtClick">
  <template v-if="leftBtIcon" #left>
    <van-icon :name="leftBtIcon" :size="leftBtIconSize"></van-icon>
  </template>
  <template v-if="rightBtIcon" #right>
    <van-icon :name="rightBtIcon" :size="rightBtIconSize"></van-icon>
  </template>
</van-nav-bar>

</template>

<style lang="less" scoped>

</style>
