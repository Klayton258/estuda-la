<template>
<navbar />
    <section class="header">
    <div class="contain">
     <img src="images/Header-cursos.png"  alt="">
    </div>
  </section>

  <section class="container section-btns">
      <div class="col-12 col-btns">
          <div class="levels-school g-2">
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Todos Cursos</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Creache</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos active">Secundaria</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Universidade</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Informatica</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Ciencias</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos">Ciencias</div>
            </div>
            <div class="col-2 btn-class">
              <div class="btn btn-primary btn-cursos" style="color: #1abf60">Mais cursos</div>
            </div>
          </div>
        </div>
  </section>
  <!-- <div class="container mb-5">
    <h2>Classes</h2>
  </div> -->
  
  <classes :title="'false'"/>

  <div class="container">
    <h2>Outros cursos para Secundaria</h2>
    <div class="row">
      <div class="col-lg-8 input-bg">
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
              <button class="btn btn-secondary search-btn" type="button" @click.prevent="teste">
                <i class="fas fa-search"></i><div class="m-2">Procurar</div>
              </button>
            </div>
          </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="row card-aside">
          <img src="images/books/4.png" alt="">
          <div class="col card-context">
            <div class="row d-flex justify-content-start">
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
            </div>
            <div class="title">
              Os três mosquiteiros, by Alexandre Dumas
            </div>
            <div class="price">
              MZN 1500.00
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row card-aside">
          <img src="images/books/4.png" alt="">
          <div class="col card-context">
            <div class="row d-flex justify-content-start">
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
              <i class="fas fa-star" style="color: yellow !important; width: 8% !important; padding: 0% !important;"></i>  
            </div>
            <div class="title">
              Os três mosquiteiros, by Alexandre Dumas
            </div>
            <div class="price">
              MZN 1500.00
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footerComponent />
</template>

<script>
import navbar from '../../components/NavBarComponent.vue';
import classes from '../../components/ClassesCompoenent.vue';
import footerComponent from '../../components/FooterComponent.vue';

export default {
components:{
    navbar,
    classes,
    footerComponent
},
data(){
  return{
    fruis: Array

  }
},

methods: {
  teste(){
      this.fruis=[
    {
      name: 'Orange',
      quantity: 25
    },
    {
      name: 'Banana',
      quantity: 30
    },
    {
      name: 'Apple',
      quantity: 50
    }
  ];
  console.table(this.fruis)
  }
},
}
</script>

<style lang="scss" src="./style.scss" scoped>


</style>