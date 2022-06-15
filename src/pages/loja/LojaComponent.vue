<template>
  <navbar />
  <section class="header">
    <div class="container">
     <img src="images/loja-banner.png" width="100%"  alt="">
    </div>
  </section>
  <section class="content">

    <div class="container">
      <aside class="col-4">
        <!-- <h1>Livros Populares</h1> -->
      </aside>
      <article class="col-8">
        
      </article>
    </div>
  </section>
  <footercomponent/>
</template>


<script>
import navbar from '../../components/NavBarComponent.vue'
import footercomponent from '../../components/FooterComponent.vue'

export default {
  name: 'LojaComponent',
  components:{
    navbar,
    footercomponent
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>