<template>
  <div id="app">
    <h1>App 组件</h1>
    <Button type="danger"></Button>
    <Button type="primary"></Button>
  </div>

</template>

<script>

export default {
  mounted(){
    this.play('这是我想要提示的内容。。。')
  }
}
</script>

<style lang="stylus">

</style>
