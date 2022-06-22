<template>
  <navbar />
  <section class="header">
    <div class="contain">
     <img src="images/loja-banner.png" width="100%"  alt="">
    </div>
  </section>
  <section class="content">

    <div class="row popular-row">
      <aside class="col-lg-4">
        <h1>Livros Populares</h1>
        <div class="row">
          <img src="images/books/1-1.png" alt="">
        </div>
      </aside>
      <article class="col-lg-8">
        <div class="col-8 col-btns">
          <div class="row levels-school g-4">
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos active">Todos livros</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Creache</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Secundaria</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Universidade</div>
            </div>
          </div>
        </div>

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