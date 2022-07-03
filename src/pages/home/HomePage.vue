<template>
  <div class="home-content">
    <navbar />
    <div class="container">
      <span class="elipse"></span>
      <span class="elipse2"></span>
      <span class="elipse3"></span>
      <div class="row">
        <div class="col-lg-9 content content-title">
          <div class="n-alert">Nunca pare de aprender</div>
          <div class="title">
            Aprenda mais com cursos online com a Estuda la
          </div>
          <p class="simple-text">
            Estuda la e uma plataforma de treinamento e de aprendizagem para
            todos <br />
            alunos que queiram aprender.
          </p>
          <div class="col-lg-10 input-bg">
            <div class="input-group">
              <button class="btn btn-outline-secondary btn-uny" type="button" 
              data-bs-toggle="dropdown" aria-expanded="false">Universidade <i class="fas fa-chevron-down"></i></button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action before</a></li>
                <li><a class="dropdown-item" href="#">Another action before</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
              <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
              <button class="btn btn-secondary search-btn" type="button">
                <i class="fas fa-search"></i>Procurar
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-3 content content-img">
          <img src="images/Group7632.png" width="600px" alt="" />
        </div>
      </div>
    </div>
  </div>
  <section class="secction-1">
    <div class="container">
      <h1 class="text-center">Videos de alta qualidade, audio <br> & aulas live</h1>
      <p class="simple-text">
        Vídeos de alta definição são v í deos de maior resolução e qualidade do que a definição padrão. Embora não <br>
        haja um significado padroni z ado para alta definição , geralmente qual quer imagem de vídeo com <br>
        480 linhas de varredura verticais ou 576 linhas verticais são consideradas de alta definição.
      </p>
      <div class="btn-class">
        <div class="btn btn-primary btn-cursos">Ver Cursos</div>
      </div>
      <img src="images/video-banner.png" class="online-class" alt="">
      <div class="row type-courses">
        <div class="col-4 aulas-audio">
          <div class="col-6 ">
            <span><i class="fa-solid fa-volume-high"></i></span> 
            <p> Aulas Audio</p>
          </div>
        </div>
        <div class="col-4 aulas-audio">
          <div class="col-6 ">
            <span><i class="fa-solid fa-tv"></i></span> 
            <p> Aulas Live</p>
          </div>
        </div>
        <div class="col-4 aulas-audio">
          <div class="col-6 ">
            <span><i class="fa-solid fa-circle-play"></i></span> 
            <p> Aulas gravadas</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <classes :title="'true'"/>

  <section class="secction-3">
    <div class="container">
      <div class="row writter-row">
        <div class="col-4">
          <div class="n-alert">Nivel Universitario</div>
          <h1>Melhore as suas habilidades com cursos praticos.</h1>
          <p>Video de alta definicao e um video de maior resolucao e qualidade do que a definicao padrao. Embora nao haja um significado padronizado para alta definicao, geralmente  qualquer video.</p>
          <div class="btn btn-primary btn-registe">Registe agora</div>
        </div>
        <div class="col-8 writter-image">
          <img src="images/writter-desk.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="secction-4">
    <div class="container">
      <div class="row info-row">
        <div class="col-6 info-image">
          <img src="images/girl-green-back.png" alt="">
        </div>
        <div class="col-6 info-text">
         <h1> Gostaria de fazer parte da equipe?Cadastre-se como professor</h1>
         <p>Video de alta definicao e um video de maior resolucao e <br> qualidade do que a definicao padrao. Embora nao haja um <br> significado padronizado para alta definicao, geralmente  qualquer video.</p>
         <div class="btn btn-primary btn-info">Informacao de carreira</div>
        </div>
      </div>
    </div>
  </section>
  <footercomponent />
</template>


<script>
import navbar from "../../components/NavBarComponent.vue";
import footercomponent from "../../components/FooterComponent.vue";
import classes from "../../components/ClassesCompoenent.vue";

export default {
  name: "HomeComponent",
  components: {
    navbar,
    classes,
    footercomponent,
  },
};
</script>

<style src="./styles.scss" lang="scss" scoped>

</style>