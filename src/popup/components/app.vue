<template>
  <div style="width: 600px; height: 500px; text-align: center; padding: 100px;">
    <a-button type="primary" @click="showData">Primary</a-button>
    <div v-show="show" >{{data}}</div>
  </div>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  setup(){
    const data = ref('HelloWorld！！！')
    const show = ref(false)
    const showData = () => {
      show.value = !show.value
    }

    return{
      data,
      show,
      showData
    }
  }

})
</script>
