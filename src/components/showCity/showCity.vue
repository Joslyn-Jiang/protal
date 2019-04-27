<template>
  <div id="app">
      <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
   <TranslateForm v-on:formSubmit='translateText'></TranslateForm>
  </div>
</template>

<script>
export default {
  name: 'showCity',
  methods:{
      translateText(text){
          alert(text)
      }
  }
}
</script>

<style>
#app {
    text-align: center;
}
</style>