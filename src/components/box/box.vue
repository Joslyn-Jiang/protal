<template>
  <div>
    loading...
    <div>{{msg}}</div>
  </div>
</template>
<script>
export default {
  name: 'box',
  props:['msg']
}
</script>
<style>
.button {
  width:100px;
}
</style>