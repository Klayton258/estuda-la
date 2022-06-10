<template>
  <dashboardcomponent>
    <template v-slot:slot-content>
      <h1>Products</h1>
      <formComponent/>
      <tablecomponent :products="products" />
    </template>
  </dashboardcomponent>
</template>


<script>
import dashboardcomponent from '../../components/Dashboard/DashBoardComponent.vue'
import tablecomponent from '../../components/Dashboard/components/TableComponent.vue'
import formComponent from '../../components/Dashboard/components/FormComponent.vue'
import axios from 'axios'
// const axios = require('axios').default;

export default {
  name: 'ProductsComponent',
  data(){
    return{
      products: []
    }
  },
  mounted(){
    this.getProducts()
  },
  methods:{
    async getProducts(){
        const response = await axios.get('http://127.0.0.1:8000/api/houses');

      if(response.data.code == 200){
        console.log(response.data);
        this.products = response.data.data
      }else{
        console.error("Ocurred any error "+ response.status)
      }
    }
  },
  created:function(){
    // this.getProducts()
  },
  components:{
    dashboardcomponent,
    tablecomponent,
    formComponent
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>