<!--
@name:'switch切换组件'
@description:
@author:FuYiHao
@time:2024-16-29 16:44:44
-->
<template>
  <div class="jp-switch">
    <van-field v-bind="$attrs">
      <template #input>
        <van-switch v-model="model" @change="change"/>
      </template>
    </van-field>
  </div>
</template>

<script setup>

const model = defineModel({ required: true ,default: false})


const change = (value) => {
  model.value = value
};

</script>

<style scoped lang="less">
.jp-switch {

}
</style>