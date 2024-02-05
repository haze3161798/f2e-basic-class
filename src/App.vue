<template>
  <HeaderPage/>
    <RouterView/>
  <FooterPage/>
</template>

<script>
// import HomePage from "@/Page/HomePage.vue";
import HeaderPage from "./components/HeaderPage.vue";
import FooterPage from "./components/FooterPage.vue";
export default {
  components: {
    HeaderPage,
    FooterPage
  }
}
</script>

<style>

</style>