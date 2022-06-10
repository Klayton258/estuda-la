<template>
  <dashboardcomponent>
    <template v-slot:slot-content>
      <h1>Clients</h1>
    </template>
  </dashboardcomponent>
</template>


<script>
import dashboardcomponent from '../../components/Dashboard/DashBoardComponent.vue'

export default {
  name: 'ClientsComponent',
  components:{
    dashboardcomponent
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>