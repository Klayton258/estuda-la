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
                  <span class="text" >Inscrever com google</span>
                </button>
                <div class="col-12">
                    <div class="row or-sub"> 
                        <hr style="width: 10%;"> 
                        <div class="textt" style="width: 50%;">Ou Increver-se com seu email</div> 
                        <hr style="width: 10%;"></div>
                </div>
                <div class="input-group mb-5 mt-5 col-6">
                  <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-5 col-6">
                  <span class="input-group-text" id="basic-addon2"><i class="fas fa-envelope"></i></span>
                  <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2">
                </div>
                <div class="input-group mb-5 col-6">
                  <span class="input-group-text" id="basic-addon3"><i class="fas fa-lock"></i></span>
                  <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon3">
                </div>
                <div class="mb-3 form-ch">
                    <label class="form-check1" for="exampleCheck1">I agreed to the Terms & Conditions
                        <input type="checkbox" class="input-check" id="exampleCheck1">
                        <span class="checkmark"></span>
                  </label>
                </div>
                <button type="submit" class="btn btn-primary btn-submit">Submit</button>
                <div class="login">Ja tem conta? <a href="#" @click.prevent="login">Entrar</a></div>
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
            this.$router.push({name:'entrar'})
        },
    }

}
</script>

<style lang="scss" src="./style.scss" scoped>

</style>