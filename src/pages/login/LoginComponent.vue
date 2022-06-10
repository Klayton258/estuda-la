<template>

<div class="main">
  <div class="login">
    <div class="login-page">
         <form>
            <div class="mb-2">
              <h3>Login</h3>
            </div>
           <div class="mb-3">
             <!-- <label for="exampleInputEmail1" class="form-label">username</label> -->
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username">
             <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
           </div>
           <div class="mb-3">
             <!-- <label for="exampleInputPassword1" class="form-label">password</label> -->
             <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password">
           </div>
             <!-- <div class="mb-3 form-check">
             <input type="checkbox" class="form-check-input" id="exampleCheck1">
             <label class="form-check-label" for="exampleCheck1">Check me out</label>
           </div> -->
           <button type="submit" @click.prevent="login" class="btn btn-info">Login</button>
         </form>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'LoginComponent',
  data(){
    return{

    }
  },

  methods:{
    login(){
      this.$router.push({name:'home'})
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />