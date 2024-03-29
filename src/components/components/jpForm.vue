<script setup>
import {defineModel, defineProps, onBeforeMount, ref} from "vue";

const form  =defineModel("form")


let emit = defineEmits(['submit'])

let formData ={}

let currentObj = {}

const showPicker = ref(false)

const showCascader = ref(false)

const pickerOptions = ref({})

const  pickerShow = (item) => {
  pickerOptions.value =item.options
 currentObj = item
  showPicker.value = true
}
const onSubmit =()=>{
  setDate()
  console.log('log:', formData, '==>formData')
  emit('submit', formData)
}

const pickerConfirm=({selectedOptions})=>{

  currentObj.showText= selectedOptions[0].text
  currentObj.value = selectedOptions[0].value
  showPicker.value = false
  if(currentObj.change){
    currentObj.change(selectedOptions[0])
  }
}



const  createDynamicObject=(levels, keys, value)=> {
  function createLevel(level, parent) {
    if (level < levels) {
      const child = {};
      parent[keys[level]] = child;
      createLevel(level + 1, child);
    } else {
      parent[keys[level]] = value;
    }
  }
  const root = {};
  createLevel(0, root);
  return root;
}


const mergeObjects=(target, ...sources)=> {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeObjects(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeObjects(target, ...sources);
}
const isObject=(obj)=> {
  return obj === Object(obj);
}


const setDate = ()=>{
  form.value.forEach(i=>{
    if(i.name.indexOf('.')===-1){
      formData[i.name]= i.value
    }else{
      let arr  = i.name.split('.')
      formData=mergeObjects(formData,createDynamicObject(arr.length-1,arr,i.value))
    }
  })
}

const formSelf = ref({})

onBeforeMount(() => {
  formSelf.value = form.value
})

const changeDate = ()=>{
  emit('update:form', formSelf)
}

const setOptions = (name,options)=>{
  formSelf.value.find(item=>item.name===name).options =options
}

defineExpose({ setOptions });

</script>

<template>
  <van-form @submit="onSubmit" class="page">
    <template v-for="obj in formSelf">
      <van-field v-if="obj.type==='field'"
                 v-model="obj.value"
                 :name="obj.name||''"
                 :label="obj.label||''"
                 :rules="obj.rules||[]"
                 required = "auto"
                 @change="changeDate"
                 :placeholder="obj.placeholder||''"></van-field>
      <van-field
          v-if="obj.type==='picker'"
          v-model="obj.showText"
          is-link
          readonly
          :name="obj.name"
          :label="obj.label"
          :placeholder="obj.placeholder||''"
          :rules="obj.rules||[]"
          required = "auto"
          @click="pickerShow(obj)"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker :columns="pickerOptions"  @cancel="showPicker = false" @confirm="pickerConfirm"></van-picker>
      </van-popup>
    </template>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped lang="less">
/deep/ .van-cell__title{
  width:40%;
}
</style>
