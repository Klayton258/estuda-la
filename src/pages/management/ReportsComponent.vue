<template>
  <dashboardcomponent>
    <template v-slot:slot-content>
      <h1>Reports</h1>
    </template>
  </dashboardcomponent>
</template>


<script>
import dashboardcomponent from '../../components/Dashboard/DashBoardComponent.vue'

export default {
  name: 'ReportsComponent',
  components:{
    dashboardcomponent
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>