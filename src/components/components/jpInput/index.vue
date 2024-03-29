<!--
@name:'输入框组件'
@description:
@author:FuYiHao
@time:2024-16-29 16:44:44
-->
<template>
  <div class="jp-input">
    <van-field v-model="model" v-bind="$attrs" @update:model-value="handleInput"/>
  </div>
</template>

<script setup>

const model = defineModel({ required: true ,default: ''})


const handleInput = (value) => {
  model.value = value
};

</script>

<style scoped lang="less">
.jp-input {

}
</style>