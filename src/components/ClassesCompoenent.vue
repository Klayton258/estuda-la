<template>
  <section class="secction-2">
    <div v-if="title == 'true'" class="container">
        <h1 class="text-center">Aulas qualificadas para estudantes</h1>
        <p class="simple-text">
          Uma licao ou aula e um periodo estruturado de tempo em se pretende que a
          apredizagem ocorra. Envolve um ou mais alunos professor ou instrutor.  
        </p>

      <div class="col-6">
        <div class="row levels-school">
          <div class="col-4 btn-class">
            <div class="btn btn-primary btn-cursos">Creache</div>
          </div>
          <div class="col-4 btn-class">
            <div class="btn btn-primary btn-cursos active">Secundaria</div>
          </div>
          <div class="col-4 btn-class">
            <div class="btn btn-primary btn-cursos">Universidade</div>
          </div>
        </div>
      </div>
    </div>
      <div class="row g-4  grades-row">
        <div class="card">
          <img src="images/1.png" class="card-img-top classes-images">
          <div class="card-body">
            <h5 class="card-title">Primeira classe</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Fundacoes de bases para todos alunos </h6>
            <div class="btn btn-primary btn-details">Detalhes</div>
          </div>
        </div>
        <div class="card">
          <img src="images/2.png" class="card-img-top classes-images">
          <div class="card-body">
            <h5 class="card-title">Segunda classe</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Fundacoes de bases para todos alunos</h6>
            <div class="btn btn-primary btn-details">Detalhes</div>
          </div>
        </div>
        <div class="card">
          <img src="images/3.png" class="card-img-top classes-images">
          <div class="card-body">
            <h5 class="card-title">Terceira classe</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Fundacoes de bases para todos alunos</h6>
            <div class="btn btn-primary btn-details active">Detalhes</div>
          </div>
        </div>
        <div class="card">
          <img src="images/4.png" class="card-img-top classes-images">
          <div class="card-body">
            <h5 class="card-title">Quarta classe</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Fundacoes de bases para todos alunos</h6>
            <div class="btn btn-primary btn-details">Detalhes</div>
          </div>
        </div>
        <div class="card">
          <img src="images/5.png" class="card-img-top classes-images">
          <div class="card-body">
            <h5 class="card-title">Quinta classe</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Fundacoes de bases para todos alunos</h6>
            <div class="btn btn-primary btn-details">Detalhes</div>
          </div>
        </div>
        <div class="card">
          <img src="images/6.png" class="card-img-top classes-images">
          <div class="card-body">
            <h5 class="card-title">Sexta classe</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Fundacoes de bases para todos alunos</h6>
            <div class="btn btn-primary btn-details">Detalhes</div>
          </div>
        </div>
        <div class="card">
          <img src="images/7.png" class="card-img-top classes-images">
          <div class="card-body">
            <h5 class="card-title">Setima classe</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Fundacoes de bases para todos alunos</h6>
            <div class="btn btn-primary btn-details">Detalhes</div>
          </div>
        </div>
        <div class="card">
          <img src="images/8.png" class="card-img-top classes-images">
          <div class="card-body">
            <h5 class="card-title">Oitava classe</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Fundacoes de bases para todos alunos</h6>
            <div class="btn btn-primary btn-details">Detalhes</div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        title: Boolean,
    }
}
</script>

<style lang="scss" scoped>
.secction-2{
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
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

  .levels-school{
    margin-bottom: 100px;
    justify-content: center;
    align-content: center;

    .btn-class{
      display: flex;
      justify-content: center;
      align-content: center;
      padding-top: 10px;

      .btn-cursos{
        align-self: center;
        padding: 20px 30px 20px 30px;
        background-color: transparent;
        font-weight: 500;
        color: #000;
        border: none;
        border-radius: 12px;
      }
    }
    .btn-class .active{
      color: #fff;
        background-color: #1abf60;
    }
  }
  .grades-row{
    margin-bottom: 150px;
    justify-content: center;
    padding-left: 160px;
    padding-right: 160px;

    .card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      width:19rem;
      margin: 10px;
      padding-top: 30px;
      border-radius: 20px;
      border: none;

      .classes-images{
        width: 20%;
        align-self: center;
      }
      h5{
        text-align: center;
        font-size: 30px;
      }
      h6{
        text-align: center;
      }
      .card-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card-subtitle{
          line-height: 30px;
          font-size: 20px;
          font-weight: 400;
          margin-top: 20px;
        }
        .btn-details{
          margin-top: 20px;
          margin-bottom: 20px;
          width: 60%;
          font-weight: 500;
          color: #1abf60;
          background-color: transparent;
          border: 2px solid  #1abf60;
        }
        .active{
          color: white;
          background-color: #1abf60;
          border: solid  #1abf60;
        }
      }
    }
  }

}
</style>