<!--
@name:'下拉选项框'
@description:
@author:FuYiHao
@time:2024-16-29 16:44:44
-->
<template>
  <div class="jp-select">
    <van-field v-model="selectLabel" v-bind="$attrs" @click="showPicker = true"/>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
          :columns="options"
          :columns-field-names="columnsFields"
          @cancel="showPicker = false"
          @confirm="onConfirm"
          v-model="selectValues"
      />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, watch} from "vue";

const selectLabel = ref('');
const showPicker = ref(false);
const selectValues = ref([]);
const columnsFields = ref({ text: 'name', value: 'value', children: 'children' });

const model = defineModel({ required: true ,default: ''})
const props = defineProps({
  options: {
    type: Array,
    default: () => {
      return []
    }
  },
})

watch(() => model.value, (newVal) => {
  selectLabel.value = props.options.find(i => i.value === newVal)?.name || ''
  selectValues.value = [props.options.find(i => i.value === newVal)?.value] || []
})

const onConfirm = ({selectedOptions}) => {
  selectLabel.value = selectedOptions[0].name;
  model.value = selectedOptions[0].value
  showPicker.value = false;
};

</script>

<style scoped lang="less">
.jp-select {

}
</style>