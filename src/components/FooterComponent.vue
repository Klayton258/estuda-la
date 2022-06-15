<template>
  <footer>
    <div class="container">
        <h1>Subscreva-se para ter informações
             <br> acerca de todos cursos</h1>
        <p>Mais de 20 000 alunos semanais aprendem com a estuda lá. Subscreva-se a novos cursos.</p>
        <div class="col-6 btn-subscribe">
          <div class="input-group mb-4 mt-5">
            <input type="text" class="form-control" placeholder="Escreva seu email" aria-label="Escreva seu email" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
         </div>
        </div>
    </div>
    <div class="row footer-row p-2">
      <div class="col-3 footer-icons">
         <img src="images/logo.png" width="100px" height="100px" alt="logo"> <br>
         <img src="images/social.png" width="100px" height="30px" alt="logo">
         <p>&copy; 2022 estuda la</p>
      </div>
      <div class="col-3 footer-courses">
          <h4>Cursos</h4>
          <p>Cursos de aluas</p>
          <p>Cursos de aulas virtuais</p>
          <p>E-learning courses</p>
          <p>Video Courses</p>
          <p>Offline Courses</p>
      </div>
      <div class="col-2 footer-comunity">
          <h4>Comunidade</h4>
          <p>Estudantes</p>
          <p>Parteners</p>
          <p>Developers</p>
          <p>Transações</p>
          <p>Blog</p>
          <p>Teaching Center</p>
      </div>
      <div class="col-2 footer-links">
          <h4>Links Rapidos</h4>
          <p>Inicio</p>
          <p>Educação Profissional</p>
          <p>Cursos</p>
          <p>Admissões</p>
          <p>Testemunhos</p>
          <p>Programas</p>
      </div>
      <div class="col-2 footer-more">
          <h4>Mais</h4>
          <p>Media</p>
          <p>Investidores</p>
          <p>Termos</p>
          <p>Privacidade</p>
          <p>Ajuda</p>
          <p>Contacto</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss'; 

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $darkgreen;
  border-radius: 20px;
  width: 100%;
  padding: 50px;
  margin-top: 200px;
  margin-bottom: 100px;

  h1{
    text-align: center;
    font-weight: bold;
    font-weight: 100px;
    line-height: 58px;
    color: $white;
    padding-bottom: 20px;
    padding-top: 30px;
  }
  p{
    color: $white;
    font-size: 18px;
  }

  .btn-subscribe{
    input{
      width: 60%;
      height: 60px;
      background-color: $green2;
      border: none;
      color: $white;
      border-radius: 18px;
    }
    button{
      width: 20%;
      border-radius: 18px;
      background-color: $greenlight;
      border: $greenlight;
      color: $white;
    }
  }
}

.footer-row{
    margin-bottom: 100px;
    h4{
      color: $darkblue;
      font-weight: bold;
      padding-bottom: 10px;
    }
    p{
      font-size: 18px;
      font-weight: 500;
    }
  .footer-icons{
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
  }
}
</style>