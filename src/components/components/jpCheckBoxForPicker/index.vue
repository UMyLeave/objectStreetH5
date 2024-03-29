<!--
@name:'下拉框多选组件'
@description:
@author:FuYiHao
@time:2024-16-29 16:44:44
-->
<template>
  <div class="jp-select">
    <van-field v-model="selectLabel" v-bind="$attrs" @click="showPicker = true"/>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-checkbox-group v-model="checked">
        <van-cell-group inset>
          <van-cell
              v-for="(item, index) in list"
              clickable
              :key="item"
              :title="`复选框 ${item}`"
              @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox
                  :name="item"
                  :ref="el => checkboxRefs[index] = el"
                  @click.stop
              />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
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