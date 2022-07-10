<template>
    <!-- <navbar /> -->
  <section class="secction-1">
    <div class="container">
        <div class="subscribe-cont row">
            <div class="col-5 col-presentation">
                <h2>Bem vindo a plataforma de educação online Estuda lá</h2>
                <img src="images/login-undraw.png">
            </div>

            <div class="col-2 divider1"> <hr class="divider"> </div>

            <div class="col-5 col-inputs">
                <button class="btn btn-primary btn-google col-10">
                  <span class="icon" aria-hidden="true"><i class="fab fa-google-plus-g" style="color: white"></i></span>
                  <span class="text" >Entrar com google</span>
                </button>
                <div class="col-12">
                    <div class="row or-sub"> 
                        <hr style="width: 10%;"> 
                        <div class="textt" style="width: 50%;">Ou entrar com seu email</div> 
                        <hr style="width: 10%;"></div>
                </div>
                <div class="input-group mb-5 mt-5 col-6">
                  <span class="input-group-text" id="basic-addon2"><i class="fas fa-envelope"></i></span>
                  <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2">
                </div>
                <div class="input-group mb-5 col-6">
                  <span class="input-group-text" id="basic-addon3"><i class="fas fa-lock"></i></span>
                  <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon3">
                </div>
                  <button type="submit" class="btn btn-primary btn-submit" @click.prevent="login">Entrar</button>

                <div class="row mt-3">
                   <div class="mb-3  form-ch col-6">
                    <label class="form-check1" for="exampleCheck1">lembrar password
                        <input type="checkbox" class="input-check" id="exampleCheck1">
                        <span class="checkmark"></span>
                  </label>
                </div>
                  <div class="col-6">
                    <div class="login"><a href="#">Esqueceu a senha? </a></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </section>

  <!-- <footerComponent /> -->
</template>

<script>
import navbar from "../../components/NavBarComponent.vue";
import footerComponent from "../../components/FooterComponent.vue";

export default {
    components:{
        navbar,
        footerComponent
    },
    methods:{
      login(){
        this.$router.push({name:'home'})
      }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped>

</style>