<template>
  <van-form class="page" @submit="onSubmit">
    <template v-for="obj in form">
      <van-field v-if="obj.type==='field'"
                 v-model="obj.value"
                 :label="obj.label||''"
                 :name="obj.name||''"
                 :placeholder="obj.placeholder||''"
                 :rules="obj.rules||[]"
                 required = "auto"></van-field>
      <van-field
          v-if="obj.type==='picker'"
          v-model="obj.showText"
          :label="obj.label"
          :name="obj.name"
          :placeholder="obj.placeholder||''"
          :rules="obj.rules||[]"
          is-link
          readonly
          required = "auto"
          @click="pickerShow(obj)"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker :columns="pickerOptions"  @cancel="showPicker = false" @confirm="pickerConfirm"></van-picker>
      </van-popup>
    </template>
    <div style="margin: 16px;">
      <van-button block native-type="submit" round type="primary">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
// 例如：import  《组件名称》  from '《组件路径》 ';
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref
} from 'vue'

export default {
  name: "jpForm",
  // import 引入的组件需要注入到对象中才能使用
  data(){
    return{
      pickerOptions:[],
      currentObj:{}
    }
  },
  components: {},
  props: {
    form: {
      type: Object
    },
    submit:{
      type: Function
    }
  },
  // 计算属性 类似于 data 概念
  computed: {},
  // 监控 data 中的数据变化
  watch: {},
  // 方法集合
  methods: {
    pickerShow(item){
      this.pickerOptions =JSON.parse(JSON.stringify(item.options))
      this.currentObj = item
      this.showPicker = true
    },
    pickerConfirm({selectedOptions}){
      this.currentObj.showText= selectedOptions[0].text
      this.formData[this.currentObj.name] = selectedOptions[0].value
      this.showPicker = false
      if(this.currentObj.change){
        this.currentObj.change(selectedOptions[0])
      }
    }
  },

  created() {
    this.formData =this.form.map(i=>{
      return {[i.name]:i.value}
    })
    },

  // setup在beforeCreate之前执行一次，this是undefined。
  setup() {


    const formDate = ref('')
  const initData  = ()=>{
    formData =form.map(i=>{
      return {[i.name]:i.value}
    })
  }


    onBeforeMount(() => {
    })// 生命周期 - 挂载之前
    onMounted(() => {

    })// 生命周期 - 挂载完成（可以访问 DOM 元素）
    onBeforeUpdate(() => {
    })// 生命周期 - 更新之前
    onUpdated(() => {

    })// 生命周期 - 更新之后
    onBeforeUnmount(() => {
    })// 生命周期 - 销毁之前
    onUnmounted(() => {
    })// 生命周期 - 销毁完成
    onErrorCaptured((err) => {
    })// 当事件处理程序或生命周期钩子抛出错误时
    onRenderTracked((e) => {
    })// 渲染的时候可以追踪到
    onRenderTriggered((e) => {
    })// 重新渲染的时候触发
    // 如果页面有 keep-alive 缓存功能,这个两个函数会触发
    onActivated(() => {
    })//进入的时候触发
    onDeactivated(() => {
    })//离开的时候触发

    //表单提交方法
    const onSubmit =(value)=>{
      console.log('log:', value, '==>value')
    }
    const showPicker = ref(false)

    const showCascader = ref(false)

    return {//组件中使用的变量和绑定的方法都需要return才能使用
      onSubmit,
      showPicker
    }
  },
}
</script>

<style lang="less" scoped>
.page{
  height: 100vh;
  width: 100vw;
}
</style>
