<template>
  <div id="app">
      <router-view/>
      <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
import {reqFoodCategorys} from "./api"
export default {
    async mounted(){
        const result=await reqFoodCategorys()
        console.log(result)
    },
    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus">
.app
    width 100%
    height 100%
    background #f5f5f5
</style>