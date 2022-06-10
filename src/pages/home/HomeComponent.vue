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
      <img src="images/teacher.png" class="online-class" alt="">
      <div class="row type-courses">
        <div class="col-4 aulas-audio">
          <div class="col-6 ">
            <span><i class="fa fa-video-camera" aria-hidden="true"></i></span> 
            <p> Aulas Audio</p>
          </div>
        </div>
        <div class="col-4 aulas-audio">
          <div class="col-6 ">
            <span><i class="fa fa-video-camera" aria-hidden="true"></i></span> 
            <p> Aulas Live</p>
          </div>
        </div>
        <div class="col-4 aulas-audio">
          <div class="col-6 ">
            <span><i class="fa fa-video-camera" aria-hidden="true"></i></span> 
            <p> Aulas gravadas</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import navbar from "../../components/NavBarComponent.vue";

export default {
  name: "HomeComponent",
  components: {
    navbar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mandali&display=swap"); //font-family: 'Mandali', sans-serif;

.home-content {
  .container {
    padding-top: 0px;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: 100px;
    // margin-right: 50px;
    height: 100vh;
    .content-title {
      top: -300px;
    }
    .content-img {
      padding-top: 100px;
    }
    .row .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;

      .n-alert {
        background-color: #ffffff;
        color: #1abf60;
        align-self: flex-start;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        z-index: 1;
      }

      .title {
        width: 100%;
        // font-family: 'Mandali', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 85px;
        line-height: 95px;
        color: rgb(0, 28, 84);
        z-index: 1;
      }
      .simple-text{
        padding-top: 40px;
        color: gray;
        z-index: 1;
      }
      .input-bg{
        margin-top: 30px;
        background-color: #fff;
        border-radius: 10px !important;
      }
      .form-control{
        height: 60px;
        border: none;
      }
      .btn-uny{
        background-color: #fff;
        border: none;
        border-radius: 10px !important;
        i{
          color: #1abf60;
        }
      }
      .btn-uny:hover{
        color: #8c8689;
      }
      .search-btn{
        background-color: #1abf60;
        border: none;
        border-radius: 10px !important;
        color: #fff;
        margin: 5px;
        padding: 5px;
      }
      .search-btn:hover{
        border: none;
      }
    }
    .elipse {
      position: absolute;
      width: 436px;
      height: 436px;
      left: 231px;
      top: 397px;
      border-radius: 50%;
      background: rgba(28, 188, 97, 0.074);
      filter: blur(190px);
    }
    .elipse2 {
      position: absolute;
      width: 436px;
      height: 436px;
      left: 0px;
      top: 397px;
      background: rgba(28, 188, 97, 0.074);
      filter: blur(190px);
    }
    .elispe3 {
      position: absolute;
      width: 436px;
      height: 436px;
      left: 900px;
      top: 0px;
      background: rgba(28, 188, 97, 0.074);
      filter: blur(60px);
    }
  }
}

.secction-1{
  .container{
    margin-top: 150px;
    h1{
      font-size: 50px;
    }
    .simple-text{
      margin-top: 30px;
      text-align: center;
      line-height: 35px;
      font-size: 20px;
      color: #8c8689;
    }
    .btn-class{
      display: flex;
      justify-content: center;
      align-content: center;
      padding-top: 10px;

      .btn-cursos{
        align-self: center;
        padding: 25px 40px 25px 40px;
        background-color: #1abf60;
        border: none;
        border-radius: 12px;
      }
    }
    .online-class{
      width: 100%;
    }
    .type-courses{
      margin-bottom: 150px;
      justify-content: center;
      align-content: center;

      .aulas-audio{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        height: 100px;
        div{
          display: flex;
          justify-content: start;
          align-items: center;
          background-color: #fff;
          border-radius: 10px;
          height: 80px;
          width: 60%;
          padding-left: 10px;

          span{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px;
            margin: 0px;
            width: 30%;
            height: 80%;
            background-color: #1abf5f92;
            border-radius: 10px;
          }
          p{
            width: 70%;
            margin: 0px;
            font-weight: bold;
            font-size: 18px;
            padding-left: 20px;
          }
        }
      }
    }
  }

}
</style>