<script setup>
import {defineProps} from "vue";

let props = defineProps({
  form:{type:Array},
  dataForm:{type:Object},
})

const arrFormat = (item,text)=> {
  console.log('log:',  item.map(i=>i[text]).join('，'), '==> item.map(i=>i[text]).join')
  return item.map(i => i[text]).join('，')
}


</script>

<template>
    <van-cell-group>
      <van-cell v-for="obj in form" :key="obj.name" >
        <template #title style="text-align: left">
          <span>{{dataForm[obj.title]||obj.label}}</span>
        </template>
        <template #value>
          <span v-if="obj.type===Array">{{dataForm[obj.name]?arrFormat(dataForm[obj.name],obj.showText):'/'}}</span>
          <span v-else>{{obj.format&&obj.format(dataForm[obj.name])|| (dataForm[obj.name.split('.')[0]]?.constructor===Object?dataForm[obj.name.split('.')[0]][obj.name.split('.')[1]]:dataForm[obj.name])||'/'}}</span>
        </template>
      </van-cell>
    </van-cell-group>
</template>


<style scoped lang="less">
/deep/ .van-cell__title{
  text-align: left;
}
</style>
