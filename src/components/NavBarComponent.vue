<template>
  <div class="nav-content">
     <div class="title">
       <img src="images/logo.png" alt="logo">
       </div>
     <div class="menu">
       <ul>
           <a href="#" @click.prevent="inicio"><li class="active">inicio</li></a>
           <a href="#" @click.prevent="loja"><li>Loja <i class="fa-solid fa-chevron-down"></i></li></a>
           <a href="#" @click.prevent="cursos"><li>Cursos <i class="fa-solid fa-chevron-down"></i></li></a>
           <a href="#" @click.prevent="precos"><li>Precos <i class="fa-solid fa-chevron-down"></i></li></a>
           <a href="#" @click.prevent="explicador"><li>Explicador <i class="fa-solid fa-chevron-down"></i></li></a>
           <a href="#" @click.prevent="avaliacao"><li>Avaliacoes do Explicador <i class="fa-solid fa-chevron-down"></i></li></a>
           <a href="#" @click.prevent="compras"><li>Compras(0) <i class="fa-solid fa-bag-shopping" style="color: #38A868;"></i></li></a>
           <a href="#" @click.prevent="cadastrar"><li>Cadastrar-se <i class="fa-solid fa-circle-user" style="color: #38A868;"></i></li></a>
       </ul>
      </div>
  </div>
  
</template>

<script>
export default {
name: 'NavBarComponent',

methods:{
  inicio(){
    this.$router.push({name:'home'})
  },
  loja(){
    this.$router.push({name:'loja'})
  },
  cursos(){
    this.$router.push({name:'cursos'})
  },
  precos(){
    this.$router.push({name:'precos'})
  },
  explicador(){
    this.$router.push({name:'explicador'})
  },
  avaliacao(){
    this.$router.push({name:'avaliacao'})
  },
  compras(){
    this.$router.push({name:'avaliacao'})
  },
  cadastrar(){
    this.$router.push({name:'cadastrar'})
  },


}

}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap'); //font-family: 'Mandali', sans-serif;

.nav-content{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 5px;
  // background-color: teal;

  .title{
    width: 20%;
    color: white;
    font-size: 24px;
      padding-left: 90px;

    img{
      width: 100px;
      height: 100px;
    }
    
  }
  .logout{
    color: white;
    font-size: 20px;
  }
  a{
    text-decoration-line: none;
  }
  .menu{
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;
    ul{

      display: flex;
      flex-direction: row;
      list-style-type: none;
      justify-content: space-between;

      li{
        color: black;
        font-family: 'Mandali', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
      }
      .active{
        color: #38A868;
      }
    }
  }
}
</style>