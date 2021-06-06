<template>
<div>
    <h1>home page - - {{$store.state.num}} -- {{msg}}</h1>
    <input type="text" v-model="msg">
</div>
</template>
<style lang="scss" scoped>
$color: red;
h1 {
    color: $color;
    background: green;
    font-size: 50px;
}
</style>
<script>
export default {
    data() {
        return {
            msg: 'hello world'
        }
    }
}
</script>