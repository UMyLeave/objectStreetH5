<template>
<!--  <JpSelect v-model="form.city" v-bind="selectFormData"/>-->
  <JpInput v-model="form.like" v-bind="inputFormData"/>
  <JpSwitch v-model="form.isLike" v-bind="switchFormData"/>
  <JpCheckBoxForPicker v-model="form.checkBoxValue" v-bind="checkBoxFormData"/>
</template>

<script setup>
import JpSelect from '@/components/jpSelect/index'
import JpInput from '@/components/jpInput/index'
import JpSwitch from '@/components/jpSwitch/index'
import JpCheckBoxForPicker from '@/components/jpCheckBoxForPicker/index'
import {onMounted, reactive, ref} from "vue";

const form = reactive({
  checkBoxValue:[],
  city: "",
  like:"",
  isLike:false,
})

const selectFormData = reactive(
    {
      name: "city",
      label: "城市",
      placeholder: "请选择城市",
      options: [
        {
          name: "澳门",
          value: "aoMen"
        },
        {
          name: "香港",
          value: "hongKong"
        },
      ],
    }
)
const inputFormData = reactive(
    {
        name: "user",
        label: "用户名",
        type: "text",
    }
)
const switchFormData = reactive(
    {
      name: "isLike",
      label: "喜欢吗?",
      type: "switch",
    }
)

const checkBoxFormData = reactive(
    {
      name: "city",
      label: "城市",
      placeholder: "请选择城市",
      options: [
        {
          name: "澳门",
          value: "aoMen"
        },
        {
          name: "香港",
          value: "hongKong"
        },
      ],
    }
)
onMounted(()=>{
  setTimeout(()=>{
    form.city = "hongKong",
    form.like = "123"
    form.isLike = true
    form.checkBoxValue = ['hongKong',"aoMen"]
  },500)
})
</script>


<style scoped>

</style>