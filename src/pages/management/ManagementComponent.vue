<template>
  <dashboardcomponent>
    <template v-slot:slot-content>
      <h1>Management</h1>
    </template>
  </dashboardcomponent>
</template>


<script>
import dashboardcomponent from '../../components/Dashboard/DashBoardComponent.vue'

export default {
  name: 'ManagementComponent',
  components:{
    dashboardcomponent
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>